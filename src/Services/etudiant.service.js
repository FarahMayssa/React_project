import Axios from 'axios'
  
export const addStudent= async (student) => {
    //await delay(1000)

    const result = await Axios.post(
        "http://localhost:3000/api/etudiants" ,student
    )
    return result.data.etudiant
  }