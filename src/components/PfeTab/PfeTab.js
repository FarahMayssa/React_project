import React, { useEffect, useState } from "react";
import ElementPfe from "../ElementPfe/ElementPfe";
import "./PfeTab.css";
import { fetchPfe } from "../../Services/PfeRequest.service";
import axios from "axios";
import { Component } from "react";

class PfeTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pfe: [],
    };
  }

  componentDidMount(props) {
    axios
      .get("http://localhost:3000/api/pfes", {})
      .then((response) => {
        this.setState({
          pfe: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div className="tableau_pfe">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-border table-striped custom-table datatable mb-0">
                  <thead>
                    <tr>
                      <th className="pfe1">Pfe</th>
                      <th className="encadrant1">Encadrant</th>
                      <th className="etudiant1">Etudiant</th>

                      <th className="date1">Date d'acceptation</th>
                      <th className="cahier1">Cahier de charge</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
          {this.state.pfe.map((item) => (
            <ElementPfe
              key={item._id}
              titre={item.titre}
              encadrant={item.encadrant}
              etudiant={item.etudiant}
              date_accep={item.date_accep}
              cahier={item.cahier}
            />
          ))}
        </div>
      </>
    );
  }
}

export default PfeTab;
