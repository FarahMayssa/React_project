
import React, { useEffect,useState } from "react"

import axios from 'axios'
import { Component } from "react"
import StudentsList from "../StudentsList/StudentsList"
import { Link } from "react-router-dom"




class StudentsTab extends Component {
 
  constructor(props) {
		super(props);
		this.state = {
		  etudiants: [],
		}
    
	  }

 
	  componentDidMount(props){
    
		axios.get('http://localhost:3000/api/etudiants', {
				})
		  .then(response => {
			this.setState({
			  etudiants: response.data,		  
			})   
		  })
		  .catch(function (error) {
			console.log(error);
		  })
	  }

    render(){
    return (
      <>
      <div className="Students_Tab"  >
      <Link style={{ textDecoration: 'none'  }} to="/admin/addStudent">Add Student</Link> 
      
        <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <table className="table table-border table-striped custom-table datatable mb-0">
              <thead>
                <tr>
                  <th className="name1">Name</th>
                  <th className="email1">Email</th>
                  <th className="CE">Student Card</th>
                  <th className="phone1">Phone</th>
                  <th className="classe1">Class</th>
                  <th className="supervisor1">Supervisor</th>
               
                  

                 
                </tr>
              </thead>
             
            </table>
          </div>
        </div>
      </div>

          {this.state.etudiants.map((item)=>(
            
              <StudentsList
              key={item._id} 
              name = {item.name}
              email= {item.email}
              CE= {item.CE}
              phone = {item.phone}
              classe = {item.classe}
              supervisor = {item.supervisor}
              
              
              
              />
              
              
          ))}

    
   
      </div>
      </>
    )}}
         
    export default StudentsTab;