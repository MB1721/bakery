import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import KeyList from '../../assets/scripts/key-list';

export default function Layout({ pages, linkClassName }) {
  let keyList = new KeyList();
  
  const home = <li className={linkClassName} key={keyList.generateKey('home')}><Link to="/">Home</Link></li>;
  let linkComponents = pages.map(page => {
    page = page.toLowerCase();
    return (
      <li className={linkClassName} key={keyList.generateKey(page)}>
        <Link to={'/' + page}>{page.replace(page[0], page[0].toUpperCase())}</Link>
      </li>
    );
  });
  linkComponents.unshift(home);
  
  return (
    <>
      <nav id="nav-bar">
        <ul id="pages">
          {linkComponents}
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
