import React from 'react';
import './FooterTab.scss';
import upperCaseAll from '../../../../../assets/scripts/view-utils/uppercase-all';
import KeyList from '../../../../../assets/scripts/view-utils/key-list';

export default function FooterTab({ header, options}) {
  const keys = new KeyList();
  const footerOptions = options.map(option => {
    return <li key={keys.generateKey(option)} className='ps-1'>{upperCaseAll(option)}</li>
  });
  
  return (
    <div className='footer-tab d-flex flex-column'>
      <h4 className='text-info'>{header}</h4>
      <ul className='d-inline-flex flex-column justify-content-between gap-1'>
        {footerOptions}
      </ul>
    </div>  
  );
}