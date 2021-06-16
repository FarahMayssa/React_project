import React from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";

import ProfProfile from "../../ProfProfile/ProfProfile"
import PfeTab from "../../PfeTab/PfeTab";
import { Link } from "react-router-dom";
import PfeRequest from "../../PfeRequest/PfeRequest";


function ProfPage() {
  let {name} = useParams()
  return (
    <div className="ProfPage">
      <Route path="/Prof/:name" render={(props) => <ProfProfile {...props} />} />
      
     
  <Link to={{pathname:`/requet/${name}`}}>Requests</Link>
  
      

      <PfeTab />
     
      
    </div>
  );
}

export default ProfPage;
