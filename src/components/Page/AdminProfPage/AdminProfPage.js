
import NavBar from "../../NavBar/NavBar";
import {addProf as addProfFromservice } from "../../../Services/Prof.service"
import AddProf from "../../AddProf/AddProf";
import { useState } from "react";



function AdminProfPage() {
  const [profs, setProfs] = useState([])


  const addProf = async (name,email,phone,dept) => {
    try {
     
      const newProf = await addProfFromservice({
        name:name,
        email:email,
        phone:phone,
        dept:dept
        
      })
      setProfs([...profs, newProf])
      
    } catch (e) {
      console.log("error")
    }
  }
  return (
    <div className="AdminProfPage">
      <NavBar />
      <AddProf addProf={addProf}/>

    </div>
  );
}

export default AdminProfPage;

 

