import React from "react";
import "./ElementPfe.css"



export default function ElementPfe(props) {
  return (
    <div className="ElementPfe">
       <div class="pfe">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-border table-striped custom-table datatable mb-0">
          
              <tbody className="items">
                <tr>
                  <td className="titre">{props.titre}</td>
                  <td className="etudiant">{props.etudiant}</td>
                  <td className="encadrant">{props.encadrant}</td>
                  <td className="date_accep">{props.date_accep}</td>
                  <td className="cahier">{props.cahier}</td>
                  
                  
                  
           
                 
                  
                </tr>
             
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}