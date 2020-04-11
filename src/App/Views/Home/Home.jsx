import React from 'react';

import './Home.css';

import backgroundVideo from '../../../Assets/static-bw.mp4';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="home">
      <div className="video-container">
        <video
          autoPlay
          playsInline
          loop
          muted
          data-object-fit="cover"
        >
          <source
            src={backgroundVideo}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="title">
        <h1>Matthew Jay Wong</h1>
        <p>I am a third year computer science student at the University of Toronto, currently taking the year off to work.</p>
      </div>
    </div>
  );
};
