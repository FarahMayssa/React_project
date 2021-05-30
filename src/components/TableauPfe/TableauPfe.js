
import React from "react"
import ElementPfe from "../ElementPfe/ElementPfe"
import "./TableauPfe.css"




export default function TableauPfe(props) {
  

    return (
      <div className="tableau_pfe"  >
        <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-border table-striped custom-table datatable mb-0">
              <thead>
                <tr>
                  <th className="pfe1">Pfe</th>
                  <th className="etudiant1">Etudiant</th>
                  <th className="encadrant1">Encadrant</th>
                  <th className="date1">Date d'acceptation</th>
                  <th className="cahier1">Cahier de charge</th>

                 
                </tr>
              </thead>
             
            </table>
          </div>
        </div>
      </div>
          {props.itemtab.map((item)=>(
              <ElementPfe
              key={item.id}
              pfe = {item.pfe}
              etudiant = {item.etudiant}
              encadrant= {item.encadrant}
              date = {item.date}
              cahier = {item.cahier}
              />
          ))}
    
   
      </div>
    )
  }