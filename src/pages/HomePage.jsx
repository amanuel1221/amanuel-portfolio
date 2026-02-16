import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe'; 

const Service = lazy(() => import('../components/Service'));
const Skills = lazy(() => import('../components/Skills'));
const Experiance = lazy(() => import('../components/Experiance'));
const Projects = lazy(() => import('../components/Projects'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));

const HomePage = () => {
  return (
    <main className="home-page m-0 p-0 w-full">
      <HeroSection />
      <AboutMe /> 
      
      <Suspense fallback={<div className="min-h-screen bg-transparent" />}>
        <Service />
        <Skills />
        <Experiance />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}

export default HomePage;