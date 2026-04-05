import React from 'react';
import NavbarComp from './components/NavbarComp';
import HeroComp from './components/HeroComp';        
import AboutComp from './components/AboutComp';       
import ContactComp from './components/ContactComp';
import FooterComp from './components/FooterComp';
import ExperienceComp from './components/ExperienceComp';
import CertificateComp from './components/certificateComp';

function App() {
  return (
    <>
      <NavbarComp />
      <main className="pt-16">
        <section id="home">
          <HeroComp />
        </section>

        <section id="about">
          <AboutComp />
        </section>

        <section id="certificate">
          <CertificateComp />
        </section>

        <section id="experience">
          <ExperienceComp />
        </section>

        <section id="contact">
          <ContactComp />
        </section>
      </main>
      <FooterComp/>
    </>
  );
}

export default App;