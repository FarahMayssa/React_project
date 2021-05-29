import React from "react";

import NavBar from "../../NavBar/NavBar";
import Entete from "../../Entete/Entete";
import Profil from "../../Profil/Profil";
import Pfeform from "../../Pfeform/Pfeform";

function EtudiantPage() {
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
      <Pfeform />
    </div>
  );
}

export default EtudiantPage;
