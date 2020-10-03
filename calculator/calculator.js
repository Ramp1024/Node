
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true})); 

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator" , function(req , res){
    res.sendFile(__dirname + "/index2.html");
})

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is: " + result);

});

app.post("/bmiCalculator", function(req , res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var bmiResult = weight/height;

    res.send("The result of the BMI Calculation is: " + bmiResult);
})

app.listen(3000, function(){
    console.log("Server started at port 3000");
});