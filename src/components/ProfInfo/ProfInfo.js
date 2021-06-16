import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Component } from "react";

class ProfInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profs: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:3000/api/enseignants/" + this.props.match.params.id,
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
            <div class="row">
              <div class="col-sm-4">
                <div class="profile-info-left">
                  <div class="staff-id">
                    <span class="title1">Name: </span>
                    <span class="text1"> {this.state.profs.name}</span>
                  </div>
                  <div class="staff-id">
                    <span class="title2">Email: </span>
                    <span class="text2">{this.state.profs.email}</span>
                  </div>

                  <div class="staff-id">
                    <span class="title3">Phone : </span>
                    <span class="text3">{this.state.profs.phone}</span>
                  </div>
                  <div class="staff-id">
                    <span class="title4">Department </span>
                    <span class="text4">{this.state.profs.dept}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProfInfo;
