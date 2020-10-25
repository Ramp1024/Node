const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine" , "ejs");
app.use(express.static("public"));


app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect("mongodb://localhost:27017/civilDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const clientSchema = {
    email: String,
    password: String
}

const Client = new mongoose.model("Client" , clientSchema);

const builderSchema = {
    email: String,
    password: String
}

const Builder = new mongoose.model("Builder" , builderSchema);

app.get("/" , function(req, res){
    res.render("home");
})

app.get("/client-register" , function(req, res){
    res.render("client-register");
})

app.post("/client-register" , function(req, res){
    const newClient = new Client({
        email: req.body.username,
        password: req.body.password 
    });

    newClient.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.render("client-page");
        }
    })
})

app.get("/client-login" , function(req, res){
    res.render("client-login");
})

app.post("/client-login" , function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    Client.findOne({email: username} , function(err , foundUser){
        if(err){
            console.log(err);
        }else{
            if(foundUser){
                if(foundUser.password === password){
                    res.render("client-page");
                }
            }
        }
    })
})

app.get("/constructor-register" , function(req, res){
    res.render("constructor-register");
});

app.post("/constructor-register" , function(req, res){
    const newBuilder = new Builder({
        email: req.body.username,
        password: req.body.password 
    });

    newBuilder.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.render("constructor-page");
        }
    })
})

app.get("/constructor-login" , function(req, res){
    res.render("constructor-login");
})

app.post("/constructor-login" , function(req , res){
    const username = req.body.username;
    const password = req.body.password;

    Builder.findOne({email: username} , function(err , foundUser){
        if(err){
            console.log(err);
        }else{
            if(foundUser){
                if(foundUser.password === password){
                    res.render("constructor-page");
                }
            }
        }
    })
})

app.listen(3000 , function(){
    console.log("Server started successfully on port 3000");
})