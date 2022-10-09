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

mongoose.connect('mongodb+srv://admin-sidd:sidd007jb@orange.ieugrdm.mongodb.net/orangeDB');
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
//         name: "oPad",
//         title: "oPad",
//         price: "$69",
//         videoLink: "https://www.youtube.com/embed/VF-WANzs624?playlist=VF-WANzs624&loop=1&autoplay=1&mute=1&controls=0",
//         features: [
//             {
//                 name: "A15",
//                 title: "A15 Chip",
//                 image: "/images/oPhone/A15.png",
//                 cardImage: "/images/oPhone/A15Card.png",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
//             }, 
//             {
//                 name: "faceID",
//                 title: "Face ID",
//                 image: "/images/oPhone/faceID.png",
//                 cardImage: "/images/oPhone/faceIDCard.png",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
//             }, 
//             {
//                 name: "screen",
//                 title: "Big Screen",
//                 image: "/images/oPad/screen.png",
//                 cardImage: "/images/oPad/screenCard.png",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
//             },
//             {
//                 name: "ecosystem",
//                 title: "Orange Ecosystem",
//                 image: "/images/oPhone/ecosystem.png",
//                 cardImage: "/images/oPhone/ecosystemCard.png",
//                 description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
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

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function () {
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