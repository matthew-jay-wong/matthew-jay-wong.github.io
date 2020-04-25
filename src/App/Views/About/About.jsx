import React from 'react';

import './About.css';
import ExternalLink from '../../Common/ExternalLink';

export default function About() {
  return (
    <div 
      className="about"
      id="about"
    >
      <h2>About Me</h2>
      <p>
        Like I said before, My name is Matthew and I'm currently in my third year at UofT studying computer science.
        Currently, I'm taking the year off school to work but at the rate things are going, 
        I'll probably stay working full time and finish my undergraduate degree part time.
      </p>
      <p>
        In terms of the work I do, I'm open to anything really that challenges me and pushes me to think beyond what they teach in school.
        The most important thing I'll say is that I take pride in making sure whatever I do build ends up being maintaininable and scalable for whatever the future throws at it.
      </p>
      <p>
        If you or anyone you know has a cool project or gig in mind that you think I would be perfect for, 
        defenitely send me an <a href="mailto:matthew.jay.wong@gmail.com">email</a> or look me up on <ExternalLink url="https://www.linkedin.com/in/matthew-jay-wong/">LinkedIn</ExternalLink>!
      </p>
    </div>
  )
}
