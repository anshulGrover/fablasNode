var express=require("express") ;
var mailServices=require('./mail.service');
const router = express.Router();

router.post("/vendor",(req,res,next)=>{
    const{
        fullName,
        businessName,
        businessAddress,
        city,
        country,
        permanentBusinessType,
        website
    }=req.body;
    var data={
        fullName,
        businessName,
        businessAddress,
        city,
        country,
        permanentBusinessType,
        website
    }
    mailServices.sendVendor(data).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
		res.sendStatus(404);
    });
})

module.exports= router;