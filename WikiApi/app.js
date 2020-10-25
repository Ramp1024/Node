const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine' , 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static("public"));

//Mongo Connection SetUp
mongoose.connect("mongodb://localhost:27017/WikiDB", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const wikiSchema = {
    title: String,
    content: String
}

const Article = mongoose.model("Article" , wikiSchema);
//
app.get("/articles" , function(req, res){
    Article.find({} , function(err ,results){
        if(err){
            res.send(results);
        }else{
            res.send(err);
        }
    })
});

app.post("/articles" , function(req, res){
   const postArticle = new Article({
       title: req.body.title,
       content: req.body.content
   })

   postArticle.save(function(err){
       if(!err){
           res.send("Successfully added a new article");
       }
   });
})

app.listen("3000" , function(){
    console.log("Server started at port 3000");
})
