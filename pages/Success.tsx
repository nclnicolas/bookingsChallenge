import React from 'react'
import Button from "react-bootstrap/Button";
import '../styles/success.css'

const Success = () => {


    const redirectToHome = () => {
        window.location.href = '/';
        localStorage.removeItem('selectedServices');
        localStorage.removeItem('selectedHour');
        localStorage.removeItem('selectedDate');
      };


  return (
    <>
    <div className='cont-success'>
        SERVICIO CONFIRMADO!!

        <Button variant="secondary" onClick={redirectToHome}>
        Home
        </Button>
    </div>

    

    </>
  )
}

export default Success