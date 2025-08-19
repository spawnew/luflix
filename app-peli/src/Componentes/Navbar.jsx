import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
 const Navbar = () => {
  return (
      <div>
          
          <nav className='flex flex-row justify-between align centers bg-gray-900  shadow-lg '>
             
              
                  <Link  to="/">
                <img className='w-15 border-blue-800 border rounded-2xl hover:bg-blue-900 hover:border-blue-400' src={logo}></img>
                  </Link>
                    <Link  to="/buscar">
                  <button className='p-4 border-b-blue-900 bg-blue-700 rounded-2xl hover:bg-blue-400 hover:text-md hover:text-blue-900'>Buscar</button>
              </Link>
                <Link to="/">
                   <button className='p-4 border-b-blue-900 bg-blue-700 rounded-2xl hover:bg-blue-400 hover:text-md hover:text-blue-900'>Buscar</button>
                  </Link>
              
        </nav>


    </div>
  )
}

export default Navbar