import "bootstrap/dist/css/bootstrap.min.css";

export default function Pfeform() {
  return (
    <div className="Pfe-form">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Titre de PFE</label>
                  <div class="cal-icon">
                    <input type="text" class="form-control datetimepicker" />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Encadrant</label>
                  <div class="time-icon">
                    <input
                      type="text"
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
                  <label>Cahier de charge</label>
                  <div class="cal-icon">
                    <input type="text" class="form-control datetimepicker" />
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Description</label>
              <textarea cols="30" rows="4" class="form-control"></textarea>
            </div>

            <div class="m-t-20 text-center">
              <button class="btn btn-primary submit-btn">Déposer PFE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
