///Shree Ganeshay Namah

const { default: mongoose } = require("mongoose")

const dbConfig=()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Db Connect Sucessfully👍");
    })
    .catch((err)=>{
        console.log(err);
        
    })
}
module.exports=dbConfig