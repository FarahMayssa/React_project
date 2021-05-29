import React from "react";

import NavBar from "../../NavBar/NavBar";
import AjoutForm from "../../AjoutForm/AjoutForm";


function AdminEtuPage() {
  return (
    <div className="AdminEtuPage">
      <NavBar />
      <AjoutForm text="Ajouter un Etudiant" spec="Classe" identifiant="Numéro carte d'étudiant" btn_ajout="Ajouter un Etudiant"/>

    </div>
  );
}

export default AdminEtuPage;
