import { useState } from "react";
import { useEffect } from "react";

export const PetList = ({ employeeId }) => {

  const [pets, setPets] = useState([])
  useEffect(() => {

    function fetchPets() {
      fetch(`https://vet-app-0obi.onrender.com/api/pets?employeeId=${employeeId}`)
        .then((res) => res.json())
        .then((apiData) => {
          setPets(apiData)
          // console.log(apiData)
        })
    }
    fetchPets()
  }, [employeeId])
  return (
    <aside className="pets-list">
      <p>
        {pets.length ? (pets.map((pet) => { return <p>{pet.name}</p> })) : <p> No pets listed for this employee</p>} </p>

    </aside>
  );
};

export default PetList;
