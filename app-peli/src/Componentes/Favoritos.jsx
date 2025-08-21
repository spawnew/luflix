import React from 'react'
import{PeliContext} from '../Context/PeliContext'
import { useContext } from 'react'
const Favoritos = () => {
  const { state } = useContext(PeliContext)
  
  const{quitar}=useContext(PeliContext)
    return (
        <div className='bg-gray-900  flex flex-col items-center justify-center p-4'>
            
            {state.map((peli) => {
            return(
            <div key={peli.id}>
           <p className="text-lg font-extrabold text-amber-50 mb-2 text-center">{peli.titulo }</p>
                    <img
      className="w-80 rounded-lg shadow-lg mb-4"
      src={`https://image.tmdb.org/t/p/w500/${peli.imagen}`}
      alt={peli.title}></img>
                
                <button onClick={()=>quitar(peli.id)} className="bg-red-800 p-2 mt-3 rounded-xl text-amber-200 font-bold border border-transparent hover:bg-blue-400 hover:text-gray-900 hover:border-blue-700 transition-colors duration-300">
            QUITAR
                    </button>
            </div>

            )
        }) }</div>
  )
}

export default Favoritos