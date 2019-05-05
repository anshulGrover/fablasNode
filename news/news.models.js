var mongoose=require("mongoose");
const news_schema=mongoose.Schema({
    newsId:{
        type: mongoose.Schema.ObjectId, auto: true
    },
    newsTitle:{
        type:String,
		required:true
    },
    newsDescription:{
        type:String,
		required:true
    },
    newsSubtitle:{
        type:String,
		required:true
    },
    newsImage:{
        type:String,
		required:true
    },
    addedOn:{
        type:Date,
        default:Date.now
    }
});
module.exports= mongoose.model("news" , news_schema);