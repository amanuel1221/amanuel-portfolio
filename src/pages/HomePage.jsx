import React from 'react'
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Service from '../components/Service';
import Skills from '../components/Skills';
const HomePage = () => {
  return (
  <div  className="home-page m-0 p-0 w-full">
  <HeroSection />
  <AboutMe /> 
  <Service />
  <Skills />
  </div>
   
  )
}

export default HomePage;
