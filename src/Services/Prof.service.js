import Axios from 'axios'
  
export const addProf= async (prof) => {
    //await delay(1000)

    const result = await Axios.post(
        "http://localhost:3000/api/enseignants" ,prof
    )
    return result.data.enseignant
  }