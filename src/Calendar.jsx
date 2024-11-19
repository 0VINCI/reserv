import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ setStartDate, setEndDate }) => {
  const [selectedRange, setSelectedRange] = React.useState([null, null]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setSelectedRange([start, end]);
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="calendar">
      <h3>Wybierz daty:</h3>
      <DatePicker
        selected={selectedRange[0]} // Początkowa data
        onChange={handleDateChange} // Zmiana zakresu dat
        startDate={selectedRange[0]} // Data początkowa
        endDate={selectedRange[1]} // Data końcowa
        selectsRange // Włączenie wyboru zakresu dat
        inline // Wyświetlenie jako widok kalendarza
      />
    </div>
  );
};

export default Calendar;
