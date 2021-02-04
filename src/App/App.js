import React from 'react';

import './App.css';

import MobileNavbar from './MobileNavbar/MobileNavbar';
import SlideOutMenu from './SlideOutMenu/SlideOutMenu';

import Home from './Views/Home/Home';
import About from './Views/About/About';
// import Projects from './Views/Projects/Projects';
// import Skills from './Views/Skills/Skills';
// import Thoughts from './Views/Thoughts/Thoughts';
// import ContactMe from './Views/ContactMe/ContactMe';
import Footer from './Footer/Footer';
import SideMenu from './SideMenu/SideMenu';
import DesktopHome from './DesktopHome/DesktopHome';

function App() {
  return (
    <>
      <DesktopHome />
      <div
        className="App"
      >
        <MobileNavbar />
        <SlideOutMenu />
        <SideMenu />
        <div className="content">
          <Home />
          <hr />
          <About />
          {/* <hr />
        <Projects />
        <hr />
        <Skills /> */}
          {/* <hr />
          <Thoughts />
          <hr />
          <ContactMe /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
