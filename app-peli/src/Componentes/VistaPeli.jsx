import React, { useEffect } from 'react'
import { useState } from 'react'
import FormuPeli from '../Formulario/FormuPeli'

const VistaPeli = () => {
    const [pelicula, setpeli] = useState(null)
    const [info, setinfo]=useState(null)
    const apiKEY = "ade9764f282518fd88d5284bab1d0325" 
    const baseURL="https://api.themoviedb.org/3/search/movie?query="
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
    console.log(info)
  return (
      <div>
          
          <FormuPeli obtener={obtener}
                            />              
          <div>
              <div>
                  {pelicula}
              </div>
          
</div>
         






    </div>
  )
}

export default VistaPeli