import React, { useState } from "react";

import NavBar from "../../NavBar/NavBar";
import AjoutForm from "../../AjoutForm/AjoutForm"
import{ addStudent as addStudentFromservice } from "../../../Services/etudiant.service"



function AdminEtuPage() {
  const [students, setStudents] = useState([])


  const addStudent = async (name,email,CE,phone,classe,supervisor ) => {
    try {
     
      const newStudent = await addStudentFromservice({
        name:name,
        email:email,
        CE:CE,
        phone:phone,
        classe:classe,
        supervisor:supervisor
        
      })
      setStudents([...students, newStudent])
      
    } catch (e) {
      console.log("error")
    }
  }

 

  

  return (
    <div className="AdminEtuPage">
      <NavBar />
      <AjoutForm addStudent={addStudent}/>

    </div>
  );
}

export default AdminEtuPage;
