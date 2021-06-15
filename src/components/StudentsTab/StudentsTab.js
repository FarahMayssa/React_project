
import React, { useEffect,useState } from "react"

import axios from 'axios'
import { Component } from "react"

import {BsPencil,BsTrash,BsEye} from 'react-icons/bs';
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
    deleteStudents(id,e){
      axios.delete(`http://localhost:3000/api/etudiants/${id}`)
      .then(res => {
        console.log(res)
        console.log(res.data)
    
        const etudiants=this.state.etudiants.filter(item => item.id!==id)
        this.setState({etudiants})
    
      })}

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
              
              <tbody className="items">
              {this.state.etudiants.map((item)=>(
                <tr>
                  
           
                  <td className="name">{item.name}</td>
                  <td className="email">{item.email}</td>
                  <td className="CE">{item.CE}</td>
                  <td className="phone">{item.phone}</td>
                  <td className="classe">{item.classe}</td>
                  <td className="supervisor">{item.supervisor}</td>
                  <td className="icone"><BsPencil/></td>
                  <td className="icone"><BsEye/></td>
                  <td className="icone" onClick={(e)=> this.deleteStudents(item._id,e)} ><BsTrash/></td>
                  
            
                </tr>
                ))}
              
              </tbody>
             
            </table>
          </div>
        </div>
      </div>

         

    
   
      </div>
      </>
    )}}
         
    export default StudentsTab;