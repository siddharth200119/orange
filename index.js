const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var navBarList = ["Store","oPhone", "Mac", "oPad", "Watch", "AirPods", "TV", "Accessories", "Support"]

var cards = [
    {
        title: "AirPods",
        subTitle: "A better way to listen",
        image: "/images/airpods.png"
    },
    {
        title: "MacBook",
        subTitle: "Only Laptop you will need",
        image: "/images/mac.png"
    },
    {
        title: "oPad",
        subTitle: "Also a Laptop",
        image: "/images/IPad.png"
    },
    {
        title: "HomePod",
        subTitle: "Your only friend",
        image: "/images/homePod.png"
    }
];

mongoose.connect('mongodb://localhost:27017/orangeDB');
const deviceSchema = mongoose.Schema({
    name: String,
    title: String,
    price: String,
    videoLink: String,
    features: [{
        name: String,
        title: String,
        image: String,
        cardImage: String,
        description: String
    }],
  })

const Device = mongoose.model('Device', deviceSchema);

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.render("home", {navBarList: navBarList, cards: cards});
})

app.listen("3000", function () {
    console.log("server started at port 3000");
})

app.get("/learnMore/:device", function(req, res){
    const reqName = req.params.device;
    Device.findOne({name: reqName}, function(err, result){
        if(err){
            res.redirect("/ ")
        }else{
            res.render("LearnMorePage", {navBarList: navBarList, learnMore: result});
        }
    })
})
