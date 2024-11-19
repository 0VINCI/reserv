import React from "react";

const SelectBox = ({ setUser }) => {
  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <div className="select-box">
      <h3>Wybierz rezerwującego:</h3>
      <select onChange={handleUserChange} defaultValue="">
        <option value="" disabled>
          Wybierz...
        </option>
        <option value="Pawełek">Paweł</option>
        <option value="Michaś">Michał</option>
        <option value="Mama">Mama</option>
      </select>
    </div>
  );
};

export default SelectBox;
