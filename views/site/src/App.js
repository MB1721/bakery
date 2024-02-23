import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import camelCaseContext from './assets/scripts/camel-case-context';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Terms from './pages/Terms';

export default function App() {
  let pages = [];
  const pagesDir = require.context('./pages', true, /\.(js|ts|tsx|jsx)$/); // capture javascript files
  pagesDir.keys().forEach(key => {
    const { casedFileName } = camelCaseContext(key, ['js', 'ts', 'tsx', 'jsx']);
    pages.push(casedFileName.toLowerCase());
  });
  pages.splice(pages.indexOf('error404'), 1); // remove error404 from the pages array

  const appRoute = "/site/";

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path={appRoute}
          element={<Layout pages={pages} linkClassName="pageLink" appRoute={appRoute}/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}