import Axios from 'axios'
  
export const addStudent= async (student) => {
    //await delay(1000)

    const result = await Axios.post(
        "http://localhost:3000/api/etudiants" ,student
    )
    return result.data.etudiant
  }
  export const deleteStudent= async (id) => {
    //await delay(1000)

    const result = await Axios.delete(
        "http://localhost:3000/api/etudiants/"+ id
    )
    return result.data.etudiant
  }
