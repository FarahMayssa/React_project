import Axios from 'axios'

export const fetchEtu= async () => {
    //await delay(1000)
    const result = await Axios.get(
        "http://localhost:3000/api/etudiants" ,
    )
    return result.data.etudiant
  }