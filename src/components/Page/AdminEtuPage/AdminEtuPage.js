import React, { useState } from "react";


import{ addStudent as addStudentFromservice } from "../../../Services/etudiant.service"
import AddStudent from "../../AddStudent/AddStudent";




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
      
     
      <AddStudent addStudent={addStudent}/>

    </div>
  );
}

export default AdminEtuPage;
