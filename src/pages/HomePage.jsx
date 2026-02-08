import React from 'react'
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import Service from '../components/Service';
const HomePage = () => {
  return (
  <div  className="home-page m-0 p-0 w-full">
  <HeroSection />
  <AboutMe /> 
  <Service />
  </div>
   
  )
}

export default HomePage;
