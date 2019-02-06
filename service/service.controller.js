var express =require( "express");
var serviceServices =require( "../service/service.services")
const router = express.Router();

//getServices
router.get("/getServices",(req,res,next) => {
	serviceServices.getServices().then((result) => {
		res.json(result);
	}).catch((err) => {
		res.sendStatus(404);
	});
});
module.exports= router;
