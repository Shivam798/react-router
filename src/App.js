import React from 'react'
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import About from "./components/About"
import Home from "./components/Home"
import Contact from "./components/Contact"

const App=()=> {
  return (
        <div className='App'>
            <Navbar/>
            <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/about' exact element={<About/>}/>
              <Route path='/contact' exact element={<Contact/>}/>

            </Routes>
            
        </div>   
  );
};
export default App;
  