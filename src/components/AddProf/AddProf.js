import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";

import { useState } from "react";

export default function AddProf({ addProf }) {
  {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [dept, setDept] = useState("");
   

    const handleAddProf = () => {
      addProf(name, email, phone,dept);
      setName("");
      setPhone("");
      setEmail("");
      setDept("");

    };

    return (
      <div class="page-wrapper">
        <div class="content">
          <div class="titre">
            <h4 className="text">Add a professor</h4>
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
                      aria-label ="FullName"
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
                     aria-label = "email"
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
                    <label>Phone</label>
                    <div class="cal-icon">
                      <input
                      aria-label = "Phone"
                        onChange={(e) => setPhone(e.target.value)}
                        name="phone"
                        value={phone}
                        type="Number"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label>Department</label>
                    <div class="cal-icon">
                      <input
                      aria-label = "department"
                        onChange={(e) => setDept(e.target.value)}
                        name="dept"
                        value={dept}
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
         
              </div>

              <div className="btn_ajout">
                <Button
                data-testid="addProf"
                  onClick={handleAddProf}
                  class="btn btn-primary submit-btn"
                > Add a professor</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
