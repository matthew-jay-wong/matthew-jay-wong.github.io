import React from 'react';

import '../App.css';

export default function Currently() {
  return (
    <div className="PageItem">
      <h1>Currently</h1>
      <h2>Employed</h2>
      <h5>Taking a year off school to "work"</h5>
      <p>
        After finishing my third year of Computer Science at the University of Toronto, 
        I decided that the best thing for me right now is to take the year off to get
        down and dirty with the workforce. Currently, I am a software developer intern
        at TD securities working with the corporate investment banking technology
        solutions team.
      </p>
      <p>
        But if what you really want to know is what I do after work,
        look no further than my <a href="#Thoughts&Prayers">blog</a>.
      </p>
    </div>
  );
}
