/**
 * Database Connections & Management
 */

//  Dependencies
var mongoose =require('mongoose');
var config= require('./bone.config') ;
var User= require('../users/users.model') ;
var Product =require('../product/product.models') 
var Service =require('../service/service.models') 


// Database Connection
mongoose.connect(config.connectionString , { useNewUrlParser: true })
    .then( () => console.log(config.successMsg))
    .catch( () => console.error(config.errorMsg));

// Get Mongoose to use the global promise library    
mongoose.Promise = global.Promise;

module.exports= {
    User: User,
    Product:Product,
    Service:Service
};
