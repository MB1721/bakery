import React from 'react';
import './FooterTab.scss';
import upperCaseAll from '../../../../../assets/scripts/view-utils/uppercase-all';

export default function FooterTab({ header, options}) {
  const footerOptions = options.map(option => <li className='ps-1'>{upperCaseAll(option)}</li>);
  
  return (
    <div className='footer-tab d-flex flex-column'>
      <h4 className='text-info'>{header}</h4>
      <ul className='d-inline-flex flex-column justify-content-between gap-1'>
        {footerOptions}
      </ul>
    </div>  
  );
}