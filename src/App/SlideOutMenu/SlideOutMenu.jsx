import React from 'react';

import './SlideOutMenu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { closeSlideOutMenu } from './SlideOutMenuUtils';
import scrollToTop from '../Common/Scroll';

const scrollToTopCloseSideMenu = () => {
  scrollToTop();
  closeSlideOutMenu();
};

export default function SlideOutMenu() {
  return (
    <div id="slide-out-menu">
      <div className="top-bar">
        <button
          className="menu-button"
          onClick={scrollToTopCloseSideMenu}
        >
          <FontAwesomeIcon
            className="menu-icon"
            icon={faTimes}
          />
        </button>
        <div className="title">
          <a
            href="#"
            onClick={scrollToTop}
          >
            Matt / Hew
          </a>
        </div>
      </div>
      <div className="menu-links">
        <a
          href="#about"
          onClick={closeSlideOutMenu}
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
          onClick={closeSlideOutMenu}
        >
          Thoughts
        </a>
        <a
          href="#contact-me"
          onClick={closeSlideOutMenu}
        >
          Contact Me
        </a>
      </div>
    </div>
  )
}
