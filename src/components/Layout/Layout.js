import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Layout.css';

export default function Layout({ pages, linkClassName }) {
  const home = <li className={linkClassName}><Link to="/">Home</Link></li>;

  let linkComponents = pages.map(link => {
    link = link.toLowerCase();
    return <li className={linkClassName}><Link to={'/' + link}>{link.replace(link[0], link[0].toUpperCase())}</Link></li>
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
