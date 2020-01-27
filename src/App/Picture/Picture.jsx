import React from 'react';

import '../App.css';
import './Picture.css';

const IMAGE_CATEGORIES = [
  'galaxy',
  'arctic',
  'cyberpunk',
  'winter',

];

export default function Picture() {
  const randomCategory = IMAGE_CATEGORIES[Math.floor(Math.random() * Math.floor(IMAGE_CATEGORIES.length))];
  const backgroundImage = {
    backgroundImage: `url("https://source.unsplash.com/1600x900/?${randomCategory},purple)`,
  };

  return <div className="PageItem Picture" style={backgroundImage} />;
}
