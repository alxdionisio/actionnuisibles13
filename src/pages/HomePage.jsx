import React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import NuisiblesStrip from '../components/NuisiblesStrip';
import Services from '../components/Services';
import LieuxIntervention from '../components/LieuxIntervention';
import Stats from '../components/Stats';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import MoreAbout from '../components/MoreAbout';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Blog from '../components/Blog';

function HomePage() {
  return (
    <>
      <Seo
        title="Dératisation & désinsectisation Bouches-du-Rhône"
        description="Action Nuisibles 13 : lutte anti-nuisibles pour particuliers et professionnels dans les Bouches-du-Rhône. Dératisation, désinsectisation, guêpes, frelons, chenilles processionnaires. Interventions rapides."
        canonicalPath="/"
      />
      <main>
      <Hero />
      <NuisiblesStrip />
      <Services />
      <Stats />
      <About />
      <Testimonials />
      <MoreAbout />
      <LieuxIntervention />
      <FAQ />
      <Contact />
      <Blog />
    </main>
    </>
  );
}

export default HomePage;
