import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/categories.css";
import { ServicesData, Service } from "../utils/types/types";

const Categories = ({ services }: { services: Array<ServicesData> }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [redirectTime, setRedirectTime] = useState(false);

  const handleSelection = (service: Service) => {
    setButtonDisabled(true);

    const selectedServicesString = localStorage.getItem("selectedServices");
    const selectedServices = selectedServicesString
      ? JSON.parse(selectedServicesString)
      : [];

    const index = selectedServices.findIndex(
      (selectedService: Service) => selectedService.id === service.id
    );

    if (index === -1) {
      selectedServices.push(service);
    } else {
      selectedServices.splice(index, 1);
    }

    localStorage.setItem("selectedServices", JSON.stringify(selectedServices));
  };

  const servicesByCategories = services.reduce((acc: any, servi: any) => {
    if (!acc[servi.category]) {
      acc[servi.category] = [];
    }

    acc[servi.category].push(servi);
    return acc;
  }, {});

  const renderServicesByCategories = () => {
    return Object.keys(servicesByCategories).map((category) => (
      <>
        <Dropdown>
          <Dropdown.Toggle className="full-width-button" variant="secondary">
            {category}
          </Dropdown.Toggle>
          <Dropdown.Menu show={false} className="menu">
            {servicesByCategories[category].map((service: Service) => (
              <Card key={service.id} className="full-width-card">
                <Card.Body>
                  <Card.Text>{service.name}</Card.Text>
                  <Card.Text>{service.description}</Card.Text>
                  <div className="button-container">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleSelection(service)}
                    >
                      Seleccionar
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <br />
      </>
    ));
  };

  const handleTime = () => {
    setRedirectTime(true);
  };

  if (redirectTime) {
    return <Navigate to="/time" />;
  }

  return (
    <div>
      <div className="manos-pies">
        <Dropdown>{renderServicesByCategories()}</Dropdown>
      </div>

      {buttonDisabled && (
        <Button
          className="next-button"
          variant="secondary"
          onClick={handleTime}
        >
          Siguiente
        </Button>
      )}
    </div>
  );
};

export default Categories;
