import { Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
      {/* <Routes>
    
<Route path="/" element={<Footer />}></Route>
<Route path="/LOGIN" element={<Login />}></Route>

        </Routes> */}
     

     

    </div>
  );
}

export default App;