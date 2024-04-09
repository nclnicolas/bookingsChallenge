import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Button from "react-bootstrap/Button";
import { TimeslotResponse } from "../utils/types/types";
import { formatDate } from "../utils/functions/functions";
import "../styles/hours.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Hours = ({ slots }: { slots: TimeslotResponse }) => {
  const [dissabled, setDissabled] = useState(true);
  const [previousRedirect, setPreviousRedirect] = useState(false);
  const [nextRedirect, setNextRedirect] = useState(false);

  const hours = slots.availableTimeslots.map((time) => {
    const [hour, minute] = time.split(":");
    return `${hour}:${minute}`;
  });

  const date = formatDate(slots.date);

  const handleHourSelection = (hour: string) => {
    localStorage.setItem("selectedHour", JSON.stringify(hour));
    localStorage.setItem("selectedDate", JSON.stringify(date));

    setDissabled(false); 
  };

  const handlePrevious = () => {
    setPreviousRedirect(true)
  }
  const handleNext = () => {
    setNextRedirect(true)
  }

  if(previousRedirect) return <Navigate to="/" />;
  if(nextRedirect) return <Navigate to="/summary" />;

  return (
    <>
      <div className="container">
        <p>Proximos turnos disponibles </p>
        <p>{date}</p>

        <ToggleButtonGroup type="checkbox" className="hour-buttons">
          {hours.map((hour) => (
            <ToggleButton
              id="tbg-btn-1"
              key={hour}
              variant="secondary"
              value={hour}
              className="toggle-button"
              onClick={() => handleHourSelection(hour)}
            >
              {`${hour}`}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      <div className="button-container">
        <Button className="next-button" variant="secondary" onClick={handlePrevious}>
          Anterior
        </Button>

        <Button className="next-button" variant="secondary" onClick={handleNext} disabled={dissabled}>
          Siguiente
        </Button>
      </div>
    </>
  );
};

export default Hours;
