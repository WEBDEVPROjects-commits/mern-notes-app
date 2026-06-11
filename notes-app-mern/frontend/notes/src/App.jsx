import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Dashboard from '../pages/Dashboard/Dashboard';
import { homeContext } from './components/Context/Context';
function App() {
  const [CreateNoteOpen,setCreateNoteOpen]=useState(false);
  return (
    <>  
    <homeContext.Provider value={{CreateNoteOpen,setCreateNoteOpen}}>
        <div className='h-screen'>
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
          </Routes>
        </div>  
     </homeContext.Provider>
    </>
  )
}

export default App
