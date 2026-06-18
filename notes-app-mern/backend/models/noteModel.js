const mongoose=require('mongoose');
const noteSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }]

}
)
module.exports=mongoose.model("note",noteSchema)