import React from 'react';

import './SideMenu.css';
import scrollToTop from '../Common/Scroll';

export default function SideMenu() {
  return (
    <div className="side-menu">
        <a href="# " onClick={scrollToTop}>
      <h2>
          Matt / Hew
      </h2>
        </a>
      <a
        href="#about"
      >
        About
      </a>
      {/* <a
        href="#projects"
        onClick={closeSlideOutMenu}
      >
        Projects
      </a>
      <a
        href="#skills"
        onClick={closeSlideOutMenu}
      >
        Skills
      </a> */}
      <a
        href="#thoughts"
      >
        Thoughts
      </a>
      <a href="#contact-me">
        Contact Me
      </a>
    </div>
  )
}
