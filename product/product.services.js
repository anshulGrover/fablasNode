 
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
				const wanted=success.subCategory.filter(function(item){
					const x=item.productsList.filter(function(itm){
						return itm.id===id;
					})
					return x;
				})
				console.log(wanted);
					
				//const x=success.subCategory[0].productsList;
				//const wanted=x.filter(function(item){return (item.id===id);});
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
				const x=success[0].subCategory.filter(function(item){return (item.id===id)});
				resolve(x[0].productsList);
			})
			.catch( (err) => {
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

module.exports={
    
	getProduct,getCategories,getProductById,getProductBySubCategory,getSubCategoryByCategory,getSubCategory
};

