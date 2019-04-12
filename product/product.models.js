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
				images:[{
					thumbnails:[{type:String,default:""}],
					largeImages:[{type:String,default:""}]
				}],
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
				}
			}
		]
	}]    
});
module.exports= mongoose.model("products" , product_schema);