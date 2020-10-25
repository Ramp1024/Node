//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//connects the mongoose to the mongoDB server
mongoose.connect("mongodb://localhost:27017/todolistDB", 
                {useNewUrlParser: true,
                 useUnifiedTopology: true,
                 useFindAndModify: false
})
//Schema for the basic todo item list
const todoSchema = {
  name: String
};
//mongoose-model
const todo = mongoose.model("todoItem" , todoSchema);

const todo1 = new todo({
  name: "Welcome to your todo-list"
}) 

const todo2 = new todo({
  name: "Get Started by adding a new Item"
})

const todo3 = new todo({
  name: "Get your work done :)"
})
//An array consisting of the default todo-items
const defaultTodo = [todo1, todo2, todo3];
//A new Schema for the custom name which the customer gives
const customSchema = {
  name: String,
  items: [todoSchema]
};
//mongoose-model for the customSchema
//with a collection name of "lists"
const List = mongoose.model("List" , customSchema);
//Home Route
app.get("/", function(req, res) {
  //foundList returns an Array from the todo mongoose model
  todo.find({}, function(err, foundList){
    //if foundlist has zero elements then insert the default todo items
    if(foundList.length === 0){
      todo.insertMany(defaultTodo , function(err){
        if(err){
          console.log(err);
        }else{
          console.log("Successfully added default todo items");
        }
      })
      //redirecting loads the site again which displays the updated information
      //without redirecting or reloading the site, the information rendered is not chamged
      res.redirect("/");
    }else{
      //if foundList contains the default values then 
      //render the list.ejs, by passing the foundListItems to the ejs file
      res.render("list", {listTitle: "Today", newListItems: foundList});
    }
    //Logs all the todo-items rendered on the screen
    console.log(foundList);
  })
});
//Home post route
app.post("/", function(req, res){
  //gets the user entered value in the input tag with a name of newItem 
  const todoName = req.body.newItem; 
  const listName = req.body.list
  //An object of the todo model
  //consists a parameter with a value of todoName recieved from the list.ejs
  const todoNext = new todo({
    name: todoName
  });

  if(listName === "Today"){
    //save the new object to the todoItems database
    todoNext.save();
    //redirecting loads the site again which displays the updated information
      //without redirecting or reloading the site, the information rendered is not chamged
    res.redirect("/");
  }else{
    //if the listName is custom entered by the user
    //then we find the entered custom name in the lists collection
    List.findOne({name: listName}, function(err, foundList){
      //the foundList returns an object with all the contents in the custom name page
      //adds todoNext which is the user entered new todo-item
      //to the foundList object
      foundList.items.push(todoNext);
      foundList.save();
      // redirects it to the customList name route
      res.redirect("/" + listName);
    })
  }
});
//Delete post route
app.post("/delete" , function(req, res){
  //get whether the checkbox with a name of "checkbox" is selected or not 
  //from the list.ejs
  const checkedTodoId = req.body.checkbox;
  const listName = req.body.listName;
  //if listName is "Today"
  //delete the selected item in the home route
  //else delete it the customList name Page
  if(listName === "Today"){
    //if the checkbox is checked
    //find the checked item by id and remove it using mongoose mode methods
    todo.findByIdAndRemove(checkedTodoId , function(err){
      if(err){
        console.log(err);
      }else{
        console.log("Successfully deleted");
        res.redirect("/");
      }
    });
  } else{
    //find the page with a customList name 
    //use $pull to remove the want to be deleted item from the items array using the _id
    List.findOneAndUpdate({name: listName} , {$pull: {items: {_id: checkedTodoId}}} , function(err, foundList){
      if(!err){
        //when no error is found redirect to the customList name to render the updated information
        res.redirect("/" + listName);
      }
    })
  }
});
//Custom user list route
app.get("/:custom" , function(req, res){
  //gets the custom list name entered by the user in the routing or url
  const customList = _.capitalize(req.params.custom);
  //in order to avoid repetitions of creating a new collection 
  //same collection name, we find whether the custom list name is present already
  //and if not found, creates a new collection
  /*NOTE: foundList here returns an object, 
  while the foundList on the home route returns an array, this is because in the home 
  route we use find({}) which finds all the items in the collection, while 
  here findOne is used.
  */ 
  List.findOne({name: customList}, function(err , foundList){
    if(!err){
      if(!foundList){
        //Create a new List
        const list = new List({
          name: customList,
          items: defaultTodo
        });
        
        list.save();
        res.redirect("/" + customList)
      }else{
        //shows an existing list
        res.render("list", {listTitle: foundList.name, newListItems: foundList.items})
      }
    }
  })

});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
