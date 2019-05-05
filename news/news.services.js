// import config from '../bone_helpers/bone.config';
var db =require( "../bone_helpers/bone.db");
var mongoose = require("mongoose");
// const MongoClient=require('mongodb').MongoClient;
const News=db.News;

const addNews=(data) => {
    return new Promise((resolve,reject) => {
        const news=new News(data);
        news.save().then((result) => {
            resolve(result);
        }).catch((err) => {
            console.log(err);
            reject(err);
        });
    })
}
const getNews=() => {
    return new Promise((resolve,reject) => {
        News.find().sort({addedOn:1}).then((result) => {
            resolve(result);
        }).catch((err) => {
            console.log(err);
            reject(err);
        });
    })
}
const getNewsById=(newsId)=>{
    return new Promise((resolve,reject) => {
    News.findOne({newsId:newsId}).then((result) => {
        resolve(result)
    }).catch((err) => {
        console.log(err)
        reject(err)
    });
})
}
const updateNews=(newsId,data) => {
    return new Promise((resolve,reject) => {
        News.update({newsId:newsId},
            {"$set":{
                newsTitle:data.newsTitle,
                newsSubtitle:data.newsSubtitle,
                newsDescription:data.newsDescription,
                newsImage:data.newsImage
            }}).then((result) => {
                resolve(result)
            }).catch((err) => {
                console.log(err);
                reject(err);
            });
    })
}
module.exports={
    addNews,getNews,getNewsById,updateNews
}