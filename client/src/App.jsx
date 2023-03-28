import './App.css'
import React from 'react'
import Home from './pages/home';
import Customer from './pages/customer';
import Booking from './pages/booking';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
      { // CREATNG ROUTES
      }
        <Route exact path="/" element={<Home />} />
        <Route exact path="/customer" element={<Customer />} />
        <Route exact path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  )
}

export default App
