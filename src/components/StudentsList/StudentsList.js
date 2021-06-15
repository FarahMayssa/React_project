import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { useEffect, useState } from "react";
import {BsPencil,BsTrash,BsEye} from 'react-icons/bs';
import {deleteStudent as deleteStudentFromApi} from '../../Services/etudiant.service'



class StudentsList extends Component{
  constructor(props) {
		super(props);
		this.state = {
		  etudiants: [],
		}
    
	  }

/*const [etudiants,setEtudiants]= useState([])
const [isVisible, setIsVisible] = useState(true)
const toggleVisibility = () => {
  setIsVisible(!isVisible)
}
/*const deleteStudent=async(id)=>{
  await deleteStudentFromApi(id)
  const newStudents = etudiants.filter((etudiant)=> etudiant.id !== id)
  setEtudiants(newStudents)
 
}*/
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
    <div className="StudentsElement">
       <div class="pfe">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-border table-striped custom-table datatable mb-0">
          
              <tbody className="items">
              {this.state.etudiants.map((item)=>(
                <tr>
                  
                  <td className="name">{item._id}</td>
                  <td className="name">{item.name}</td>
                  <td className="email">{item.email}</td>
                  <td className="CE">{item.CE}</td>
                  <td className="phone">{item.phone}</td>
                  <td className="classe">{item.classe}</td>
                  <td className="supervisor">{item.supervisor}</td>
                  <td className="icone"><BsPencil/></td>
                  <td className="icone"><BsEye/></td>
                  <td className="icone" ><BsTrash/></td>
                  <button onClick={(e)=> this.deleteStudents(item._id,e)}>Delete </button>
            
                </tr>
                ))}
              
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
    
  );
}
}
export default StudentsList