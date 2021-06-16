import "bootstrap/dist/css/bootstrap.min.css";
import "./AddStudent.css";
import Button from "react-bootstrap/Button";

import { useState } from "react";

export default function AddStudent({ addStudent }) {
  {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [CE, setCE] = useState("");
    const [phone, setPhone] = useState("");
    const [classe, setClasse] = useState("");
    const [supervisor, setSupervisor] = useState("");

    const handleAddStudent = () => {
      addStudent(name, email, CE, phone, classe, supervisor);
      setName("");
      setEmail("");
      setCE("");
      setPhone("");
      setClasse("");
      setSupervisor("");
    };

    return (
      <div class="page-wrapper">
        <div class="content">
          <div class="titre">
            <h4 className="text">Add Student</h4>
          </div>

          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label>
                      Full Name <span class="text-danger">*</span>
                    </label>

                    <input
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      value={name}
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label>
                      Email <span class="text-danger">*</span>
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      value={email}
                      type="text"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label>Student Card Id</label>
                    <div class="cal-icon">
                      <input
                        onChange={(e) => setCE(e.target.value)}
                        name="CE"
                        value={CE}
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label>Phone</label>
                    <div class="cal-icon">
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        name="phone"
                        value={phone}
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label>Class</label>
                    <div class="cal-icon">
                      <input
                        onChange={(e) => setClasse(e.target.value)}
                        name="classe"
                        value={classe}
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label>Supervisor</label>
                    <div class="cal-icon">
                      <input
                        onChange={(e) => setSupervisor(e.target.value)}
                        name="supervisor"
                        value={supervisor}
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn_ajout">
                <Button
                  onClick={handleAddStudent}
                  class="btn btn-primary submit-btn"
                >
                  {" "}
                  Add a Student
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
