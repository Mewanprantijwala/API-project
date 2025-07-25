//Shree Ganeshay Namah

const { Schema, model } = require("mongoose");
const { common } = require("../utilis/commonSchema");

const categorySchema=new Schema({
    category_name :{ 
        ...common ,
        unique:[true,"category already exist"]
    }    
},
{
    timestamps : true
}
)
const Category=model('category',categorySchema)
module.exports= Category
