import React, { useEffect, useState } from "react";

import axios from "axios";
import { Component } from "react";
import { BsPencil, BsTrash, BsEye } from "react-icons/bs";

import { Link } from "react-router-dom";

class ProfTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profs: [],
    };
  }

  componentDidMount(props) {
    axios
      .get("http://localhost:3000/api/enseignants", {})
      .then((response) => {
        this.setState({
          profs: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteProfs(id, e) {
    axios.delete(`http://localhost:3000/api/enseignants/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);

      const profs = this.state.profs.filter((item) => item.id !== id);
      this.setState({ profs });
    });
  }


  render() {
    return (
      <>
        <div className="Prof_Tab">
          <Link style={{ textDecoration: "none" }} to="/admin/addProf">
            Add Professor
          </Link>

          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-border table-striped custom-table datatable mb-0">
                  <thead>
                    <tr>
                      <th className="name1">Name</th>
                      <th className="email1">Email</th>
                      <th className="CE">Phone</th>
                      <th className="phone1">Department</th>
                    </tr>
                  </thead>
                  <tbody className="items">
                    {this.state.profs.map((item) => (
                      <tr>
                        <td className="name">{item.name}</td>
                        <td className="email">{item.email}</td>
                        <td className="phone">{item.phone}</td>
                        <td className="dept">{item.dept}</td>

                        <Link to ={"/admin/prof/"+item._id}>
                          <td className="icone">
                            <BsEye  />
                          </td>
                        </Link>

                        <td className="icone">
                          <BsPencil />
                        </td>
                        <td
                          className="icone"
                          onClick={(e) => this.deleteProfs(item._id, e)}
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

export default ProfTab;
