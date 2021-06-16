import Axios from 'axios'
  
export const addYear= async (year) => {
    //await delay(1000)

    const result = await Axios.post(
        "http://localhost:3000/api/annees" ,year
    )
    return result.data.annee
  }

