mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/queueSystem');
mongoose.Promise = global.Promise;