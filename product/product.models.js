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
				name:{
					type:String,
					required:true
				},
				imagepath:{
					type:String,
					required:true
				},
				isFeatured:{
					type:Boolean,
					default:false
				},
				price:{
					type:String,
					required:true
				},
				stock:{
					type:String,
					required:true
				},
				images:{
					thumbnails:[],
					largeImages:[]
				},
				shortDesc:{
					type:String
				},
				fullDesc:{
					type:String
				},
				details:[
					{
						title:{
							type:String
							
						},
						desc:{
							type:String
							
						},
						categoryIcon:{
							type:String
							
						}
					}
				],
				colours:[],
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
				}
			}
		]
	}]    
});
module.exports= mongoose.model("products" , product_schema);