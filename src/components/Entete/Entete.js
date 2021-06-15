import "./Entete.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import AddStudent from "../../components/AddStudent/AddStudent";

export default function Entete(props) {
  return (
    <div className="Entete">
      <div class="content">
        <div class="row">
          <div className="title" class="col-ml-7 col-6">
            <h4 class="page-title">{props.title}</h4>
          </div>

       
        </div>
      </div>
    </div>
  );
}
