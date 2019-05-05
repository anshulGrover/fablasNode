var express=require("express") ;
var newsServices=require("../news/news.services");
const router = express.Router();
var mongoose = require("mongoose");

// add News Api
router.post("/addNews",(req,res,next) => {
    const{
        newsTitle,
        newsSubtitle,
        newsDescription,
        newsImage
    }=req.body.data;
    var data={
        newsTitle,
        newsSubtitle,
        newsDescription,
        newsImage
    }
    newsServices.addNews(data).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
		res.sendStatus(404);
    });
})
// get all news
router.get("/getNews",(req,res,next) => {
    newsServices.getNews().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})
//get news by id
router.post("/getNewsById",(req,res,next)=>{
    const id=req.body.newsId;
   newsServices.getNewsById(id).then((result) => {
       res.json(result)
   }).catch((error) => {
       console.log(error);
       res.json(error);   
   }) 
});
//update news
router.put("/updateNews",(req,res,next) => {
    const{
        newsId,
        newsTitle,
        newsSubtitle,
        newsDescription,
        newsImage
    }=req.body.data;
    var data={
        newsTitle,
        newsSubtitle,
        newsDescription,
        newsImage
    }
    newsServices.updateNews(newsId,data).then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.json(error);
    });
})
module.exports=router;