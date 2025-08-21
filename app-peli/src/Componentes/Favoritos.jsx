import React from 'react'
import{PeliContext} from '../Context/PeliContext'
import { useContext } from 'react'
const Favoritos = () => {
  const { state } = useContext(PeliContext)
  
  
    return (
        <div>{state.map((peli) => {
            return(
            <div key={peli.id}>
            <img
      className="w-80 rounded-lg shadow-lg mb-4"
      src={`https://image.tmdb.org/t/p/w500/${peli.imagen}`}
      alt={peli.title}></img>
                <p>{peli.titulo }</p>
            
            
            </div>

            )
        }) }</div>
  )
}

export default Favoritos