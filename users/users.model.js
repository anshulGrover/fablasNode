/**
 * Users Schema for MongoDB
 * Mongoose Model Definition
 * 
 * Author(s) : Rajat Kumar
 */



// Dependencies
var mongoose =require('mongoose') ;
var userConfig =require('./user.config') ;
var uniqueValidator =require('mongoose-unique-validator') ;
var bcrypt =require('bcryptjs') 



const users_schema = mongoose.Schema({
	user_id : {
		type : String,
		required : [true , "Cannot Be Blank"],
		unique : true,
		index : true
	},
	user_name : {
		user_first_name : {
			type : String,
			required : true
		},
		user_middle_name : {
			type : String,
			required : false
		},
		user_last_name : {
			type : String,
			required : true
		}
	},
	user_email : {
		type : String, 
		required : [true , "Cannot Be Blank"],
		unique : true,
		index : true
	},
	user_phone_numbers : [
		{
			type : [Number],
			required : true,
			validate : {
				validator : (phone) => {
					return userConfig.phone_regex.test(phone);
				}
			},
			index : true
		}
	],
	user_password : {
		type : String, 
		required : true
	},
	user_status : {
		isActive : Boolean
	},
	user_addresses : [
		{
			address_line_one : String,
			address_line_two : String,
			user_city : String,
			user_state : String,
			user_pincode : Number,
			lat : Number,
			long : Number
		}
	],
	user_gender : String,
	user_dob : {
		type : Date,
		required : false
	},
	tokens:[{
		access:{
			type:String,
			required:true
		},
		token:{
			type:String,
			required:true
		}
	}]
});

users_schema.path("user_email").validate( (email) => {
	return userConfig.email_regex.test(email);
} , "Invalid Email");


// Validating Unique User
users_schema.plugin(uniqueValidator , { message : "User Already Exists"} );

users_schema.pre("save",function(next){
	let user=this;
	if(user.isModified('user_password')){
		bcrypt.genSalt(10,(err,salt) => {
			bcrypt.hash(user.user_password,salt,(err,hash)=>{
				user.user_password=hash;
				next();
			})
		})
	}
	else{
		next();
	}

})

// Exporting the Users Model
module.exports= mongoose.model('users' , users_schema);
