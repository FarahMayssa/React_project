import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { addPfeRequest } from "../../Services/PfeRequest.service";

export default function Pfeform({ addPfeRequest }) {
  {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [supervisor, setSupervisor] = useState("");
    const [description, setDescription] = useState("");

    const handleAddRequest = () => {
      addPfeRequest(name, title, supervisor, description);
      setName("");
      setDescription("");
      setTitle("");
      setSupervisor("");
      alert("Request sent");
    };

    return (
      <div className="Pfe-form">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <form>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Full Name</label>
                    <div class="cal-icon">
                      <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="name"
                        value={name}
                        class="form-control datetimepicker"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Pfe Title</label>
                    <div class="time-icon">
                      <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        name="title"
                        value={title}
                        class="form-control"
                        id="datetimepicker3"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Supervisor</label>
                    <div class="cal-icon">
                      <input
                        onChange={(e) => setSupervisor(e.target.value)}
                        type="text"
                        name="supervisor"
                        value={supervisor}
                        class="form-control datetimepicker"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>Description</label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  cols="30"
                  rows="4"
                  name="description"
                  value={description}
                  class="form-control"
                ></textarea>
              </div>

              <div class="m-t-20 text-center">
                <button
                  onClick={handleAddRequest}
                  class="btn btn-primary submit-btn"
                >
                  Send Pfe Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
