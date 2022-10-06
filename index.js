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
];

var featureImages = [
    {
        name: "A15",
        title: "A15 Bionic Chip",
        image: "images/oPhone/A15.png",
        cardImage: "images/oPhone/A15Card.png",
        description: "The Apple A15 Bionic is a System on a Chip (SoC) from Apple that is found in the iPhone 13 and iPad Mini (2021) models. It was announced late 2021 and offers 6 cores divided in 2 performance cores and four power efficiency cores. The CPU performance increases only slightly compared to the A14, but GPU (in the higher end models) offers higher gains."
    }, 
    {
        name: "faceID",
        title: "Face ID",
        image: "images/oPhone/faceID.png",
        cardImage: "images/oPhone/faceIDCard.png",
        description: "Face ID is a facial recognition system designed and developed by Apple Inc. for the iPhone and iPad Pro. The system allows biometric authentication for unlocking a device, making payments, accessing sensitive data, providing detailed facial expression tracking for Animoji, as well as six degrees of freedom (6DOF) head-tracking, eye-tracking, and other features."
    }, 
    {
        name: "tripleCamera",
        title: "Triple Camera Setup",
        image: "images/oPhone/tripleCamera.png",
        cardImage: "images/oPhone/tripleCameraCard.png",
        description: "The more lenses you have, the more pixels are being captured. This doesn’t necessarily mean that the photo quality will be better but it does mean that the photo will be larger allowing you to crop without hassle. A triple camera setup on smartphones also improves the quality of bokeh and depth detection found on dual camera phones."
    },
    {
        name: "ecosystem",
        title: "Orange Ecosystem",
        image: "images/oPhone/ecosystem.png",
        cardImage: "images/oPhone/ecosystemCard.png",
        description: "Apple Ecosystem is not an Apple Product. You could not go to Apple Store and “buy” the Apple Ecosystem, but it is a user and lifestyle experience which is a by-product of owning several Apple devices. Think of it, when you play your favorite role-playing game, you get character bonuses when you collect a rare set. The ecosystem is basically that. Special features that are available to your Apple devices that take your user experience to another level because of interaction between Apple devices."
    }
];

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

app.get("/iPhonePro", function(req, res){
    res.render("LearnMorePage", {navBarList: navBarList, featureImages: featureImages});
})