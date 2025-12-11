import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
 const Navbar = () => {
  return (
      <div>
          
         <nav className='flex flex-col bg-black md:flex-row md:items-center w-screen justify-between  shadow-lg p-4'>
             
              
                  <Link  to="/">
                <img className='w-15 border-blue-800 border rounded-2xl hover:bg-blue-900 hover:border-blue-400' src={logo}></img>
                  </Link>
                    <Link  to="/buscar">
                  <button className='p-4  text-amber-200 md:text-2xl font-semibold   hover:bg-blue-400 hover:text-md hover:text-blue-900 '>Buscar</button>
        </Link>
        <Link  to="/favoritos">
                  <button className='p-4 text-amber-200 md:text-2xl  font-semibold border-b-blue-900  hover:bg-blue-400 hover:text-md hover:text-blue-900 '>Favoritos</button>
              </Link>
                <Link to="/contacto">
                   <button className='p-4 text-amber-200 md:text-2xl  font-semibold border-b-blue-900 hover:bg-blue-400 hover:text-md hover:text-blue-900 '>Contacto</button>
                  </Link>
              
        </nav>


    </div>
  )
}

export default Navbar