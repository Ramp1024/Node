const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

app.get("/" , function(req , res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/" , function(req , res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members : [
            {
                email_address : email,
                status : "subscribed",
                merge_fileds : {
                    FNAME : firstName,
                    LNAME : lastName,
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us2.api.mailchimp.com/3.0/lists/6347d9239c"

    const options = {
        method : "POST",
        auth : "ram1024:a838ea5a6a61dd1b8443285c0666e3fb2-us2"
    }
    
    const request = https.request(url , options , function(response){

        if (response.statusCode ===200){
            res.sendFile(__dirname + "/success.html");
        }else{
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data" ,  function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
})

app.post("/failure" , function(req , res){
    res.redirect("/");
})

app.listen(3000, function(){
    console.log("Server started at port 3000");
})

