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
        Like I said before, My name is Matt and I've been working in tech, specifically capitol markets within the banks for over 2.5 years. 
        I have done everything from doing whatever I can to quickly get new projects off the ground (helping with back + front end, initial pipeline and infrastructure setup), 
        to quickly familiarizing myself with large code bases in order to bring value to the project as soon as possible. While red tape exists to slow down development, I've alwys tried my best to never let this be the reason I cannot progress with development by opening a dialog with them, I am always keen on
      </p>
      <p>
        If you or anyone you know has a cool project or gig in mind that you think I would be perfect for, 
        defenitely send me an <a href="mailto:matthew.jay.wong@gmail.com">email</a> or look me up on <ExternalLink url="https://www.linkedin.com/in/matthew-jay-wong/">LinkedIn</ExternalLink>. 
        My resume can also be found <ExternalLink url={`${process.env.PUBLIC_URL}/software_developer_resume.pdf`}>here</ExternalLink>!
      </p>
    </div>
  )
}
