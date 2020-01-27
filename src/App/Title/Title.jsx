import React from 'react';

import '../App.css';
import './Title.css';

const NAVIGATION_LOCATIONS = [
  'Currently',
  'Projects',
  'Thoughts & Prayers',
  'Get In Touch',
];

const NavLinks = () => NAVIGATION_LOCATIONS.map((location) => (
  <li key={location}>
    <a href={`#${location.replace(/ /g, '')}`}>{location}</a>
  </li>
));

export default function Title() {
  return (
    <div className="PageItem">
      <h1>Matthew</h1>
      <h2>Toronto -> Crock Rock</h2>
      <h5>A lifestyle blogger without a life</h5>
      <p>
        I am a third year computer science student at the University of Toronto, currently taking the year off to work.
        I love movies, reading, and mackerel sashimi.
        What these three things have in common is that they all pair so well with BEER.
      </p>
      <ul className="NavLinks">
        <NavLinks />
      </ul>
    </div>
  );
}
