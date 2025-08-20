import React from 'react'
import { Link } from 'react-router-dom'

const Pelicula = ({id,titulo,imagen}) => {
  return (
      <div className=' hover:bg-blue-950 hover:border-blue-500 hover:border-2 flex flex-col items-center h-fit w-fit just m-2 p-2 bg-gray-900 rounded-lg shadow-lg'>
          

      <p className='text-1xl font-extrabold '><b>{titulo }</b></p>
          <img className='w-60  rounded-2xl border-blue-400 border-1' src={`https://image.tmdb.org/t/p/w500/${imagen}`} alt={titulo} />

          <Link to={`/detalles/${id}`} className='bg-blue-950 p-2 m-2 rounded-xl text-amber- hover:bg-blue-400 font-bold hover:border-1' >Ver Detalles</Link>
    </div>
  )
}

export default Pelicula