const mongoose=require('mongoose')
const Schema=mongoose.Schema


const packageSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
   
    
    
   
   

},{timestamps:true})
//giving a name workout to schema  model
module.exports=mongoose.model('Package',packageSchema)
//featured:{
  //  type:Boolean,
    //default:false
//}
