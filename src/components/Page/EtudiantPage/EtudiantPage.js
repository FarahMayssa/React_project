import React, { useState } from "react";

import NavBar from "../../NavBar/NavBar";
import Entete from "../../Entete/Entete";
import Profil from "../../Profil/Profil";
import Pfeform from "../../Pfeform/Pfeform";
import StudentProfile from "../../StudentProfile/StudentProfile"
import {addPfeRequest as addPfeRequestFromservice} from "../../../Services/PfeRequest.service"
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function EtudiantPage() {

 


const [pfesRequest, setPfeRequests] = useState([])


  const addPfeRequest = async (name,title,supervisor,description) => {
    try {
     
      const newPfeRequest = await addPfeRequestFromservice({
        name:name,
        title:title,
        supervisor:supervisor,
        description:description
        
      })
      setPfeRequests([...pfesRequest, newPfeRequest])
      
      
    } catch (e) {
      console.log("error")
    }
  }
  return (
    <div className="EtudiantPage">
      
    
      <Route path="/student/:id"
  render={(props) => <StudentProfile {...props} />}
  />
      <Entete title="PFE" btnNom="Déposer Pfe" />
      <Pfeform  addPfeRequest={addPfeRequest}/>
    </div>
  );
  }

export default EtudiantPage;
