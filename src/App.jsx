import HomePage from './pages/HomePage';
import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import NavBar from './components/NavBar';



import './App.css'

function App() {  
  return (<>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      

    </>
  )
}

export default App;
