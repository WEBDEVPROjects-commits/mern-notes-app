const cookieParser = require('cookie-parser');
const express = require('express');
import noteRoutes from './routes/noteRoutes';
const app = express();
// const userModel = require("./models/user.js")
// const noteModel = require("./models/note.js")
app.use(express.json());
app.use(cookieParser())



app.use("/api/notes",noteRoutes)
// app.get("/CreateNote",(req,res)=>{
      
// })
// app.post("/CreateNote",)


// async (req, res) => {
//     const { title, description } = req.body
//     const createdNote=await noteModel.create({
//         title:title,
//         description:description
//     })
//     res.json({
//         message:"Note Created Succesfully"
//     })
// }
app.listen(3000)