const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

var http = require("http");
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/public'));

var helpArray = [];
var userArray = [];
var current_user_name = "";
var countHelp = 0;
var countUser = 0;



app.post('/createHelp', function(req,res) {
    helpArray.push({id: countHelp, Project_Name: req.body.Project_Name, Date: req.body.Date, Method: req.body.Method});
    res.json({id: countHelp, Project_Name: req.body.Project_Name, Date: req.body.Date, Method: req.body.Method});
    countHelp = countHelp + 1;
    // Restaurant.findOne({name: req.body.name}, function(err, data) {
    //     if (err) {
    //         res.json(err);
    //     } else {
    //         if (data == null) {
    //             Restaurant.create(req.body, function(err) {
    //                 if (err){
    //                     res.json(err)
    //                 } else {
    //                     res.json({status: 200})
    //                 }
    //             });
    //         } else {
    //             res.json({errors: {already_exist: 'Restaurant already exists'}});
    //         }
    //     }
    // })
})


app.post('/createUser', function(req,res) {
    helpArray.push({id: countUser, name: req.body.name, email: req.body.email, password: req.body.password});
    res.json({id: countUser, name: req.body.name, email: req.body.email, password: req.body.password});

    current_user_name = req.body.name;
    countUser = countUser + 1;
})


app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/public/index.html'));
});


// app.all('*', (req, res, next) => {
//     res.sendFile(path.resolve('/dist/sample-app/index.html'));
// });

app.listen(8001);

