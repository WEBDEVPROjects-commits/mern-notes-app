const {AddNote,UpdateNote,DeleteNote,GetNote,GetNotes}=require("../Controllers/NoteController.js")
const express=require('express');
const router=express.Router();


router.post("/AddNote",AddNote)
router.post("/DeleteNote/:id",DeleteNote)
router.post("/UpdateNote/:id",UpdateNote)
router.get("/getNotes",GetNotes)
router.get("/getNotes/:id",GetNote)
  
module.exports=router