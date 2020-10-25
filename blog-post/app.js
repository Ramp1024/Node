const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const _ = require('lodash');
const { truncate } = require('lodash');

const homeContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const aboutContent = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt "
const contactContent = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. "
const posts = [];

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine' , 'ejs');
app.use(express.static("public"));

app.get("/", function(req , res){
    res.render("home" , {
        homeText : homeContent ,
        myBlogs : posts
    });
});

app.get("/about" , function(req , res){
    res.render("about" , {aboutText : aboutContent});
})

app.get("/contact" , function(req ,res){
    res.render("contact" , {contactText : contactContent});
})

app.get("/compose" , function(req ,res){
    res.render("compose");
})

app.post("/compose" , function(req , res){
    posts.push({
        publishTitle: req.body.blogTitle,
        publishContent: req.body.blogText
    },
    )
    res.redirect("/");
})

app.get("/posts/:blogId", function(req , res){
    let paramsId = _.lowerCase(req.params.blogId);

    posts.map((blog)=>{
        const postTitle = _.lowerCase(blog.publishTitle);

        if(postTitle == paramsId){
            res.render("post" , {
                title:blog.publishTitle,
                content:blog.publishContent
            });
        }
    })
})

app.listen(3000, function(req , res){
    console.log("Server started at port 3000");
});
