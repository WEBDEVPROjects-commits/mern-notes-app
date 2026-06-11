import Navbar from "../../src/components/navbar"
import Body from "../../src/components/body"
import CreateNote from "../../src/components/CreateNote"
import { homeContext } from "../../src/components/Context/Context";
import { useContext } from "react";
function Dashboard(){
    const {CreateNoteOpen}=useContext(homeContext);
    return (
        <>
            <Navbar/>
            <Body/>
            { CreateNoteOpen &&(<CreateNote/>)
            
            }
          
        </>
    )

}

export default Dashboard