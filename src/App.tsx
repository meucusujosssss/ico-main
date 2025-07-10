import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ICOProgress from './components/ICOProgress';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Security from './components/Security';
import Legal from './components/Legal';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-primary">
      <Navbar />
      <Hero />
      <ICOProgress />
      <About />
      <Tokenomics />
      <Roadmap />
      <Team />
      <Security />
      <Legal />
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;