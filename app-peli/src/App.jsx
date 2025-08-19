
import './App.css'
import VistaPeli from './Componentes/VistaPeli'
import Navbar from './Componentes/Navbar'
import {BrowserRouter , Routes} from 'react-router-dom'
function App() {


  return (
    <>
      <Navbar />
      <BrowserRouter>
      
        
        <Routes>

          <VistaPeli />
        </Routes>
      
      
      
      </BrowserRouter>
     
      
 
         
      
    </>
  )
}

export default App
