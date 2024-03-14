import React from 'react';
import './GalleryPanel.scss';
import camelCaseContext from '../../../../../assets/scripts/view-utils/camel-case-context';

export default function GalleryPanel({ src, size, context}) {
  
  return (
    <figure className='gallery-panel col p-0 h-100' style={{width: `${size}%`}}>
      <img
        src={context(src)} 
        className='img-fluid h-100 w-100' 
        alt={camelCaseContext(src).fileStr} 
      />
      <figcaption>I am a caption. Worship me!</figcaption>
    </figure>
  );
}