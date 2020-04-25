import React from 'react';

export default function ExternalLink({ url, children }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  )
}
