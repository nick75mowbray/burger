const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        const burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    })
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(req.body.name, function(result){
        res.json({id: result.id});
    });
});

module.exports = router;