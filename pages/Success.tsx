import Button from "react-bootstrap/Button";
import '../styles/success.css'
import { useEffect } from "react";

const Success = () => {

  const serviceLocal = localStorage.getItem("selectedServices");
  const hourLocal = localStorage.getItem("selectedHour");
  const dateLocal = localStorage.getItem("selectedDate");

  useEffect(() => {
    if(!serviceLocal || !hourLocal || !dateLocal){
        window.location.href = '/';
    }
  }, [])


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