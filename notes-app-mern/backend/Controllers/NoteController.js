const noteModel=require("../models/noteModel")
async function AddNote(req,res){
    const {title,description}=req.body
    let CreatedNote=await noteModel.create({
        title:title,
        description:description,
    })
    res.json({
        success:true,
        CreatedNote:CreatedNote
    })
    

}
async function UpdateNote(req,res){

}
async function DeleteNote(req,res){

}
async function GetNotes(req,res){


}
async function GetNote(req,res){


}

module.exports= {AddNote,UpdateNote,DeleteNote,GetNotes,GetNote}
// addNote
// UpdateNote
// DeleteNote
// GetNotes
// GetNote
