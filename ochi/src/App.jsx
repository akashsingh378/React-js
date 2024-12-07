/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './About';
import Eyes from './Eyes';
import Featured from './Featured';
import Cards from './Cards';
import Footer from './Footer';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
    <Marquee />
    <About />
    <Eyes />
    <Featured />
    <Cards />
    <Footer />
      </div>
  )
}

export default App