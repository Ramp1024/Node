const express = require('express');

const app = express();

app.get('/', function(req , res){
    response.send("<h1>Hello, world!!</h1>");
})

app.get('/contact', function(req, res){
    res.send("Contact me at: ramprakash333@gmail.com");
})

app.get('/hobbies', function(req, res){
    res.send("Coffee");
})

app.listen(3000 , function(){
    console.log('Server started at port 3000');
});