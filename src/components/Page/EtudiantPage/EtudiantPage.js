import React, { useState } from "react";

import NavBar from "../../NavBar/NavBar";
import Entete from "../../Entete/Entete";
import Profil from "../../Profil/Profil";
import Pfeform from "../../Pfeform/Pfeform";
import {addPfeRequest as addPfeRequestFromservice} from "../../../Services/PfeRequest.service"

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
      <NavBar />

      <Entete title="Etudiant" btnNom="changer mot de passe" />
      <Profil
        title2="Classe"
        text2="3 ing 2"
        title3="Encadrant"
        text3="Mourad ali "
        title4="Date d'acceptation"
        text4="13/02/2020 "
      />

      <Entete title="PFE" btnNom="Déposer Pfe" />
      <Pfeform  addPfeRequest={addPfeRequest}/>
    </div>
  );
  }

export default EtudiantPage;
