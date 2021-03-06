 
// import config from '../bone_helpers/bone.config';
var db =require( "../bone_helpers/bone.db");
var mongoose = require("mongoose");
// const MongoClient=require('mongodb').MongoClient;
const Product = db.Product;
const getProduct=() => {
	return new Promise((resolve,reject) => {
		// getting all Users
		Product.find().sort({categoryImage:1})
			.then( (success) => {
				resolve(success);
			})
			.catch( (err) => {
				reject(err);
			});
	});
};
const getCategories=() => {
	return new Promise((resolve,reject) => {
		Product.find({},{categoryName:1,categoryId:1}).then((success) => {
			resolve(success);
		}).catch((err) => {
			reject(err);
		});
	});
	
};
const getProductById=(id,sId) => {
	return new Promise((resolve,reject) => {
		// getting all Users
		Product.findOne({"subCategory.productsList.id":id})
			.then( (success) => {	
				const x=success.subCategory.filter(function(item){return (item.id==sId)});	
				const wanted=x[0].productsList.filter(function(item){return (item.id==id)});

				// const x = success.subCategory[0].productsList;
				// const wanted = x.filter(function (item) { return (item.id === id); });
				resolve(wanted);
			})
			.catch( (err) => {
				reject(err);
			});
	});
};
const getProductBySubCategory=(id) => {
	return new Promise((resolve,reject) => {
		// getting all Users
		Product.find({"subCategory.id":id})
			.then( (success) => {
				const parentcategory=success[0].categoryName;
				const x=success[0].subCategory.filter(function(item){return (item.id==id)});
				console.log(typeof x[0]);	
				x.push(parentcategory);
				// const original=[];
				// original.push(parentcategory);
				resolve(x);
			})
			.catch( (err) => {
				console.log(err);
				
				reject(err);
			});
	});
};

const getSubCategoryByCategory=(id)=>{
		return new Promise((resolve,reject) => {
			Product.find({"categoryId":id},{"subCategory.name":1,"subCategory.id":1,_id:0}).then((success) => {  
				const x=success[0].subCategory;
				resolve(x);
			}).catch((err) => {
				reject(err);
			})
		})	
};
const getSubCategory = (name) => {
	console.log(name);
	
	return new Promise((resolve, reject) => {
		Product.find({ "categoryName": name}).then((success) => {
			const x = success[0].subCategory;
			console.log(x);
			
			resolve(x);
		}).catch((err) => {
			reject(err);
		})
	})
};

const addCategory=(categoryData)=>{
	return new Promise((resolve,reject) => {
		const products =new Product(categoryData);
		products.save().then((success) => {
			resolve(success);
		}).catch((err) => {
			reject(err);
		})
	})
}

const addSubCategory=(categoryId,name)=>{
	return new Promise((resolve,reject) => {
		Product.findOne({categoryId}).then((product) => {
			
			if(!product){
				resolve("Category not exist!")
			}
			else{
				var data = {name};
				product.subCategory.push(data);
				product.save().then((product) => {
					resolve(product);	
				}).catch((err) => {
					reject(err);
				})
			}
		})
		.catch((err) => {
			reject(err);
		})
	})
}

const addProducts=(subCategory,data)=>{
	console.log(subCategory);
	
	return new Promise((resolve,reject) => {
		Product.findOne({"subCategory.id":subCategory}).then((product) => {
			console.log(product);
			if(!product){
				resolve("Category not exist")
			}
			else{
				const requiredSub=product.subCategory.filter(function(item){return item.id==subCategory});
				console.log(requiredSub);
				requiredSub[0].productsList.push(data);
				product.save().then((product) => {
					resolve(product);
				}).catch((err) => {
					reject(err);
				})
				
			}
		}).catch((err) => {
			reject(err);
		})
	})
}
const updateProduct=(id,subCategory,data)=>{
	console.log(id);
	console.log(subCategory);
	//var images=[{path:data.productImages}];
	//console.log(images);
	
	
	return new Promise((resolve,reject) => {
		
		Product.update({"subCategory":{$elemMatch:{id:subCategory,"productsList.id":id}}},
		{"$set":{
			"subCategory.$[outer].productsList.$[inner].productName":data.productName,
			"subCategory.$[outer].productsList.$[inner].stock":data.stock,
			"subCategory.$[outer].productsList.$[inner].productFeature":data.productFeature,
			"subCategory.$[outer].productsList.$[inner].productUsage":data.productUsage,
			"subCategory.$[outer].productsList.$[inner].images":data.images,
			"subCategory.$[outer].productsList.$[inner].productSize":data.productSize,
			"subCategory.$[outer].productsList.$[inner].colours":data.productColours,
			"subCategory.$[outer].productsList.$[inner].description":data.productDescription,
			"subCategory.$[outer].productsList.$[inner].price":data.productPrice,
			"subCategory.$[outer].productsList.$[inner].metaDescription":data.metaDescription,
			"subCategory.$[outer].productsList.$[inner].metaTitle":data.metaTitle,
			"subCategory.$[outer].productsList.$[inner].metaClonical":data.metaClonical,
			"subCategory.$[outer].productsList.$[inner].details":data.details


		}},
		{
			"arrayFilters":[{"outer.id":subCategory,},
							{"inner.id":id}]
		}
		).then((result) => {
			resolve(result);
		}).catch((err) => {
			reject(err);
		});
	})
	
	
}
const deleteProduct=(productId,subCategoryId) => {
	return new Promise((resolve,reject) => {
		Product.findOne({"subCategory.id":subCategoryId}).then((product) => {
			//console.log(product);
			if(!product){
				resolve("Category not exist");
			}
			else{
				const requiredSub=product.subCategory.filter(function(item){return item.id==subCategoryId});
				const productsList=requiredSub[0].productsList;
				for(var i=0;i<productsList.length;i++){
					
					if(productsList[i].id==productId){
						console.log(productsList[i]);
						productsList.splice(i,1);
						
					}
				}
				product.save().then((product) => {
					resolve(product);
				}).catch((err) => {
					reject(err);
				})
					
			}
			
		}).catch((err) => {
			reject(err);
		});
		
	}
	)
}
	
module.exports={
    
	getProduct,getCategories,getProductById,getProductBySubCategory,getSubCategoryByCategory,getSubCategory,addCategory,addSubCategory,addProducts,updateProduct,deleteProduct
};

