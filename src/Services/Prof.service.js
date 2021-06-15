import Axios from 'axios'
  
export const addProf= async (prof) => {
    //await delay(1000)

    const result = await Axios.post(
        "http://localhost:3000/api/enseignants" ,prof
    )
    return result.data.enseignant
  }
  export const deleteProf= async (id) => {
    //await delay(1000)

    const result = await Axios.delete(
        "http://localhost:3000/api/enseignants/"+id,
    )
    return result.data.enseignant
  }
