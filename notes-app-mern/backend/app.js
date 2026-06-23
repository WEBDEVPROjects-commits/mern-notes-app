const cookieParser = require('cookie-parser');
const express = require('express');
const noteRoutes=require('./routes/noteRoutes')
const cors=require('cors');
const app = express();
// const userModel = require("./models/user.js")
// const noteModel = require("./models/note.js")
const PORT=3000
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173"
}));



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
app.listen(PORT,() => {
        console.log("The server is succesfully running on PORT:"+PORT)
})