import React from 'react';
import Hero from '../components/Hero';
import ICOProgress from '../components/ICOProgress';
import About from '../components/About';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
import Security from '../components/Security';
import Legal from '../components/Legal';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ICOProgress />
      <About />
      <Tokenomics />
      <Roadmap />
      <Team />
      <Security />
      <Legal />
    </>
  );
};

export default HomePage;