const express = require("express");
const bodyParser = require("body-parser");

var navBarList = ["Store","oPhone", "Mac", "oPad", "Watch", "AirPods", "TV", "Accessories", "Support"]

var cards = [
    {
        title: "AirPods",
        subTitle: "A better way to listen",
        image: "images/airpods.png"
    },
    {
        title: "MacBook",
        subTitle: "Only Laptop you will need",
        image: "images/mac.png"
    },
    {
        title: "oPad",
        subTitle: "Also a Laptop",
        image: "images/IPad.png"
    },
    {
        title: "HomePod",
        subTitle: "Your only friend",
        image: "images/homePod.png"
    }
]

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home", {navBarList: navBarList, cards: cards});
})

app.listen("3000", function () {
    console.log("server started at port 3000");
})