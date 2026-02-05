import { useState } from 'react'

import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


import './App.css'

function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <div className="social-icons">
        <FaFacebook size={30} color="#1877F2" />
        <FaGithub size={30} color="#333" />
        <FaLinkedin size={30} color="#0A66C2" />
      </div>
    </div>
  );
}

export default App;
