// const { decodeBase64 } = require('bcryptjs');
var express = require('express')
var router = express.Router();
// var jobs = require('../models/jobs')
var db = require("../models");

console.log("hello world")


router.get("/home", function (req, res) {
    
    var test = { data: "data"}
    res.render('home', {test})
})

router.post("/api/favorites" , function (req, res) {
    console.log(req.body)
    db.Jobs.create({
        jobtitle:req.body.jobtitle,
        company: req.body.company,
        formattedLocation: req.body.formattedLocation,
        snippit: req.body.snippit,
        url: req.body.url,
        interest: req.body.interest,
        deadline: req.body.deadline,
        notes: req.body.notes,
    }).then(function(dbJobs) {
        res.json(dbJobs)
    })
})

// Setting up router for a search page
// router.get("/search", function (req, res) {

//     res.render("search")

// })

module.exports = router;