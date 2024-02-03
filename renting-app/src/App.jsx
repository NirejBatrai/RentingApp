import { useState } from "react";
import Navbar from "./components/Navbar";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import BikeDetails from "./pages/BikeDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/bike-details' element={<BikeDetails />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
