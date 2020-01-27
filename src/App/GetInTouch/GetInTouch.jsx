import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithubAlt,
  faGoodreadsG,
  faTwitter,
  faTrello,
  faLinux,
  faRedditAlien,
  faWikipediaW,
  faYoutube,
  faDribbble,
  faAtlassian,
  faUntappd,
  faTradeFederation,
  faSith,
  faEmpire,
  faJediOrder,
  faSpotify,
  faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import './GetInTouch.css';
import '../App.css';

const ICONS = [
  {
    icon: faLinux,
    toolTip: 'Distro of Choice',
    href: 'https://www.debian.org/',
  },
  {
    icon: faRedditAlien,
    toolTip: 'Saddest Subreddit of All Time',
    href: 'https://www.reddit.com/r/UofT/'
  },
  {
    icon: faWikipediaW,
    toolTip: 'Add favorite wikipedia page here',
    href: '#GetInTouch',
  },
  {
    icon: faYoutube,
    toolTip: 'Favorite YouTube Channel',
    href: 'https://www.youtube.com/channel/UCrTNhL_yO3tPTdQ5XgmmWjA'
  },
  {
    icon: faDribbble,
    toolTip: 'Dribbble is like Instagram but for graphic designers!',
    href: 'https://dribbble.com/'
  },
  {
    icon: faAtlassian,
    toolTip: 'Shameless plug for this Sydney based company',
    href: 'https://www.wwf.org.au/get-involved/bushfire-emergency'
  },
  {
    icon: faUntappd,
    toolTip: 'Have not used it myself but looks fun enough to try (btw I drink beer)',
    href: 'https://untappd.com/'
  },
  {
    icon: faSoundcloud,
    toolTip: 'Add Soundcloud link here',
    href: '#GetInTouch'
  },
  {
    icon: faSpotify,
    toolTip: 'Spotify Paylist Here',
    href: '#GetInTouch',
  },
];

const STARWARS_ICONS = [
  faTradeFederation,
  faSith,
  faEmpire,
  faJediOrder,
]

const CONTACT_ICONS = [
  {
    icon: faLinkedinIn,
    toolTip: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matthew-jay-wong/'
  },
  {
    icon: faEnvelope,
    toolTip: 'Email',
    href: 'mailto:matthew.jay.wong@gmail.com'
  }
];

const SOCIAL_SPACES = [
  faGithubAlt,
  faTwitter,
  faGoodreadsG,
  faTrello,
];

export default function GetInTouch() {
  return (
    <div className="PageItem">
      <h1>Get In Touch</h1>
      <h2>My pager is ready **</h2>
      <p>I can be contacted quite easily through the following ways:</p>
      <div className="IconRow">
        {CONTACT_ICONS.map((icon) => (
          <a
            target="_blank"
            href={icon.href}
          >
            <FontAwesomeIcon
              className="GetInTouchIcon"
              size="2x"
              icon={icon.icon}
              title={icon.toolTip}
            />
          </a>
        ))}
      </div>
      <p>I am also active on the following forums and spaces:</p>
      <div className="IconRow">
        {SOCIAL_SPACES.map((icon) => (
          <FontAwesomeIcon className="GetInTouchIcon" icon={icon} />
        ))}
      </div>
      <p>The rest are fun links I thought I share with like minded folks:</p>
      <div className="IconRow">
        {ICONS.map((icon) => (
          <a
            target="_blank"
            href={icon.href}
          >
            <FontAwesomeIcon
              className="GetInTouchIcon"
              size="2x"
              icon={icon.icon}
              title={icon.toolTip}
            />
          </a>
        ))}
      </div>
      <p>DO YOU REMEMBER STARWARS ???</p>
      <div className="IconRow">
        {STARWARS_ICONS.map((icon) => (
          <FontAwesomeIcon className="GetInTouchIcon" icon={icon} />
        ))}
      </div>
      <h5>** Just kidding, lmao who still carries a pager?</h5>
    </div>
  );
}
