var express = require("express");
var server = new express();
var bodyParser = require('body-parser')
server.use(express.static(__dirname + "/public"));


// PostgreSQL connect
// var pg = require('pg');
// const config = require('./config');
// const client = new pg.Client(config.db);

// client.connect(err => {
//     if (err) throw err;
//     else {
//         console.log("connect success")
//     }
// });


// load model
var modelQuery = require('./model/query_db.js');


//Start Server
server.listen(8080, function(err) {

    if (err)
        console.log(err.message);
    else
        console.log("Server is running");

});


// home page
server.get("/", function(req, resp, next) {
    resp.redirect("./view/profile.html");
});


// plans : query
server.get("/getPlans", function(req, resp, next) {

    modelQuery.QueryGetPlans(function(data) {

        if (req.xhr) {

            // var fs = require('fs');
            // fs.writeFile("test.txt", JSON.stringify(data), function(err) {
            //     if (err) {
            //         return console.log(err);
            //     }
            // });

            resp.json(data);
        }

    });

});

// students : query
server.get("/getStudents", function(req, resp, next) {

    modelQuery.QueryGetStudents(function(data) {

        if (req.xhr) {
            resp.json(data);
        }

    });

});

// Not found page
server.get("*", function(req, resp, next) {
    resp.end("Not found page");
});
