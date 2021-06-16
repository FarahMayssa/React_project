import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Component } from "react";



class StudentInfo extends Component {
    
    
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
  
  
   
  componentDidMount(){
   
      axios
      .get("http://localhost:3000/api/etudiants/"+this.props.match.params.id, {})

      .then((response) => {
        this.setState({
            students:response.data
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
            <div class="profile-img">
                <img src="prof.jpg"  />
              </div>
              
              <div class="col-sm-4">
                <div class="profile-info-left">
               
                  <div class="staff-id">
                    <span class="title1">Name : </span>
                    <span class="text1"> {this.state.students.name}</span>
                  </div>
                  <div class="staff-id">
                    <span class="title2">Email : </span>
                    <span class="text2">{this.state.students.email}</span>
                  </div>
                  <div class="staff-id">
                    <span class="title2">Student Card : </span>
                    <span class="text2">{this.state.students.CE}</span>
                  </div>

                  <div class="staff-id">
                    <span class="title2">Classe : </span>
                    <span class="text2">{this.state.students.classe}</span>
                  </div>




                  <div class="staff-id">
                    <span class="title3">Phone : </span>
                    <span class="text3">{this.state.students.phone}</span>
                  </div>
                  <div class="staff-id">
                    <span class="title4">Supervisor : </span>
                    <span class="text4">{this.state.students.supervisor}</span>
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
export default StudentInfo;
