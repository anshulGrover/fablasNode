var mongoose =require("mongoose") ;
const service_schema=mongoose.Schema({
	serviceId:{
		type:String,
		required:true
	},
	serviceName:{
		type:String,
		required:true
	},
	serviceImage:{
		type:String,
		required:true
	},
	serviceDescription:{
		type:String,
		required:true
	}
});
module.exports= mongoose.model("services",service_schema);