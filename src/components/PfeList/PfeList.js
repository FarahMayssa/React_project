import "bootstrap/dist/css/bootstrap.min.css";

import "./PfeList.css";

export default function PfeList(props) {
  return (
    <div className="Pfe-List">
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-border table-striped custom-table datatable mb-0">
              <thead>
                <tr>
                  <th className="pfe">{props.pfe}</th>
                  <th className="etudiant">{props.etudiant}</th>
                  <th className="encadrant">{props.encadrant}</th>
                  <th className="date">{props.date}</th>
                  <th className="cahier">{props.cahier}</th>
                  <th className="delai">{props.delai}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>E-commerce</td>
                  <td>Mariem mariel</td>
                  <td>Mourad</td>
                  <td>2 fevrier 2021</td>
                  <td>voila le lien </td>
                  
                </tr>
                <tr>
                  <td>E-commerce</td>
                  <td>Mariem mariel</td>
                  <td>Mourad</td>
                  <td>2 fevrier 2021</td>
                  <td>voila le lien </td>
                  
                </tr>
                <tr>
                  <td>E-commerce</td>
                  <td>Mariem mariel</td>
                  <td>Mourad</td>
                  <td>2 fevrier 2021</td>
                  <td>voila le lien </td>
                  
                </tr>
                <tr>
                  <td>E-commerce</td>
                  <td>Mariem mariel</td>
                  <td>Mourad</td>
                  <td>2 fevrier 2021</td>
                  <td>voila le lien </td>
                  
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
