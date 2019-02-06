var express=require("express") ;
var productServices =require("./product.services") ;
const router = express.Router();

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
	productServices.getProductById(id).then((result) => {
		res.json(result);
}).catch((err) => {
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
module.exports= router;