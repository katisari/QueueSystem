const express = require('express');
const path = require('path');
const app = express();

var http = require("http");

app.use(express.static(__dirname + '/dist/public'));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/public/index.html'));
});


// app.all('*', (req, res, next) => {
//     res.sendFile(path.resolve('/dist/sample-app/index.html'));
// });

app.listen(8001);

