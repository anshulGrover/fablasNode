var mongoose=require("mongoose");
const productSaleable_schema=mongoose.Schema({
    categoryId:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    categoryTitle:{
        type:String,
        required:true
    },
    categoryDescription:{
        type:String,
        required:true
    },
    categoryImage:{
        type:String,
        required:true
    },
    subCategory:[
        {
            subCategoryName:{
                type:string,
                required:true
            },
            subCategoryDescription:{
                type:String,
                required:true
            },
            products:[
                {
                    
                }
            ]
        }
    ]
})