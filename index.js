const express = require("express");
const bodyParser = require("body-parser");

var navBarList = ["Store","oPhone", "Mac", "oPad", "Watch", "AirPods", "TV", "Accessories", "Support"]

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home", {navBarList: navBarList});
})

app.listen("3000", function () {
    console.log("server started at port 3000");
})