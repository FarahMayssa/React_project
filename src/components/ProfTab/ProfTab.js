
import React, { useEffect,useState } from "react"

import axios from 'axios'
import { Component } from "react"


import { Link } from "react-router-dom"
import ProfList from "../ProfList/ProfList"




class ProfTab extends Component {
 
  constructor(props) {
		super(props);
		this.state = {
		  enseignants: [],
		}
    
	  }

 
	  componentDidMount(props){
    
		axios.get('http://localhost:3000/api/enseignants', {
				})
		  .then(response => {
			this.setState({
                enseignants: response.data,		  
			})   
		  })
		  .catch(function (error) {
			console.log(error);
		  })
	  }

    render(){
    return (
      <>
      <div className="Prof_Tab"  >
      <Link style={{ textDecoration: 'none'  }} to="/admin/addProf">Add Professor</Link> 
      
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
             
            </table>
          </div>
        </div>
      </div>

          {this.state.enseignants.map((item)=>(
              <ProfList
              key={item._id}
              name = {item.name}
              email= {item.email}
              phone = {item.phone}
              dept= {item.dept}
            
             
              
              />
          ))}


    
   
      </div>
      </>
    )}}

    export default ProfTab;