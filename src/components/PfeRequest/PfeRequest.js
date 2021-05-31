import "bootstrap/dist/css/bootstrap.min.css";
import "./PfeRequest.css";
import Button from "react-bootstrap/Button";

export default function PfeRequest() {

  return (
    <div className="PfeRequest">
      <div class="card-block">
        <div class="title" style={{ fontFamily: "cursive" }}>
          Demande d'encadrement
        </div>
        <div class="table-responsive">
          <table class="table mb-0 new-patient-table">
            <tbody>
              <tr>
                <td>
                  <h2>John Doe</h2>
                </td>
                <td>E-commerce</td>
                <td>Description</td>
                <>
                  <td>
                    <Button
                      variant="outline-success"
                      style={{ marginRight: "20px" }}
                    >
                      Accepter
                    </Button>
                    <Button variant="outline-danger">Refuser</Button>
                  </td>
                </>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
