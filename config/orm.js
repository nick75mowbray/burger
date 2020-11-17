var connection = require("../config/connection.js");

const orm = {
    selectAll: function(cb){
        const query = connection.query("SELECT * FROM burgers", function(err, res){
            if (err) 
            {throw err};
            cb(res);
        });
        console.log(query);
    },
    insertOne: function(burgerName, cb){
        const query = connection.query("INSERT INTO burgers (burger_name) VALUES (?)", burgerName, function(err, res){
            if (err) 
            {throw err};
            cb(res);
        });
        console.log(query);
    },
    updateOne: function(columnName, valueToUpdate, id, cb){
        const query = connection.query("UPDATE burgers SET ??=? WHERE id=?", [columnName, valueToUpdate, id], function(err, res){
            if (err) 
            {throw err};
            cb(res);
        });
        console.log(query);
    }
}


module.exports = orm;