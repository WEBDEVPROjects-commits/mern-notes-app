const noteModel = require("../models/noteModel")
async function AddNote(req, res) {
    const { title, description } = req.body
    try {
        let CreatedNote = await noteModel.create({
            title: title,
            description: description,
        })
        res.json({
            success: true,
            CreatedNote: CreatedNote
        })

    } catch (err) {
        console.log("The error is:"+err)
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}
async function UpdateNote(req, res) {

}
async function DeleteNote(req, res) {

}
async function GetNotes(req, res) {
    try{
        const requiredNotes=await noteModel.find()
        res.json({
            success:true,
            requiredNotes:requiredNotes
        })
    }
    catch(err){
        console.log("Error in getting notes:"+err)
    }
}
async function GetNote(req, res) {


}

module.exports = { AddNote, UpdateNote, DeleteNote, GetNotes, GetNote }
// addNote
// UpdateNote
// DeleteNote
// GetNotes
// GetNote
