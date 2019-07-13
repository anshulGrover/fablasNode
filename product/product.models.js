var mongoose=require("mongoose");
const product_schema=mongoose.Schema({
	categoryName:{
		type:String,
		required:true
	},
	categoryId: {
		type: mongoose.Schema.ObjectId, auto: true
	},
	categoryDescription:{
		type:String,
		required:true
	},
	categoryImage:{
		type:String,
		required:true
	},
	subCategory:[{
		name:{
			type:String,
			required:true
		},
		id: {type:mongoose.Schema.Types.ObjectId,auto:true},
		productsList:[
			{
				id:{ type: mongoose.Schema.Types.ObjectId,
					 auto: true 
				},
				productName:{
					type:String,
					required:true
				},
				imagepath:{
					type:String,
					default:""
				},
				isFeatured:{
					type:Boolean,
					default:false
				},
				price:{
					type:String,
					default:""
				},
				stock:{
					type:String,
					default:""
				},
				images:[],
				description:{
					type:String,
					deafult:""
				},
				otherDetails:{
					type:String,
					deafult:""
				},
				colours:[{type:String}],
				productFeature:{
					type:String,
					default:""
				},
				productUsage:{
					type: String,
					default: ""
				},productSize:{
					type: String,
					default: ""
				},brand:{
					type:String,
					default:""
				},metaClonical:{
					type:String,
					deafult:""
				},metaDescription:{
					type:String,
					deafult:""
				},metaTitle:{
					type:String,
					deafult:""
				}
			}
		]
	}]    
});
module.exports= mongoose.model("products" , product_schema);