const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

var http = require("http");
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/public'));

var helpArray = [];
var count = 0;



app.post('/createHelp', function(req,res) {
    helpArray.push({id: count, Project_Name: req.body.Project_Name, Date: req.body.Date, Method: req.body.Method});
    res.json({id: count, Project_Name: req.body.Project_Name, Date: req.body.Date, Method: req.body.Method});
    count = count + 1;
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

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/public/index.html'));
});


// app.all('*', (req, res, next) => {
//     res.sendFile(path.resolve('/dist/sample-app/index.html'));
// });

app.listen(8001);

