import React from 'react';
import { Outlet} from "react-router-dom";
import './Layout.css';
import Header from '../Header/Header';

export default function Layout({ pages }) {
  
  return (
    <>
      <Header pages={pages} />

      <Outlet />
    </>
  );
}
