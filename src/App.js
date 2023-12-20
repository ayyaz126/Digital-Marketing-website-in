import React from 'react'
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Router>
         <Navbar/>
         <Routes>
            <Route  path='/' element={<Home/>}  />
            <Route  path='/about' element={<About/>}  />
            <Route  path='/serve' element={<Services/>}  />

         </Routes>
         <Footer/>
      </Router>
    
      
    </div>
  )
}

export default App;