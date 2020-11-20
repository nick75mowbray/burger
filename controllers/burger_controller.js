const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        const burgerObject = {
            burgers: data
        };
        console.log(`burgerObject in router.get: ${burgerObject}`);
        res.render("index", burgerObject);
    })
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    const condition = "id = " + req.params.id;
 
    console.log("condition", condition);
  
    burger.updateOne(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          console.log("no rows changed");
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
});

module.exports = router;