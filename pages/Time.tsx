import React, { useEffect, useState } from "react";
import Progress from "../components/progressBar";
import Hours from "../components/hours";
import { TimeslotResponse } from "../utils/types/types";

const Time = () => {
  const [slots, setSlots] = useState<TimeslotResponse>({
    date: "",
    serviceId: 0,
    availableTimeslots: [],
  });

  useEffect(() => {
    fetch("../api/slots.json")
      .then((response) => response.json())
      .then((data) => {
        setSlots(data);
      })
      .catch((error) => {
        console.error("Error al obtener los slots:", error);
      });
  }, []);

  return (
    <>
      <div className="progress-container">
        Seleccionar horario
        <Progress progress={60} />
      </div>

      <Hours slots={slots} />
    </>
  );
};

export default Time;
