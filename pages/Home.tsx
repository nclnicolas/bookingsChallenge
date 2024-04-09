import React, { useEffect, useState } from 'react'
import Progress from '../components/progressBar';
import Categories from '../components/categories';
import '../styles/home.css';

const Home = () => {

  const [services, setServices] = useState([]);
  

  useEffect(() => {
    fetch('../api/services.json')
      .then(response => response.json())
      .then(data => {
        setServices(data.services)
      })
      .catch(error => {
        console.error('Error al obtener los servicios:', error);
        
      })
  }, [])
  
  return (
    <>
      <div className='progress-container'>
        Seleccionar servicio
        <Progress progress={ 20 }/>
      </div>
      
      
          <Categories services={services}/>
    
    </>
  )
}

export default Home