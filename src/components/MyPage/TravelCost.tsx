import { useReducer, useState } from "react";

const TravelCost = () => {
  const [number, setNumber] = useState(0);
  const [person, setPerson] = useState("");

  return (
    <div>
      <h2>총 여행 경비</h2>

      <hr></hr>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />

      <input
        type="person"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
      />
    </div>
  );
};
export default TravelCost;
