const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var navBarList = [
    {
        name: "Store",
        url: "/home"
    },
    {
        name: "oPhone",
        url: "/learnMore/oPhone"
    },
    {
        name: "Macbook",
        url: "/learnMore/macbook"
    },
    {
        name: "oPod",
        url: "/learnMore/oPad"
    },
    {
        name: "Watch",
        url: "/learnMore/oWatch"
    },
    {
        name: "AirPods",
        url: "/learnMore/airPods"
    },
    {
        name: "Accessories",
        url: "/learnMore/homePod"
    }
];

var cards = [
    {
        title: "AirPods",
        subTitle: "A better way to listen",
        image: "/images/airpods.png",
        href: "/learnMore/airPods"
    },
    {
        title: "MacBook",
        subTitle: "Only Laptop you will need",
        image: "/images/mac.png",
        href: "/learnMore/macbook"
    },
    {
        title: "oPad",
        subTitle: "Also a Laptop",
        image: "/images/IPad.png",
        href: "/learnMore/oPad"
    },
    {
        title: "HomePod",
        subTitle: "Your only friend",
        image: "/images/homePod.png",
        href: "/learnMore/homePod"
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
// const oPhonePro = new Device(
//     {
//         name: "homePod",
//         title: "Home Pod",
//         price: "$30",
//         videoLink: "https://www.youtube.com/embed/VF-WANzs624?playlist=VF-WANzs624&loop=1&autoplay=1&mute=1&controls=0",
//         features: [
//             {
//                 name: "siri",
//                 title: "SIRI",
//                 image: "/images/homePod/siri.png",
//                 cardImage: "/images/homePod/siriCard.png",
//                 description: "The Apple A15 Bionic is a System on a Chip (SoC) from Apple that is found in the iPhone 13 and iPad Mini (2021) models. It was announced late 2021 and offers 6 cores divided in 2 performance cores and four power efficiency cores. The CPU performance increases only slightly compared to the A14, but GPU (in the higher end models) offers higher gains."
//             }, 
//             {
//                 name: "music",
//                 title: "Music",
//                 image: "/images/homePod/music.png",
//                 cardImage: "/images/homePod/speakerCard.png",
//                 description: "Face ID is a facial recognition system designed and developed by Apple Inc. for the iPhone and iPad Pro. The system allows biometric authentication for unlocking a device, making payments, accessing sensitive data, providing detailed facial expression tracking for Animoji, as well as six degrees of freedom (6DOF) head-tracking, eye-tracking, and other features."
//             }, 
//             {
//                 name: "audio",
//                 title: "360 degree Audio",
//                 image: "/images/homePod/speaker.png",
//                 cardImage: "/images/homePod/audioCard.png",
//                 description: "Extreme dynamic range comes to the 12.9-inch iPad Pro. The Liquid Retina XDR display delivers true-to-life detail with a 1,000,000:1 contrast ratio, great for viewing and editing HDR photos and videos or enjoying your favorite movies and TV shows. It also features a breathtaking 1000 nits of full‑screen brightness and 1600 nits of peak brightness. And advanced display technologies like P3 wide color, True Tone, and ProMotion."
//             },
//             {
//                 name: "ecosystem",
//                 title: "Orange Ecosystem",
//                 image: "/images/oPhone/ecosystem.png",
//                 cardImage: "/images/oPhone/ecosystemCard.png",
//                 description: "Apple Ecosystem is not an Apple Product, You could not go to Apple Store and “buy” the Apple Ecosystem, but it is a user and lifestyle experience which is a by-product of owning several Apple devices. Think of it, when you play your favorite role-playing game, you get character bonuses when you collect a rare set. The ecosystem is basically that. Special features that are available to your Apple devices that take your user experience to another level because of interaction between Apple devices."
//             }
//         ]
//     }
// )

// oPhonePro.save();


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

app.get("/home", function(req, res){
    res.redirect("/");
})

app.get("/buy", function(req, res){
    res.send("work in progress");
})