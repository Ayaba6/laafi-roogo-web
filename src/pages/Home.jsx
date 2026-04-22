import React from 'react';
import Hero from '../components/Hero';
import Objectifs from '../components/Objectifs';
import ActionsTerrain from '../components/ActionsTerrain';
import AboutSection from '../components/AboutSection';
import Stats from '../components/Stats';
import Partenaires from '../components/Partenaires'; // Import du nouveau composant

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Objectifs />
      <ActionsTerrain />
      <AboutSection />
      <Stats />
      
      {/* Nouvelle section après les Stats */}
      <Partenaires />
    </div>
  );
};

export default Home;