import "bootstrap/dist/css/bootstrap.min.css";
import "./AddYear.css";

import Button from "react-bootstrap/Button";

import { useState } from "react";

export default function AddYear({ addYear }) {
  {
    const [debut, setDebut] = useState("");
    const [fin, setFin] = useState("");

    const handleAddYear = () => {
      addYear(debut, fin);
      setDebut("");
      setDebut("");
    };

    return (
      <div class="page-wrapper">
        <div class="content">
          <div class="titre">
            <h4 className="text">Add a scolar year</h4>
          </div>

          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label>
                      Begining of the year <span class="text-danger">*</span>
                    </label>

                    <input
                      onChange={(e) => setDebut(e.target.value)}
                      name="debut"
                      value={debut}
                      type="date"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label>
                      End of the year <span class="text-danger"></span>
                    </label>
                    <input
                      onChange={(e) => setFin(e.target.value)}
                      name="fin"
                      value={fin}
                      type="date"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="btn_ajout">
                <Button
                  onClick={handleAddYear}
                  class="btn btn-primary submit-btn"
                >
                  {" "}
                  Add a Scolar Year
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
