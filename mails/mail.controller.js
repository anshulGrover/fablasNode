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
		res.sendStatus(400);
    });
})

router.post("/distributor",(req,res,next)=>{
    const{
        fullName,
        companyName,
        companyAddres,
        mobile,
        email,
        city,
        country,
        investmentRange,
        website,
        aboutYou
    }=req.body;
    var data={
        fullName,
        companyName,
        companyAddres,
        mobile,
        email,
        city,
        country,
        investmentRange,
        website,
        aboutYou
    }
    mailServices.sendDistributor(data).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
		res.sendStatus(400);
    });
})
router.post("/jobSeeker",(req,res,next)=>{
    const{
        fullName,
        mobile,
        email,
        applyingFor,
        message
    }=req.body;
    var data={
        fullName,
        mobile,
        email,
        applyingFor,
        message
    }
    mailServices.sendJobSeeker(data).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
		res.sendStatus(400);
    });
})

router.post("/contactUs",(req,res,next)=>{
    const{
        name,
        email,
        message
    }=req.body;
    var data={
        name,
        email,
        message
    }
    mailServices.sendContactUs(data).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
		res.sendStatus(400);
    });
})
module.exports= router;