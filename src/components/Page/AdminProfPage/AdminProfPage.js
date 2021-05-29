import React from "react";

import NavBar from "../../NavBar/NavBar";
import AjoutForm from "../../AjoutForm/AjoutForm";


function AdminProfPage() {
  return (
    <div className="AdminProfPage">
      <NavBar />
      <AjoutForm text="Ajouter un Enseignant" spec="Spécialité" identifiant="Numéro CIN" btn_ajout="Ajouter un Enseignant"/>

    </div>
  );
}

export default AdminProfPage;
