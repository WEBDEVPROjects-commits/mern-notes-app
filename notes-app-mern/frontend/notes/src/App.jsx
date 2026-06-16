import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Dashboard from '../pages/Dashboard/Dashboard';
import { homeContext } from './components/Context/Context';
import Signup from '../pages/signup/Signup';
import Login from "../pages/login/Login"
function App() {
  const [CreateNoteOpen,setCreateNoteOpen]=useState(false);
  const [Notes,setNotes]=useState();
  return (
    <>  
    <homeContext.Provider value={{CreateNoteOpen,setCreateNoteOpen,Notes,setNotes}}>
        <div className='h-screen'>
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
          </Routes>
        </div>  
     </homeContext.Provider>
    </>
  )
}

export default App
