import React, { useState } from "react";
import Progress from "../components/progressBar";
import Button from "react-bootstrap/Button";
import { Service } from "../utils/types/types";
import { Navigate } from "react-router-dom";

const Summary = () => {
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  const servicesLocal = localStorage.getItem("selectedServices");
  const namesLocal = servicesLocal ? JSON.parse(servicesLocal) : [];
  const servicesName = namesLocal.map((item: Service) => item.name);

  const hourLocal = localStorage.getItem("selectedHour");
  const date = localStorage.getItem("selectedDate");

  const handlePrev = () => {
    setPrev(true)
  }
  const handleNext = () => {
    setNext(true)
  }

  if (prev) return <Navigate to="/time" />
  if (next) return <Navigate to="/success" />

  return (
    <>
      <div className="progress-container">
        Confirmar turno
        <Progress progress={90} />
      </div>

      <div className="container">
        {servicesName.map((item: any) => (
          <p key={item}>Servicio: {item}</p>
        ))}

        <p>Fecha: {date} {hourLocal}</p>
      </div>

      <div className="button-container">
        <Button className="next-button" variant="secondary" onClick={handlePrev}>
          Anterior
        </Button>

        <Button className="next-button" variant="secondary" onClick={handleNext}>
          Confirmar
        </Button>
      </div>
    </>
  );
};

export default Summary;
