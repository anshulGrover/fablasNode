/**
 * Fetch Routes for APIs
 */

//  Dependencies
var express = require('express')
var usersController =require('./users/users.controller');
var productController =require('./product/product.controller'); 
var serviceController =require('./service/service.controller'); 
var router =require( './users/users.controller');
var mailController=require('./mails/mail.controller');



const fetch_router = express.Router();

// Home Page Route
fetch_router.get( '/' , ( req , res , next ) => {
    console.log('Hello Fetch');
    res.send('Hello');
});
// Product Endpoint
fetch_router.use('/products',productController);
// Users Endpoint
fetch_router.use( '/users' , usersController);
// Service Endpoint
fetch_router.use('/services',serviceController);
// Mailing Endpoint
fetch_router.use('/send',mailController);



// Exporting the Module
module.exports= fetch_router;