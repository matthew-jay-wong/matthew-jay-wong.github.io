import React from 'react';

import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import ExternalLink from '../Common/ExternalLink';

export default function Footer() {
  return (
    <div className="footer">
      <div className="quote">
        <ExternalLink url="https://youtu.be/Ls_8cFgBUj4?t=30">
          <h4>
            "You gotta keep on livin'... L-I-V-I-N"
          </h4>
        </ExternalLink>
        <h6>- Wooderson | Dazed and Confused (1993)</h6>
      </div>
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
