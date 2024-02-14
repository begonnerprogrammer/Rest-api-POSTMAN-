const moongose=require("mongoose");
const validator=require("validator");
const newSchema=new moongose.Schema({
ranking:{
    type:Number,
    require:true,
    unique:true
},
name:{
    type:String,
    required:true,
    trim:true
},
dob:{
    type:Date,
    required:true,
    trim:true
},
country:{
    type:String,
    required:true,
    trim:true
},
score:{
    type:Number,
    required:true,
    trim:true
},
event:{
 type:String,
 default:"100m"   
}
})

const Runner=new moongose.model("Runner",newSchema);
module.exports=Runner;
