import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import Terms from './pages/Terms';

export default function App() {
  const pages = ['about', 'contact', 'terms'];
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout pages={pages} linkClassName="pageLink"/>}>
          <Route index element={<Home />} />
          {/* {routes} */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

{/* <div id="app">
        <HomeComponent/>
      </div> */}