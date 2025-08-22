import  { useEffect } from 'react'
import { useState } from 'react'
import{PeliContext} from '../Context/PeliContext'
import { useContext } from 'react'
import Pelicula from './Pelicula'

const VistaPeli = () => {
  const { agregar } = useContext(PeliContext)
    const apiKEY = "ade9764f282518fd88d5284bab1d0325"

    const [todaspelicula, setPelicula] = useState([])
     const [pag, setpag] = useState(1)

    
  
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
    
    obtenertodas()
   
    }, [pag])
  
  return (
      <div className='bg-gray-900  flex flex-col  items-center justify-center p-4'>
          <h1 className='font-serif text-amber-50 p-1'>Bienvenido a Luflix</h1>
             <h2 className= 'font-serif text-amber-50 p-1'>Su buscador de peliculas </h2>
          <div className='flex flex-wrap justify-center'>
       
              
                 { todaspelicula.map((peli, index) => {
                      return (
                          <div key={index} >
                              <Pelicula
                                  id={peli.id}
                                  titulo={peli.title}
                                  imagen={peli.backdrop_path}
                                    agregar={agregar}
                      
                              />
                          </div>
                      )
                  })
              }
    
           
          </div>
           
       
              
                 
                             
                    
                      
                
              
          
           
         


      
      
      
          <div className='flex items-center justify-center m-2 p-2 bg-blue-950 rounded-lg'>
                 <button className='hover:bg-blue-900 p-1 bg-black border-2 border-blue-500 rounded-2xl font-bold' onClick={restarPagina}>Anterior  </button>
          
          <p className='m-3 p-1 font-extrabold'>{pag }</p>
           <button className='hover:bg-blue-900 p-1 bg-black border-2 border-blue-500 rounded-2xl font-bold' onClick={sumarPagina}>Siguiente  </button>
      </div>
        
      </div>
    
  )
}

export default VistaPeli