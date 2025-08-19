import React from 'react'
import { Link } from 'react-router-dom'

const Pelicula = ({id,titulo,imagen}) => {
  return (
      <div className='flex flex-col items-center just m-2 p-2 bg-gray-900 rounded-lg shadow-lg'>
          

      <p className='text-1xl font-extrabold '><b>{titulo }</b></p>
          <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${imagen}`} alt={titulo} />

          <Link to={`/detalles/${id}`} className='bg-blue-950 p-2 m-2 rounded-xl text-amber- hover:bg-blue-400 font-bold hover:border-1' >Ver Detalles</Link>
    </div>
  )
}

export default Pelicula