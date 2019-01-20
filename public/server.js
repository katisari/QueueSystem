const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const server = app.listen(8001);
const io = require('socket.io')(server);


var http = require("http");
app.use(bodyParser.json());

app.use(express.static(__dirname + '/dist/public'));

var helpArray = [];
var userArray = [];
var current_user_name = "";
var countHelp = 0;
var countUser = 0;
io.on('connection', function(socket) {
    console.log('Connection established!');

    socket.on('newUser', function(data){
        io.sockets.emit('setHelpsArray', {
            msg: helpArray
        });
    });

    socket.on('newSpotSubmitted', function(data){
        io.sockets.emit('setNewSpot', {
            msg: helpArray
        });
    });
    socket.on('deleteSpot', function(data){
        helpArray.splice(data.msg, 1);
        // var index = 0;
        // for (let individ of helpArray) {
        //     if (individ.id == data.msg) {
        //         helpArray.splice(index, 1);
        //     }
        //     index = index + 1;
        // }
        io.sockets.emit('setDeleteSpot', {
            msg: data.msg, theArray: helpArray
        });
    });


});


app.post('/createHelp', function(req,res) {
    helpArray.push({id: countHelp, Project_Name: req.body.Project_Name, Date: req.body.Date, Method: req.body.Method, User: req.body.Student_Name});
    res.json({id: countHelp, Project_Name: req.body.Project_Name, Date: req.body.Date, Method: req.body.Method, User: req.body.Student_Name});
    countHelp = countHelp + 1;
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