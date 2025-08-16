import React from 'react'
import { useState } from 'react'
import FormuPeli from '../Formulario/FormuPeli'



const VistaPeli = () => {
    const [pelicula, setpeli] = useState(null)
   
    
    const obtener = (form) => {
console.log(form)
setpeli(form.peli)
console.log(pelicula)
     }
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