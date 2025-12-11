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
          // CORRECCIÓN: ?api_key va antes y language es query param correcto
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES&api_key=${apiKEY}`)
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

  // Construir URL de fondo (usa original para mejor resolución)
  const fondoUrl = pelicula?.backdrop_path ? `https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}` : null

  return (
      <div
        className='min-h-screen bg-center bg-cover flex flex-col items-center'
        style={{
          backgroundImage: fondoUrl ? `url(${fondoUrl})` : undefined,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          
        }}
      >
       
        <div className="w-full min-h-screen bg-black/60 flex flex-col items-center">
          <div className="w-screen flex flex-row items-center justify-center p-6">
              <div className="max-w-xl">
                <img
                  className="w-full rounded-lg shadow-lg mb-4 hidden" 
                  src={`https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}`}
                  alt={pelicula.title}
                />
              </div>
              <div className="text-amber-100 max-w-2xl p-4">
                 <p className="text-3xl font-bold mb-4">{pelicula.title}</p>
                 <p className="mb-4">{pelicula.overview}</p>
                 <p>📅 Fecha de lanzamiento: {pelicula.release_date}</p>
                 <p>⭐ Popularidad: {pelicula.popularity}</p>
                 <p>⏳ Duración: {pelicula.runtime} min</p>
              </div>
          </div>

          <Link to="/" className="bg-blue-700 p-2 m-4 rounded-xl text-amber-100 hover:bg-blue-400 hover:text-amber-50">
            Volver a la lista de películas
          </Link>
        </div>
      </div>
  )
}

export default Detalles