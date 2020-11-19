var connection = require("../config/connection.js");
const mysql = require("mysql");

const orm = {
    selectAll: function(cb){
        connection.query("SELECT * FROM burgers", function(err, res){
            if (err) 
            {throw err};
            cb(res);
        });
    },
    insertOne: function(burgerName, cb){
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", burgerName, function(err, res){
            if (err) 
            {throw err};
            cb(res);
        });
    },
    updateOne: function(columnName, valueToUpdate, id, cb){
        connection.query("UPDATE burgers SET ??=? WHERE id=?", [columnName, valueToUpdate, id], function(err, res){
            if (err) 
            {throw err};
            cb(res);
        });
    }
};


module.exports = orm;