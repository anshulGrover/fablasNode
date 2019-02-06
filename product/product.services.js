
// import config from '../bone_helpers/bone.config';
var db =require( "../bone_helpers/bone.db");
// const MongoClient=require('mongodb').MongoClient;
const Product = db.Product;
const getProduct=() => {
	return new Promise((resolve,reject) => {
		// getting all Users
		Product.find()
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
const getProductById=(id) => {
	return new Promise((resolve,reject) => {
		// getting all Users
		Product.findOne({"subCategory.productsList.id":id})
			.then( (success) => {
				const x=success.subCategory[0].productsList;
				const wanted=x.filter(function(item){return (item.id===id);});
				resolve(wanted[0]);
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
				const x=success[0].subCategory[0].productsList;
				resolve(x);
			})
			.catch( (err) => {
				reject(err);
			});
	});
};

module.exports={
    
	getProduct,getCategories,getProductById,getProductBySubCategory
};

