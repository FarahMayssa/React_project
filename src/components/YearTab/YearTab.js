import React, { useEffect, useState } from "react";

import axios from "axios";
import { Component } from "react";
import { BsPencil, BsTrash, BsEye } from "react-icons/bs";

import { Link } from "react-router-dom";

class YearTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [],
    };
  }

  componentDidMount(props) {
    axios
      .get("http://localhost:3000/api/annees", {})
      .then((response) => {
        this.setState({
          years: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteYears(id, e) {
    axios.delete(`http://localhost:3000/api/annees/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);

      const years = this.state.years.filter((item) => item.id !== id);
      this.setState({ years });
    });
  }

  render() {
    return (
      <>
        <div className="Year_Tab">
          <Link style={{ textDecoration: "none" }} to="/admin/addYear">
            Add Year
          </Link>

          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-border table-striped custom-table datatable mb-0">
                  <thead>
                    <tr>
                      <th className="start">Begining of the year</th>
                      <th className="end">End of the year</th>
                    </tr>
                  </thead>
                  <tbody className="items">
                    {this.state.years.map((item) => (
                      <tr>
                        <td className="start">{item.debut}</td>
                        <td className="email">{item.fin}</td>

                        <td className="icone">
                          <BsEye />
                        </td>

                        <td className="icone">
                          <BsPencil />
                        </td>
                        <td
                          className="icone"
                          onClick={(e) => this.deleteYears(item._id, e)}
                        >
                          <BsTrash />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default YearTab;
