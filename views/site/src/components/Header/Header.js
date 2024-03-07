import React from 'react';
import 'bootstrap';
import './Header.css';
import brand from '../../../../../assets/images/logo/bakery-logo.svg';
import KeyList from '../../../../../assets/scripts/view-utils/key-list';
import { Link } from 'react-router-dom';

export default function Header({ pages }) {
  const keyList = new KeyList();

  let pageCount = 0;
  const linkComponents = pages.map(page => {
    return (
      <Link key={keyList.generateKey(page)} to={page} className="nav-link" >
        {page.replace(page[0], page[0].toUpperCase())}
      </Link>
    );
  });

  return (
    <header className="navbar navbar-expand-md bg-primary ">
      <div className="container-fluid mx-2">
        <Link className="navbar-brand d-inline-block" to="/" >
          <img src={brand} height={70} alt="bakery" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#pages" aria-controls="pages" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="pages">
          <nav className="navbar-nav">
            {linkComponents}
          </nav>
        </div>
      </div>
    </header>
  );
}