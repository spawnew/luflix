import React from 'react'
import FormuPeli from '../Formulario/FormuPeli'
import Pelicula from './Pelicula'
import { useState, useEffect } from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
const VistaFiltrada = () => {
    const [pelicula, setpeli] = useState(null)
    const [info, setinfo] = useState(null)
    const apiKEY = "ade9764f282518fd88d5284bab1d0325"
    const baseURL = "https://api.themoviedb.org/3/search/movie?query="




      const obtener = (form) => {
       
console.log(form)
setpeli(form.peli)
console.log(pelicula)
    }
    const obtenerPelis = async () => {
        try {
            const response = await fetch(`${baseURL}${pelicula}&api_key=${apiKEY}`)
            const data = await response.json()
            setinfo(data)
        } catch (error) {
            console.error("Ocurrio el siguiente error", error)
        }
    }
  
  
  
   useEffect(()=> {
      
      obtenerPelis()
      
      }, [pelicula])
  
  
    return (
      <div className='bg-gray-900 w-screen h-screen flex flex-col items-center justify-center p-4'>
             
          <div className='flex flex-col w-screen h-100  items-center justify-center p-4 rounded-lg shadow-lg'>
              <FormuPeli obtener={obtener} /> 
          </div>
             
          <div className='flex flex-wrap justify-center'>
              {pelicula && info.results ?
                  info.results.map((peli, index) => {
                      return (
                          <div key={index}>
                              <Pelicula
                                  id={peli.id}
                                  titulo={peli.title}
                                  imagen={peli.backdrop_path}
                              />
                  

                          </div>
                      )
                  }) : <div className='flex flex-col items-center justify-center p-4'>
                        <p className='text-2xl'><b>Busque su pelicula favorita </b></p>
                        <Link to="/">
                        <img className='border-2 border-blue-800 hover:w-50 hover:border-blue-400' src={logo}></img>
                    </Link>
                    
                    
                    </div>
              }
</div>

</div>
            )}

export default VistaFiltrada