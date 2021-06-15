import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import {BsPencil,BsTrash} from 'react-icons/bs';
import {deleteProf as deleteProfFromApi} from '../../Services/Prof.service'



export default function ProfList(props) {

const [enseignants,setProfs]= useState([])
const [isVisible, setIsVisible] = useState(true)
const toggleVisibility = () => {
  setIsVisible(!isVisible)
}
const deleteProf=async(id)=>{
  await deleteProfFromApi(id)
  const newProf = enseignants.filter((enseignant)=> enseignant.id !== id)
  setProfs(newProf)
}



  return (
    <div className="ProfElement">
       <div class="pfe">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-border table-striped custom-table datatable mb-0">
          
              <tbody className="items">
              { isVisible && (
                <tr>
                <td className="name">{props.name}</td>
                  <td className="email">{props.email}</td>
                  <td className="phone">{props.phone}</td>
                  <td className="dept">{props.dept}</td>
                  
                  <td className="icone"><BsPencil/></td>
                  <td className="icone" onClick={() => {deleteProf(props.name);}} onClick={toggleVisibility} ><BsTrash/></td>
                  
                  
                  
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
