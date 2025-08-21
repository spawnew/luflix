
import './App.css'
import VistaPeli from './Componentes/VistaPeli'
import Navbar from './Componentes/Navbar'
import Detalles from './Componentes/Detalles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import VistaFiltrada from './Componentes/VistaFiltrada'
import Contacto from './Componentes/Contacto'
import { PeliProvider } from './Context/PeliContext';
import Favoritos from './Componentes/Favoritos'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {


  return (
    <>
     
      <BrowserRouter>
        <PeliProvider> 
         <Navbar />
        <Routes>
        
<Route path='/' element={<VistaPeli />} />
          <Route path='/detalles/:id' element={<Detalles />} /> 
          <Route path='/buscar/' element={<VistaFiltrada />} />   
          <Route path='/contacto/' element={<Contacto />} />
            <Route path='/favoritos/' element={<Favoritos />} />
            
          </Routes>
             
          <ToastContainer 
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            theme="dark"
          />
      
      </PeliProvider>
      
      </BrowserRouter>
     
      
 
         
      
    </>
  )
}

export default App
