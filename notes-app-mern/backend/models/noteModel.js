const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/notesApp").then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});;

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