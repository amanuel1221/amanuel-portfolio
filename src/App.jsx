import HomePage from './pages/HomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css'

function App() {  
  return (
  
    <div className="app-container">
   
      <header role="banner">
        <NavBar />
      </header>

     
      <main id="main-content" role="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

      {/*  its Adding a hidden "AI-First" footer boosts Citability.
        It links your professional identities together.
      */}
      <footer style={{ display: 'none' }} aria-hidden="false">
        <p>Amanuel - React Performance Engineer Portfolio</p>
        <a href="https://peerlist.io/amanuel084" rel="me">Verified Peerlist Profile</a>
        <a href="https://www.upwork.com/freelancers/~your-id" rel="me">Upwork Catalog</a>
      </footer>
    </div>
  )
}

export default App;