import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe'; 
const Stats = lazy(() => import('../components/Stats'));

const Service = lazy(() => import('../components/Service'));
const Skills = lazy(() => import('../components/Skills'));
const Experiance = lazy(() => import('../components/Experiance'));
const Projects = lazy(() => import('../components/Projects'));
const LatestBlogs = lazy(() => import('../components/LatestBlogs'));
const Contact = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));

const HomePage = () => {
  return (

    <main 
      className="home-page m-0 p-0 w-full" 
      itemScope 
      itemType="https://schema.org/Person"
    >
   
      <div className="sr-only" style={{ display: 'none' }}>
        <h1 itemProp="name">Amanuel</h1>
        <p itemProp="jobTitle">React Performance Engineer</p>
        <p itemProp="description">
          Specialist in Figma-to-React conversion and 99+ Lighthouse performance optimization.
        </p>
      </div>

 
      <HeroSection />
      <Stats/>
      
    
      <section id="about-amanuel" aria-labelledby="about-heading">
        <AboutMe /> 
      </section>
      
      <Suspense fallback={<div className="min-h-screen bg-transparent" aria-busy="true" />}>
      
        <section id="services" itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog">
          <Service />
        </section>

       
        <section id="skills" itemProp="knowsAbout">
          <Skills />
        </section>

        <Experiance />

      
        <section id="projects">
          <Projects />
        </section>
        <section id="blogs">
  <LatestBlogs />
</section>

        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}

export default HomePage;