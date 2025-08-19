import React, { useEffect } from 'react'
import { useState } from 'react'
import FormuPeli from '../Formulario/FormuPeli'
import Pelicula from './Pelicula'
const VistaPeli = () => {
    const [pelicula, setpeli] = useState(null)
    const [info, setinfo] = useState(null)
    const apiKEY = "ade9764f282518fd88d5284bab1d0325"
    const baseURL = "https://api.themoviedb.org/3/search/movie?query="
    const [todaspelicula, setPelicula] = useState([])
     const [pag, setpag] = useState(1)
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
    const obtenertodas = async () => {
          
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKEY}&language=es-ES&page=${pag}`)
            const data = await response.json()
         
            setPelicula(data.results)
            console.log(todaspelicula)
        } catch (error) {
            console.error("Ocurrio el siguiente error", error)
        }
    }
    const sumarPagina = () => {

    setpag(pag + 1)
    }
     const restarPagina = () => {
        if (pag > 1) {
            setpag(pag - 1)
        }
        }
  
     


    useEffect(()=> {
    
    obtenerPelis()
    
    }, [pelicula])
    useEffect(()=> {
    
    obtenertodas()
     
    }, [pag])
    
  return (
      <div >
          <div className='flex flex-col items-center justify-center p-4 rounded-lg shadow-lg'>
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
              })
              :
           
              
                  todaspelicula.map((peli, index) => {
                      return (
                          <div key={index} >
                              <Pelicula
                                  id={peli.id}
                                  titulo={peli.title}
                                  imagen={peli.backdrop_path}
                      
                      
                              />
                          </div>
                      )
                  })
              }
          
           
          </div>

      
      
      
          <div className='flex items-center justify-center m-2 p-2 bg-blue-950 rounded-lg'>
                 <button onClick={restarPagina}>Anterior  </button>
          
          <p className='m-3 p-1'>{pag }</p>
           <button onClick={sumarPagina}>Siguiente  </button>
      </div>
        
      </div>
    
  )
}

export default VistaPeli