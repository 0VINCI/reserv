import React, { useState } from "react";
import Calendar from "./Calendar";
import SelectBox from "./SelectBox";
import "./App.css";

const App = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [user, setUser] = useState("");

  const isReservationDisabled = user === "Mama";

  const handleReservation = () => {
    if (!startDate || !endDate || !user) {
      alert("Wszystkie pola są wymagane!");
      return;
    }

    alert(
      `Rezerwacja dodana:\nOd: ${startDate}\nDo: ${endDate}\nRezerwujący: ${user}`
    );
  };

  return (
    <div className="app">
      <header>
        <h1>System Rezerwacji Brumka</h1>
      </header>
      <main className="main-container">
        <img src="/brumek.jpeg" alt="Auto" className="car-image" />
        <div className="reservation-section">
          <Calendar setStartDate={setStartDate} setEndDate={setEndDate} />
          <div className="select-box-container">
            <SelectBox setUser={setUser} />
            {isReservationDisabled && (
              <p className="error-text">
                Mama nie może wykonać rezerwacji brumka
              </p>
            )}
          </div>
          <button
            onClick={handleReservation}
            className={`reserve-button ${
              isReservationDisabled ? "disabled" : ""
            }`}
            disabled={isReservationDisabled}
          >
            Zarezerwuj
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
