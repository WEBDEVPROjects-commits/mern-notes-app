const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/notesApp");

const userSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    notes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'note'
    }]

}
)
module.exports=mongoose.model("user",userSchema)