// const { decodeBase64 } = require('bcryptjs');
var express = require('express')
var router = express.Router();
var jobs = require('../models/jobs')
var db = require("../models")
console.log("hello world")


router.get("/home", function (req, res) {

    db.Jobs.findAll({}).then(function (dbJobs) {
        res.render('home', { Jobs: dbJobs })
    })
})

router.post("/api/home" , function (req, res) {
    console.log(req.body)
    db.Jobs.create({
        jobtitle:req.body.jobtitle,
        company: req.body.company,
        formattedLocation: req.body.formattedLocation,
        snippit: req.body.snippit,
        url: req.body.url,
        salary: req.body.salary,
        interested: req.body.interested,
        deadline: req.body.deadline,
        notes: req.body.notes,
        status: req.body.status
    }).then(function(dbJobs) {
        res.json(dbJobs)
    }).catch(function (error){
        if (error) throw error
    })
})

router.put("/api/home/:id", function (req, res) {
    const id = req.params.id 
    console.log("put " + id)
    db.Jobs.update(req.body, {
        where: { id }
    }).then(function (dbJobs) {
        res.json(dbJobs);
    }).catch(function (error) {
        if (error) throw error
    }) 
})

router.delete('/api/home/:id', function (req,res) {
    const id = req.params.id
    db.Jobs.destroy({
        where: { id }
    }).then(function(dbJobs) {
        res.sendStatus(200)
    }).catch(function (error){
        if (error) throw error
    })
})


// Setting up router for a search page
// router.get("/search", function (req, res) {

//     res.render("search")

// })

module.exports = router;