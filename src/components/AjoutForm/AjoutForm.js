import "bootstrap/dist/css/bootstrap.min.css";
import "./AjoutForm.css";
import Button from "react-bootstrap/Button";

export default function AjoutForm(props) {
  return (
    <div class="page-wrapper">
      <div class="content">
        <div class="titre">
          <h4 className="text">{props.text}</h4>
        </div>

        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label>
                    Nom et prénom <span class="text-danger">*</span>
                  </label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label className="spec">
                    {props.spec}<span class="text-danger">*</span>
                  </label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>
                    Email <span class="text-danger">*</span>
                  </label>
                  <input class="form-control" type="email" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label className="identifiant">
                    {props.identifiant} <span class="text-danger">*</span>
                  </label>
                  <input class="form-control" type="number" />
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label>Date de naissance</label>
                  <div class="cal-icon">
                    <input type="text" class="form-control datetimepicker" />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label>Adresse</label>
                  <div class="cal-icon">
                    <input type="text" class="form-control datetimepicker" />
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label>Photo</label>
                  <div class="profile-upload">
                    <div class="upload-img">
                      <img alt="" src="user.jpg" />
                    </div>
                    <div class="upload-input">
                      <input type="file" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="btn_ajout">
              <Button class="btn btn-primary submit-btn">
               {props.btn_ajout}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
