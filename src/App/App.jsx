import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

import Picture from './Picture/Picture';

import Title from './Title/Title';
import Currently from './Currently/Currently';
import Projects from './Projects/Projects';
import ThoughtsAndPrayers from './ThoughtsAndPrayers/ThoughtsAndPrayers';
import GetInTouch from './GetInTouch/GetInTouch';

export default function App() {
  return (
    <>
      <div
        id="Title"
        className="PageContainer"
      >
        <Title />
        <Picture />
      </div>
      <div
        id="Currently"
        className="PageContainer Reverse"
       >
         <Currently />
         <Picture />
       </div>
       <div
        id="Projects"
        className="PageContainer"
       >
         <Projects />
         <Picture />
       </div>
       <div
        id="Thoughts&Prayers"
        className="PageContainer Reverse"
       >
         <ThoughtsAndPrayers/>
         <Picture />
       </div>
      <div
        id="GetInTouch"
        className="PageContainer"
       >
         <GetInTouch />
         <Picture />
       </div>
       <FontAwesomeIcon 
        icon={faArrowAltCircleUp}
        size="3x"
        className="BackToTop"
        onClick={() => window.scroll({
          top: 0,
          left: 0,
        })}
       />
    </>
  );
}