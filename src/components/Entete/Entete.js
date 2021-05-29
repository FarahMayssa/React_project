import "./Entete.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Entete(props) {
  return (
    <div className="Entete">
      <div class="content">
        <div class="row">
          <div className="title" class="col-ml-7 col-6">
            <h4 class="page-title">{props.title}</h4>
          </div>

          <div className="btnNom" class="col-sm-5 col-8 text-right m-b-30">
            <a href="#" class="btn btn-primary btn-rounded">
              {props.btnNom}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
