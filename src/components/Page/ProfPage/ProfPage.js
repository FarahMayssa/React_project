import React from "react";

import NavBar from "../../NavBar/NavBar";

import Profil from "../../Profil/Profil";


import PfeRequest from "../../PfeRequest/PfeRequest";
import PfeTab from "../../PfeTab/PfeTab";
import ElementPfe from "../../ElementPfe/ElementPfe";

function ProfPage() {

 
  return (
    <div className="ProfPage">
 
      <Profil title2="spécialité" text2="Réseau" title3="Bureau" text3="A14" />
      
       
        <PfeTab  />
      
      
      <PfeRequest />
    </div>
  );
}

export default ProfPage;
