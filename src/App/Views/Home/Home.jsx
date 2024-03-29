import React from 'react';

import './Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import ExternalLink from '../../Common/ExternalLink';

export default function Home() {
  return (
    <div 
      className="home"
      id="home"
    >
      <p>
        Hey! My name is Matt. I currently work as a full-stack developer at <ExternalLink url="https://www.linkedin.com/company/bookjane">BookJane</ExternalLink>. 
        I like finding scalable and maintainable solutions for any problem space so if you have any good work, let's make something happen! 
        You can read more about me and what I have to offer <a href="#about">here</a>. 
        My resume can also be found <ExternalLink url={`${process.env.PUBLIC_URL}/software_developer_resume.pdf`}>here</ExternalLink>. 
        {/* Lastly, if you are looking for my blog, you can find it here. */}
      </p>

      <div className="icon-links">
        <a href="mailto:matthew.jay.wong@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <ExternalLink url="https://github.com/matthew-jay-wong">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </ExternalLink>
        <ExternalLink url="https://www.linkedin.com/in/matthew-jay-wong/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </ExternalLink>
      </div>
    </div>
  )
}
