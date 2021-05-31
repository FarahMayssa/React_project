import React from "react";

import NavBar from "../../NavBar/NavBar";
import Entete from "../../Entete/Entete";
import Profil from "../../Profil/Profil";
import TableauPfe from "../../TableauPfe/TableauPfe";

import PfeRequest from "../../PfeRequest/PfeRequest";

function ProfPage() {

 

  const itemtab =[{

    id:"1",
    pfe:"E-commerce",
    etudiant:"Mayssa",
    encadrant:"Ali",
    date:"22/02/2020",
    cahier:"voila le lien"

  },
  {

    id:"21",
    pfe:"Reseau",
    etudiant:"Farah",
    encadrant:"Mourad",
    date:"22/03/2021",
    cahier:"voila le lien 2"

  },
  {

    id:"3",
    pfe:"E-commerce",
    etudiant:"Mariem",
    encadrant:"Ali",
    date:"12/02/2020",
    cahier:"voila le lien 3"

  },
  {

    id:"4",
    pfe:"Iot",
    etudiant:"Ahmed",
    encadrant:"Mohamed",
    date:"22/12/2020",
    cahier:"voila le lien4"

  },
  {

    id:"5",
    pfe:"Iot",
    etudiant:"Emna",
    encadrant:"Ali",
    date:"22/02/2015",
    cahier:"voila le lien5"

  },
  ]
  return (
    <div className="ProfPage">
      <NavBar />

      <Entete title="Enseignant" btnNom="changer mot de passe" />
      <Profil title2="spécialité" text2="Réseau" title3="Bureau" text3="A14" />
      <TableauPfe itemtab={itemtab} />
      <PfeRequest />
    </div>
  );
}

export default ProfPage;
