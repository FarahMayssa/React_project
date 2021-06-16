import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Card } from "react-bootstrap";
import { Component } from "react";

class ProfProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profs: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:3000/api/enseignant/" + this.props.match.params.name,
        {}
      )

      .then((response) => {
        this.setState({
          profs: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="Profil">
        <div class="profile-view">
          <div class="profile-basic">
            {this.state.profs.map((item) => (
              <div class="col-sm-4">
                <div class="profile-info-left">
                  <div class="staff-id">
                    <span class="title1">Name: </span>
                    <span class="text1"> {item.name}</span>
                  </div>
                  <div class="staff-id">
                    <span class="title2">Email: </span>
                    <span class="text2">{item.email}</span>
                  </div>

                  <div class="staff-id">
                    <span class="title3">Phone : </span>
                    <span class="text3">{item.phone}</span>
                  </div>
                  <div class="staff-id">
                    <span class="title4">Department </span>
                    <span class="text4">{item.dept}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default ProfProfile;
