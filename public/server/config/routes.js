const helps = require('../controllers/helps.js');
const users = require('../controllers/users.js');

module.exports = function(app) {

    // Help API
    app.get('/helps', function(req, res) {
        helps.all(req, res);
    });
    app.get('/helps/:id', function(req, res) {
        helps.one(req, res);
    });
    app.post('/helps', function(req, res) {
        helps.create(req, res);
    });
    app.put('/helps/:id', function(req, res) {
        helps.update(req, res);
    });
    app.delete('/helps/:id', function(req, res) {
        helps.remove(req, res);
    });

    // Users API
    app.get('/helps/:id', function(req, res) {
        users.one(req, res)
    });
    app.post('/helps/:id', function(req, res){
        users.create(req, res);
    });
    app.put('/helps/:sid', function(req, res) {
        users.arr_pull(req, res);
    });
    app.delete('/helps/:id/:sid', function(req, res) {
        users.remove(req, res);
    });
}