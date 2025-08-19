import React from 'react'

const Pelicula = ({id,titulo,imagen}) => {
  return (
      <div className='flex flex-col items-center just m-2 p-2 bg-gray-200 rounded-lg shadow-lg'>
          

       <p className='bg-blue-600'>{titulo}</p>
          <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${imagen}`} alt={titulo} />


    </div>
  )
}

export default Pelicula