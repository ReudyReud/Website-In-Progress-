var express = require("express");
var app = express();


app.use(express.static("public"));
// 
// "/" => "Hi there!"
app.get("/", function(req, res){
    res.render("front.ejs");
});

app.get("/signup", function(req, res){
    res.render("signUp.ejs");
});

app.get("/login", function(req, res){
   res.render("login.ejs"); 
});


app.get("/show", function(req, res){
   res.render("showpage.ejs"); 
});

app.get("/poems", function(req, res){
   res.render("readpoems.ejs"); 
});



// // "/bye" => "Goodbye!"
// app.get("/bye", function(req, res){
//   res.send("Goodbye!!"); 
// });

// // "/dog" => "MEOW!"
// app.get("/dog", function(req, res){
//     console.log("SOMEONE MADE A REQUEST TO /DOG!!!")
//   res.send("MEOW!"); 
// });

// app.get("/r/:subredditName", function(req, res){
//     var subreddit = req.params.subredditName;
//   res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!"); 
// });

// app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
//     console.log(req.params);
//     res.send("WELCOME TO THE COMMENTS PAGE!"); 
// });

// app.get("*", function(req, res){
//   res.send("YOU ARE A STAR!!!"); 
// });


// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});
