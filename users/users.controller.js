/**
 * 
 * Endpoint controller for all users
 */

//  Dependencies
var express = require('express')
var userServices=require('./users.services');


const router = express.Router();

// Home Request
router.get('/' , ( req , res , next ) => {
    res.send("All Users");
    console.log("Users Home");
});



/**
 * Get user with ID
 * 
 * @todo Extraction should only be possible only if User is Authenticated
 */
router.get('/extract/:id' , (req , res , next) => {
    
    const user_id = req.params.id;  

    userServices.getSingleUser( user_id )
    .then( (userData) => {
        res.json(userData);
    },(err) => {
        res.send("Unable to process");
    })
    .catch( (err) => {
        res.sendStatus(404);
    });
})

/**
 * Save a new user
 * 
 * @todo API Grooming
 */
router.post( '/newUser' , (req , res , next) => {
    if(req.headers["content-type"]) {
        const {
            user_id,
            user_email,
            user_first_name,
            user_middle_name,
            user_last_name,
            user_phone,
            user_password
        } = req.body;

        userServices.saveNewUser({
            user_id,
            user_email,
            user_name : {
                user_first_name,
                user_middle_name,
                user_last_name
            },
            user_phone_numbers : [user_phone],
            user_password
        })
        .then( (data) => {
            res.setHeader("x-auth",data.tokens[0].token);
            res.json(data);
        })
        .catch( (err) => {
            res.json(err);
        })
    } else {
        res.send("Header not Set");
    }
});

// Exporting the module
module.exports= router;