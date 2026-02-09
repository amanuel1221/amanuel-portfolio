import React from 'react'
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Service from '../components/Service';
import Skills from '../components/Skills';
import Experiance from '../components/Experiance';
const HomePage = () => {
  return (
  <div  className="home-page m-0 p-0 w-full">
  <HeroSection />
  <AboutMe /> 
  <Service />
  <Skills />
  <Experiance />
  </div>
   
  )
}

export default HomePage;
