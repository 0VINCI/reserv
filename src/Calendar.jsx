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
        selected={selectedRange[0]}
        onChange={handleDateChange}
        startDate={selectedRange[0]}
        endDate={selectedRange[1]}
        selectsRange
        inline
      />
    </div>
  );
};

export default Calendar;
