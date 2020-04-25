import React, { useEffect } from 'react';

import './MobileNavbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { openSlideOutMenu } from '../SlideOutMenu/SlideOutMenuUtils';

const scrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

export default function MobileNavbar() {

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    window.addEventListener('scroll', () => {
      const currScrollPos = window.pageYOffset;
      document.getElementById('mobile-navbar').style.top = prevScrollPos > currScrollPos ? '0' : '-56px';
      prevScrollPos = currScrollPos;
    });
    return () => window.removeEventListener('scroll');
  }, []);

  return (
    <div
      className="mobile-navbar"
      id="mobile-navbar"
    >
      <button
        className="menu-button"
        onClick={openSlideOutMenu}
      >
        <FontAwesomeIcon className="menu-icon" icon={faBars} />
      </button>
      <span className="title">
        <a
          href="javascript:void(0);"
          onClick={scrollToTop}
        >
          Matt / Hew
        </a>
      </span>
    </div>
  );
}
