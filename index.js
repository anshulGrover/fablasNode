var express = require('express')
var cors = require('cors')
var bodyParser=require('body-parser')
var path =require('path')
var Routes =require('./fetch_routes');
var errorHandler =require('./bone_helpers/bone.error_handler');
var jwt =require('./bone_helpers/bone.jwt');
const DEV_LOCALHOST_PORT = process.env.PORT || 8080;


// Express app
var app = express();


// Middlewares

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());

// API end points
app.use( '/' , Routes);
// use JWT auth to secure the api
//app.use(jwt());

// global error handler
// app.use(errorHandler);


/**
 * Listening to port 8080
 * @todo Import from config file
 */
app.listen(DEV_LOCALHOST_PORT , ()=>{console.log(`Server listening on port ${DEV_LOCALHOST_PORT}!!`)});
