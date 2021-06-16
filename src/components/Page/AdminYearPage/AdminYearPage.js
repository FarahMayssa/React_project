import { addYear as addYearFromservice } from "../../../Services/year.service";
import AddYear from "../../AddYear/AddYear";
import { useState } from "react";

function AdminYearPage() {
  const [years, setYears] = useState([]);

  const addYear = async (debut, fin) => {
    try {
      const newProf = await addYearFromservice({
        debut: debut,
        fin: fin,
      });
      setYears([...years, newYears]);
    } catch (e) {
      console.log("error");
    }
  };
  return (
    <div className="AdminYearPage">
      <AddYear addYear={addYear} />
    </div>
  );
}

export default AdminYearPage;
