require('../models/help.js');

module.exports = {
    all: function(req, res){
        Help.find({}).sort('createdAt').exec(function(err, helps){
            if (err){
                console.log('Something went wrong when getting all sessions');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: helps});
            }
        });
    },
    one: function(req, res){
        Help.findOne({_id: req.params.id}, function(err, help){
            if(err){
                console.log('Something went wrong when getting a single session');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: help});
            }
        });
    },
    create: function(req, res){
        Help.create(req.body, function(err){
            if(err){
                console.log('Something went wrong when creating a session, detail: ', err);
                res.json({message: 'Error', error: err});   
            }else{
                res.redirect('/helps');
            }
        });
    },
    update: function(req, res){
        Help.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, { runValidators: true }, function(err){
            if(err){
                console.log('Something went wrong when updating a session, detail: ', err);
                res.json({message: 'Error', error: err});
            }else{
                res.redirect(303, '/helps');
            }
        });
    },
    remove: function(req, res){
        Help.findOneAndRemove({_id: req.params.id}, function(err){
            if(err){
                console.log('Something went wrong when removing a session');
                res.json({message: 'Error', error: err});
            }else{
                Help.find({}, function(err, sessions){
                    if(err){
                        console.log('Something went wrong when getting all sessions');
                        res.json({message: 'Error', error: err});
                    }else{
                        res.json({message: 'Success', data: sessions});
                    }
                });
            }
        });
    },
}