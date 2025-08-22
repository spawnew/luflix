import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Detalles = () => {
const [pelicula, setPelicula] = useState([])
    const { id } = useParams();
 const apiKEY = "ade9764f282518fd88d5284bab1d0325"
  
 const obtenertodas = async () => {
          console.log(id)
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}&language=es-ES&?api_key=${apiKEY}`)
            const data = await response.json()
         console.log(data)
            setPelicula(data)
            console.log(pelicula)
        } catch (error) {
            console.error("Ocurrio el siguiente error", error)
        }
    }


    useEffect(() => {
        obtenertodas()
    }, [id])
  return (
        <div className="w-screen flex flex-col items-center justify-center bg-gray-900 p-6">
    <p className="text-2xl text-amber-100 font-bold mb-4">{pelicula.title}</p>
    <img
      className="w-80 rounded-lg shadow-lg mb-4"
      src={`https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}`}
      alt={pelicula.title}
    />
    <p className="text-amber-100 text-center max-w-2xl mb-2">{pelicula.overview}</p>
    <p className="text-amber-100">📅 Fecha de lanzamiento: {pelicula.release_date}</p>
    <p className="text-amber-100">⭐ Popularidad: {pelicula.popularity}</p>
          <p className="text-amber-100">⏳ Duración: {pelicula.runtime} min</p>
         
         <Link to="/" className="bg-blue-700 p-1 m-1 rounded-xl text-amber-100 hover:bg-blue-400 hover:text-amber-50">
            Volver a la lista de películas
              </Link>
  </div>
  )
}

export default Detalles