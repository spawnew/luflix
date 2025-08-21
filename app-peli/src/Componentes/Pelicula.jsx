import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

const Pelicula = ({ id, titulo, imagen,agregar }) => {
  const poster = imagen 
    ? `https://image.tmdb.org/t/p/w500/${imagen}` 
    : logo;

  return (
    <div className=" w-fit h-fit transition-transform duration-300 hover:scale-105 hover:opacity-80 cursor-pointer hover:bg-blue-950 hover:border-blue-500 hover:border-2 flex flex-col items-center  m-2 p-4 bg-gray-900 rounded-lg shadow-lg">
      
      <p className="text-lg font-extrabold text-amber-200 mb-2 text-center">
        {titulo}
      </p>
      
      <img
        className="w-60 h-80 object-cover rounded-2xl border border-blue-400 shadow-md"
        src={poster}
        alt={titulo}
      />

      <Link
        to={`/detalles/${id}`}
        className="bg-blue-950 p-2 mt-3 rounded-xl text-amber-200 font-bold border border-transparent hover:bg-blue-400 hover:text-gray-900 hover:border-blue-700 transition-colors duration-300"
      >
        Ver Detalles
      </Link>
      <button onClick={()=>agregar(titulo,imagen,id)} className="bg-blue-950 p-2 mt-3 rounded-xl text-amber-200 font-bold border border-transparent hover:bg-blue-400 hover:text-gray-900 hover:border-blue-700 transition-colors duration-300">
        Agregar a Favoritos
        </button>
    </div>
  )
}

export default Pelicula