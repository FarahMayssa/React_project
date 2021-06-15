import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EtudiantPage from "./components/Page/EtudiantPage/EtudiantPage";
import ProfPage from "./components/Page/ProfPage/ProfPage";

import AdminProfPage from "./components/Page/AdminProfPage/AdminProfPage";
import AdminEtuPage from "./components/Page/AdminEtuPage/AdminEtuPage";

import LoginPage from "./components/Page/LoginPage/LoginPage";
import SignUpPage from "./components/Page/SignUpPage/SignUpPage";
import HomePage from "./components/Page/HomePage/HomePage";

import StudentsTab from "./components/StudentsTab/StudentsTab";
import PfeTab from "./components/PfeTab/PfeTab";
import ProfTab from "./components/ProfTab/ProfTab";
import ProfInfo from "./components/ProfInfo/ProfInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage />

        <Switch>
          <Route exact path="/student">
            <EtudiantPage />
          </Route>
          <Route path="/Prof">
            <ProfPage />
          </Route>
          <Route exact path="/admin/pfes">
            <PfeTab />
          </Route>
          <Route exact path="/admin/students">
            <StudentsTab />
          </Route>
          <Route exact path="/admin/prof">
            <ProfTab />
          </Route>

          <Route
            exact
            path="/admin/prof/:id"
            render={(props) => <ProfInfo {...props} />}
          />
          <Route exact path="/admin/addProf">
            <AdminProfPage />
          </Route>
          <Route exact path="/admin/addStudent">
            <AdminEtuPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
