import React from 'react';
import './Footer.scss';
import FooterTab from './FooterTab';
import logo from '../../../../../assets/images/logo/bakery-logo.svg';

export default function Footer() {
  return (
    <footer className='footer d-flex flex-column justify-content-between px-5 pt-5 pb-2'>
      <div className='footer-main container-fluid'>
        <div className='row'>
          <div className='footer-logo d-inline-flex align-items-start col-2 gap-3'>
            <img src={logo} className='h-50 d-inline-block' />
            <h1 className='d-inline-block mt-4'>M&M Bakery</h1>
          </div>
          <div className='col-1'></div>
          <div className='footer-tabs gap-4 d-inline-flex justify-content-evenly col'>
            <FooterTab 
              header='More Services' 
              options={[
                'catering options',
                'delivery help',
                'refunds'
              ]} 
            />
            <div className='vr'></div>
            <FooterTab 
              header='Contact' 
              options={[
                '534 Pretzel Street\nButterville, GA 39201',
                '(213)-444-8559',
                'admin@m&mbakery.com'
              ]} 
            />
            <div className='vr'></div>
            <FooterTab 
              header='Language' 
              options={[
                'english',
                'português (brasil)',
                'español'
              ]} 
            />
          </div>
        </div>
      </div>
      <div className='footer-sub d-flex justify-content-between align-items-end'>
        <p className='copyright'>© 2024 M&M Bakery. All Rights Reserved</p>
        <a className='terms link-opacity-75 link-underline-info' href='#'>Terms of Use</a>
      </div>
    </footer>
  );
}