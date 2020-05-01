import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='navbar navbar-expand-lg'>
      <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
        <li className='nav-item'>
          <Link
            to='/search'
            className={
              window.location.pathname === '/search'
                ? 'nav-link active'
                : 'nav-link'
            }
            className='nav-link'
            id='pills-profile-tab'
            data-toggle='pill'
            href='#pills-profile'
            role='tab'
            aria-controls='pills-profile'
            aria-selected='false'
          >
            <h5>Search</h5>
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/saved'
            className={
              window.location.pathname === '/saved'
                ? 'nav-link active'
                : 'nav-link'
            }
            className='nav-link'
            id='pills-contact-tab'
            data-toggle='pill'
            href='#pills-contact'
            role='tab'
            aria-controls='pills-contact'
            aria-selected='false'
          >
            <h5>Saved</h5>
          </Link>
        </li>
      </ul>
      <div className='tab-content' id='pills-tabContent'>
        <div
          className='tab-pane fade show active'
          id='pills-home'
          role='tabpanel'
          aria-labelledby='pills-home-tab'
        ></div>
        <div
          className='tab-pane fade'
          id='pills-profile'
          role='tabpanel'
          aria-labelledby='pills-profile-tab'
        ></div>
        <div
          className='tab-pane fade'
          id='pills-contact'
          role='tabpanel'
          aria-labelledby='pills-contact-tab'
        ></div>
      </div>
    </nav>
  );
}

export default Nav;
