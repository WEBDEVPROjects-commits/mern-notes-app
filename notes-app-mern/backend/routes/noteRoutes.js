const express=require('express');

const router=express.router();


router.post("/addNote",addNote)
router.post("/DeleteNote/:id",DeleteNote)
router.post("/UpdateNote/:id",UpdateNote)
router.get("/getNotes",getNotes)
router.get("/getNotes/:id",getNote)
  

export default router