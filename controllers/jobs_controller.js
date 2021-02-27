// const { decodeBase64 } = require('bcryptjs');
const isAuthenticated = require("../config/middleware/isAuthenticated");
var express = require('express')
var router = express.Router();
var jobs = require('../models/jobs')
var db = require("../models")
console.log("hello world")

router.get("/home", isAuthenticated, function (req, res) {
    var query = {
        UserId: req.user.id
    };
    if (req.query.id) {
        query.UserId = req.query.id;
    }
    console.log(query)
    // const user = req.query.UserId 
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Jobs.findAll({
        where:query,
        include: [db.User]
    }).then(function (dbJobs) {
        res.render('home', { Jobs: dbJobs })
    });
});


// router.get("/home", isAuthenticated, function (req, res) {

//     // Link to the user table
//     // Findall jobs 
//     // Where UserId from Jobs table
//     // Is the same as ID from User table

//     // When creating jobs
//     // Add Id from User table 
//     // As the UserId in the Jobs table

//     db.Jobs.findAll({}).then(function (dbJobs) {
//         res.render('home', { Jobs: dbJobs })
//     })
// })

router.post("/api/home", function (req, res) {
    console.log(req.user)
    db.Jobs.create({
        jobtitle: req.body.jobtitle,
        company: req.body.company,
        formattedLocation: req.body.formattedLocation,
        snippit: req.body.snippit,
        url: req.body.url,
        salary: req.body.salary,
        interested: req.body.interested,
        deadline: req.body.deadline,
        notes: req.body.notes,
        status: req.body.status,
        UserId: req.user.id
    }).then(function (dbJobs) {
        res.json(dbJobs)
    }).catch(function (error) {
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

router.delete('/api/home/:id', function (req, res) {
    const id = req.params.id
    db.Jobs.destroy({
        where: { id }
    }).then(function (dbJobs) {
        res.sendStatus(200)
    }).catch(function (error) {
        if (error) throw error
    })
})


// Setting up router for a search page
// router.get("/search", function (req, res) {

//     res.render("search")

// })

module.exports = router;