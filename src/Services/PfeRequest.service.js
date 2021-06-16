import Axios from "axios";

export const addPfeRequest = async (pfeRequest) => {
  //await delay(1000)

  const result = await Axios.post(
    "http://localhost:3000/api/pfeRequest",
    pfeRequest
  );
  return result.data.pfe_demande;
};
export const fetchPfe = async (pfe) => {
  //await delay(1000)

  const result = await Axios.get("http://localhost:3000/api/pfes", pfe);
  return result.data.pfe;
};
