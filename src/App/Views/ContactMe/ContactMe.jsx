import React from 'react';

import './ContactMe.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import ExternalLink from '../../Common/ExternalLink';

export default function ContactMe() {
  return (
    <div
      className="contact-me"  
      id="contact-me"
    >
      <h2>Contact Me</h2>

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
  );
}
