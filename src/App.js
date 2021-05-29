import React, { useEffect } from "react";
import "./App.css";



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EtudiantPage from "./components/Page/EtudiantPage/EtudiantPage";
import ProfPage from "./components/Page/ProfPage/ProfPage";

import PfePage from "./components/Page/PfePage/PfePage";
import AdminProfPage from "./components/Page/AdminProfPage/AdminProfPage"
import AdminEtuPage from "./components/Page/AdminEtuPage/AdminEtuPage"
import { useState } from "react";





function App() {


  return (
    
    <div className="App">
      
      
  
      <Router>
        <Switch>
          <Route path="/etudiant">
            <EtudiantPage />
          </Route>
          <Route path="/Prof">
            <ProfPage />
          </Route>
          <Route path="/admin/pfe">
            <PfePage />
          </Route>
          <Route path="/admin/prof/ajout">
            <AdminProfPage />
          </Route>
          <Route path="/admin/etudiant/ajout">
            <AdminEtuPage />
          </Route>

        </Switch>
      </Router>
     
    </div>
    
  );
}

export default App;
