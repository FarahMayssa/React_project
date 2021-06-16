import React, { useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminProfPage from "./components/Page/AdminProfPage/AdminProfPage";
import AdminEtuPage from "./components/Page/AdminEtuPage/AdminEtuPage";

import LoginPage from "./components/Page/LoginPage/LoginPage";
import SignUpPage from "./components/Page/SignUpPage/SignUpPage";
import HomePage from "./components/Page/HomePage/HomePage";
import SideBar from "./components/SideBar/SideBar";
import YearTab from "./components/YearTab/YearTab";

import StudentsTab from "./components/StudentsTab/StudentsTab";
import PfeTab from "./components/PfeTab/PfeTab";
import ProfTab from "./components/ProfTab/ProfTab";
import ProfInfo from "./components/ProfInfo/ProfInfo";
import StudentInfo from "./components/StudentInfo/StudentInfo";
import ProfPage from "./components/Page/ProfPage/ProfPage";
import EtudiantPage from "./components/Page/EtudiantPage/EtudiantPage";
import PfeRequest from "./components/PfeRequest/PfeRequest";
import AdminYearPage from "./components/Page/AdminYearPage/AdminYearPage";

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage />

        <Switch>
          <Route exact path="/student/:id">
            <EtudiantPage />
          </Route>
          <Route exact path="/Prof/:name">
            <ProfPage />
          </Route>
          <Route exact path="/request/:name">
            <PfeRequest />
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
          <Route exact path="/admin/year">
            <YearTab />
          </Route>
          <Route exact path="/admin/addYear">
            <AdminYearPage />
          </Route>

          <Route
            exact
            path="/admin/prof/:id"
            render={(props) => <ProfInfo {...props} />}
          />
          <Route
            exact
            path="/requet/:name"
            render={(props) => <PfeRequest {...props} />}
          />
          <Route
            exact
            path="/admin/student/:id"
            render={(props) => <StudentInfo {...props} />}
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
