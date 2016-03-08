var restful = require('node-restful');

module.exports = function(app,route){
    // Setup the controller for REST
    var rest=restful.model('expert',
                           app.models.expert
                          ).methods(['get','put','post','delete']);
    //Register this endpoint with the application
    rest.register(app,route);
    
    //return Middleware
    return function(req,res,next){
    next();
    };
};


