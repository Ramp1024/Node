const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const saltRounds = 10

const cors = require("cors")

const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

app.set("view engine" , "ejs");
app.use(express.static("public"));

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);


app.use(bodyParser.urlencoded({
    extended: false
}))

mongoose.connect("mongodb+srv://admin-shyam:test123@cluster0.se3ym.mongodb.net/civilDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})

const clientSchema = new mongoose.Schema({
    username: String,
    password: String,
    batch1_from_timing : String,
    batch1_to_timing : String,
    batch1_projectName : String,
    batch1_department : String,
    batch1_wage : String,
    batch2_from_timing : String,
    batch2_to_timing : String,
    batch2_projectName : String,
    batch2_department : String,
    batch2_wage : String,
    batch3_from_timing : String,
    batch3_to_timing : String,
    batch3_projectName : String,
    batch3_department : String,
    batch3_wage : String,
    batch4_from_timing : String,
    batch4_to_timing : String,
    batch4_projectName : String,
    batch4_department : String,
    batch4_wage : String,
    project_title : String,
    foundationWork : String,
    excavationWork : String,
    interiorDesignWork : String,
    constructionWork : String,
    foundationWorkPrev : String,
    excavationWorkPrev : String,
    interiorDesignWorkPrev : String,
    constructionWorkPrev : String,
    totalPayment : String,
    material1 : String,
    material1_price : String,
    material2 : String,
    material2_price : String,
    material3 : String,
    material3_price : String,
    material4 : String,
    material4_price : String,
    material5 : String,
    material5_price : String,
    materials_cost : String,
    designPhoto : String,
    planPhoto : String,
    workPhoto : String
})

const Client = new mongoose.model("Client" , clientSchema);

const builderSchema = {
    username: String,
    password: String
}

const Builder = new mongoose.model("Builder" , builderSchema);

const workerSchema = {
  name: String,
  wagePerDay: String,
  workingFrom: Number,
  workingTo: Number,
  department: String
}

const Worker = new mongoose.model("Worker" , workerSchema);

const worker = new Worker({
  name : "ShyamRam"
})
//worker.save()

 app.get("/" , function(req, res){
     res.send("home");
 })


 app.route("/client-register")
     .get((req,res)=>{
         res.json("HI")
     }) 

     .post((req,res)=>{
       console.log(req.body);
      bcrypt.hash(req.body.password , saltRounds,(err,hash)=>{
          const client = new Client({
              username : req.body.username,
              password : hash,
              batch1_from_timing : '',
              batch1_to_timing : '',
              batch1_projectName : '',
              batch1_department : '',
              batch1_wage : '',
              batch2_from_timing : '',
              batch2_to_timing : '',
              batch2_projectName : '',
              batch2_department : '',
              batch2_wage : '',
              batch3_from_timing : '',
              batch3_to_timing : '',
              batch3_projectName : '',
              batch3_department : '',
              batch3_wage : '',
              batch4_from_timing : '',
              batch4_to_timing : '',
              batch4_projectName : '',
              batch4_department : '',
              batch4_wage : '',
              project_title : '',
              foundationWork : '',
              excavationWork : '',
              constructionWork : '',
              interiorDesignWork : '',
              foundationWorkPrev : '',
              excavationWorkPrev : '',
              constructionWorkPrev : '',
              interiorDesignWorkPrev : '',
              totalPayment : '',
              material1 : '',
              material1_price : '',
              material2 : '',
              material2_price : '',
              material3 : '',
              material3_price : '',
              material4 : '',
              material4_price : '',
              material5 : '',
              material5_price : '',
              materials_cost : '',
              designPhoto : '',
              planPhoto : '',
              workPhoto : ''
          })
      
          client.save(err=>{
              if(err){
                  console.log(err);
              }
      
              else{
                  res.json(client)
              }
          })
      })
    })

     app.route("/client-login")

     .get((req,res)=>{
      res.json("HI")
     }) 

     .post(async (req, res) => {
            const username = req.body.username
            const password = req.body.password
            console.log(req.body);
      Client.findOne({username : username},(err,foundUser)=>{
          if(err){
              console.log(err);
          }
          else{
              if(foundUser){
                  bcrypt.compare(password , foundUser.password , (err,result)=>{
                      if(result === true){
                          res.json(foundUser)
                      }else{
                        res.json("Passwors MisMatch")
                      }
                  })    
              }else{
                res.json("User Not Found")
              }
          }
      })
      })

        var clientName = ""
        app.route("/client-search")

        .post((req,res)=>{
             clientName = req.body.username
             console.log(clientName)
             Client.findOne({username : clientName},(err,foundClient)=>{
              if(err){
                  res.json(err);
              }else{
                  if(foundClient){
                       res.json(foundClient)
                      //res.json("Found")
                  }
                  else{
                       res.json("Not Found")
                  }
              }
          })
        })

        app.route("/client-details")
        .post((req,res)=>{
            Client.findOne({username : req.body.username},(err,foundClient)=>{
                if(err){
                    res.json(err);
                }else{
                    if(foundClient){
                        foundClient.foundationWorkPrev = foundClient.foundationWork,
                        foundClient.excavationWorkPrev = foundClient.excavationWork,
                        foundClient.interiorDesignWorkPrev = foundClient.interiorDesignWork,
                        foundClient.constructionWorkPrev = foundClient.constructionWork,
                        foundClient.foundationWork = req.body.foundationWork,
                        foundClient.excavationWork = req.body.excavationWork,
                        foundClient.interiorDesignWork = req.body.interiorDesignWork,
                        foundClient.constructionWork = req.body.constructionWork,
                        foundClient.save()
                        res.json("Updated Work Progress")
                    }else{
                        res.json("Not Found")
                    }
                }
            })
        })

        app.route("/client-detailsBatchOne")
        .post((req,res)=>{
            Client.findOne({username : req.body.username},(err,foundClient)=>{
                if(err){
                    res.json(err);
                }else{
                    if(foundClient){
                        foundClient.batch1_from_timing = req.body.batch1_from_timing,
                        foundClient.batch1_to_timing = req.body.batch1_to_timing,
                        foundClient.batch1_projectName = req.body.batch1_projectName,
                        foundClient.batch1_department = req.body.batch1_department,
                        foundClient.batch1_wage = req.body.batch1_wage,
                        foundClient.save()
                        res.json("Updated Batch One")
                    }else{
                        res.json("Not Found")
                    }
                }
            })
        })

        app.route("/client-detailsBatchTwo")
        .post((req,res)=>{
            Client.findOne({username : req.body.username},(err,foundClient)=>{
                if(err){
                    res.json(err);
                }else{
                    if(foundClient){
                        foundClient.batch2_from_timing = req.body.batch2_from_timing,
                        foundClient.batch2_to_timing = req.body.batch2_to_timing,
                        foundClient.batch2_projectName = req.body.batch2_projectName,
                        foundClient.batch2_department = req.body.batch2_department,
                        foundClient.batch2_wage = req.body.batch2_wage,
                        foundClient.save()
                        res.json("Updated Batch Two")
                    }else{
                        res.json("Not Found")
                    }
                }
            })
        })

        app.route("/client-detailsBatchThree")
        .post((req,res)=>{
            Client.findOne({username : req.body.username},(err,foundClient)=>{
                if(err){
                    res.json(err);
                }else{
                    if(foundClient){
                        foundClient.batch3_from_timing = req.body.batch3_from_timing,
                        foundClient.batch3_to_timing = req.body.batch3_to_timing,
                        foundClient.batch3_projectName = req.body.batch3_projectName,
                        foundClient.batch3_department = req.body.batch3_department,
                        foundClient.batch3_wage = req.body.batch3_wage,
                        foundClient.save()
                        res.json("Updated Batch Three")
                    }else{
                        res.json("Not Found")
                    }
                }
            })
        })

        app.route("/client-detailsBatchFour")
        .post((req,res)=>{
            Client.findOne({username : req.body.username},(err,foundClient)=>{
                if(err){
                    res.json(err);
                }else{
                    if(foundClient){
                        foundClient.batch4_from_timing = req.body.batch4_from_timing,
                        foundClient.batch4_to_timing = req.body.batch4_to_timing,
                        foundClient.batch4_projectName = req.body.batch4_projectName,
                        foundClient.batch4_department = req.body.batch4_department,
                        foundClient.batch4_wage = req.body.batch4_wage,
                        foundClient.save()
                        res.json("Updated Batch Four")
                    }else{
                        res.json("Not Found")
                    }
                }
            })
        })

        app.route("/client-detailsMaterials")
        .post((req,res)=>{
            Client.findOne({username : req.body.username},(err,foundClient)=>{
                if(err){
                    res.json(err);
                }else{
                    if(foundClient){
                        foundClient.material1 = req.body.material1,
                        foundClient.material1_price = req.body.material1_price,
                        foundClient.material2 = req.body.material2,
                        foundClient.material2_price = req.body.material2_price,
                        foundClient.material3 = req.body.material3,
                        foundClient.material3_price = req.body.material3_price,
                        foundClient.material4 = req.body.material4,
                        foundClient.material4_price = req.body.material4_price,
                        foundClient.material5 = req.body.material5,
                        foundClient.material5_price = req.body.material5_price,
                        foundClient.materials_cost = parseInt(foundClient.material1_price) + parseInt(foundClient.material2_price) +parseInt(foundClient.material3_price) +parseInt(foundClient.material4_price) +parseInt(foundClient.material5_price)  
                        foundClient.save()
                        res.json(foundClient)
                    }else{
                        res.json("Not Found")
                    }
                }
            })
        })

        app.route("/client-details-image")
        .post((req,res)=>{
            Client.findOne({username : req.body.username},(err,foundClient)=>{
                if(err){
                    res.json(err);
                }else{
                    if(foundClient){
                        foundClient.designPhoto = req.body.designPhoto,
                        foundClient.planPhoto = req.body.planPhoto,
                        foundClient.workPhoto = req.body.workPhoto
                        foundClient.save()
                        res.json("Updated Images")
                    }else{
                        res.json("Not Found")
                    }
                }
            })
        })


        app.route("/registered-clients")
        .get((req,res)=>{
            Client.find({},(err,foundClient)=>{
                if(err){
                    res.json(err);
                }else{
                    if(foundClient){
                         res.json(foundClient)
                        //res.json("Found")
                    }
                    else{
                         res.json("Not Found")
                    }
                }
            })
        })

        app.route("/show-details-present")
        .post((req,res)=>{
          console.log(req.body);
            Client.findOne({_id : req.body.clientId},(err,foundClient)=>{
                res.json(foundClient)
            })
        })

        app.route("/show-details-all")
        .post((req,res)=>{
          console.log(req.body);
            Client.findOne({username: req.body.username},(err,foundClient)=>{
                res.json(foundClient)
            })
        })

        app.route("/all-worker-details")
          .get((req,res)=>{
            Worker.find({},(err,allWorker)=>{
              if(err){
                res.json(err)
              }
              else{
                if(allWorker){
                  res.send(allWorker)
                }
                else{
                  res.json("No Workers as of Now")
                }
              }
            })
          })

        app.use(function (req, res, next) {
          res.status(404).send("Sorry can't find that!");
        });
        
    
        // .get((req,res)=>{
        //     Client.findOne({username : clientName},(err,foundClient)=>{
        //         if(err){
        //             console.log(err);
        //         }else{
        //             if(foundClient){
        //                 // res.json(foundClient)
        //                 res.json("Found")
        //             }
        //             else{
        //                  res.json("Not Found")
        //             }
        //         }
        //     })
        // })

app.listen(9000 , function(){
    console.log("Server started successfully on port 3000");
})