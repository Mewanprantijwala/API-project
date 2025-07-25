const Category = require("../models/category.model")

exports.store=async(req,res)=>{
    try {
      const {category_name}=req.body
      
      const existcategory=await Category.findOne({category_name}).countDocuments() 
      if(existcategory>0){
          res.status(201).json({
              success : true,
              message :"category already exist"
          })
          
      }else{
          const category=await Category.create({category_name});
          if(category){
              res.status(201).json({
                  success:true,
                  message:"category added"
              })
          }
          
      }
    } catch (error) {
     console.log('error: ', error);    
    }    
 }

 exports.index=async(req,res)=>{
    try {
        const category=await Category.find()
        console.log(category)
        if(category.length > 0){
            res.json({
                success:true,
                category
            })
        }else{
            res.json({
                success:tru,
                message:"category Record not Here"
            })
        }
    } catch (error) {
        res.json(error)
    }
 }

 exports.trash=async(req,res)=>{
    const {id}=req.params
    try {
        const existCategory=await Category.findById(id)
        console.log(existCategory);
        if(existCategory){
            await Category.findByIdAndDelete(id)
            res.json({
                status:true,
                message:"category deleted..."
            })
        }else{
            res.json({
                status:false,
                message:"category not found"
            })
        }
    } catch (error) {
        res.json(error)
    }
    
 }

 exports.update=async(req,res)=>{
   try {
     const {id}=req.query
     const {category_name}=req.body
 
     const category=await Category.findByIdAndUpdate(
         {_id:id},
         {
             category_name
         }
     )
     res.json({
         success:true,
         category
     })
   } catch (error) {
    res.json(error);
    
   }
}