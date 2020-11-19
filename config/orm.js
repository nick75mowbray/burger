var connection = require("../config/connection.js");
const mysql = require("mysql");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

const orm = {
    selectAll: function(cb){
        connection.query("SELECT * FROM burgers", function(err, res){
            if (err) 
            {throw err};
            cb(res);
        });
    },
    insertOne: function(burgerName, cb){
        var queryString = "INSERT INTO burgers (burger_name) VALUES (";

        queryString += burgerName;
        queryString += ") ;";
    
        console.log(queryString);
        connection.query(queryString, function(err, res){
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