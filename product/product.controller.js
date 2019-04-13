var express=require("express") ;
var productServices =require("./product.services") ;
const router = express.Router();
var mongoose = require("mongoose");


//get all products
router.get("/getProducts",(req,res,next) => {
	productServices.getProduct().then((result) => {
		res.json(result);
}).catch((err) => {
		res.sendStatus(404);
    
});
});
router.post("/getCategories",(req,res,next) => {
	productServices.getCategories().then((result) => {
		res.json(result);
	}).catch((err) => {
		res.sendStatus(404);
	});

	
});
router.post("/getProductById",(req,res,next) => {
	const id = req.body.id;
	const sId=req.body.sId;	
	console.log(id);
	console.log(sId);
	
	productServices.getProductById(id,sId).then((result) => {
		res.json(result);
}).catch((err) => {
	console.log(err);
		res.sendStatus(404);
    
});
});
router.post("/getProductBySubcategory",(req,res,next) => {
	const id = req.body.id;	
	productServices.getProductBySubCategory(id).then((result) => {
		res.json(result);
}).catch((err) => {
		res.sendStatus(404);
    
});
});

router.post("/getSubcategoryByCategory",(req,res,next) => {
	const id = req.body.categoryId;	
	productServices.getSubCategoryByCategory(id).then((result) => {
		res.json(result);
}).catch((err) => {
		res.sendStatus(404);
    
});
});
router.post("/getSubcategory", (req, res, next) => {
	const name = req.body.cat_name;
	productServices.getSubCategory(name).then((result) => {
		res.json(result);
	}).catch((err) => {
		res.sendStatus(404);

	});
});
router.post("/addCategory",(req,res,next) => {
	const{
		categoryName,
		categoryDescription,
		categoryImage
	}=req.body;

	productServices.addCategory({
		categoryName,
		categoryDescription,
		categoryImage
	}).then((result) => {
		res.json(result);
	}).catch((err) => {
		console.log(err);
		
		res.sendStatus(404);
	});
})
router.post("/addSubcategory",(req,res,next) => {
	const{
		categoryId,
		name
	}=req.body;
	productServices.addSubCategory(categoryId,name).then((result) => {
		res.json(result);
	}).catch((err) => {
		console.log(err);
		
		res.sendStatus(404);
	})
})
router.post("/addProduct",(req,res,next) => {
	const{
		subCategory,
		productName,
		imagepath,
		isFeatured,
		colours,
		price,
		stock,
		images,
		shortDesc,
		fullDesc,
		details,
		productFeature,
		productUsage,brand
	}	=req.body;
	var data={
		productName,
		imagepath,
		isFeatured,
		colours,
		price,
		stock,
		images,
		shortDesc,
		fullDesc,
		details,
		productFeature,
		productUsage,brand
	}
	productServices.addProducts(subCategory,data).then((result) => {
		res.json(result);
	}).catch((err) => {
		console.log(err);
		res.sendStatus(404);
	})
})

module.exports= router;