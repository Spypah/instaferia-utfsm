import React from 'react';

import NavBar from '../components/nav_bar';
import Filter from '../components/filter';
import Wave from '../components/wave';

import '../stylesheets/images/fesw.css';

import feswlogo from '../assets/fesw-logo.png';

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <Wave />
      <div>
        <img src={feswlogo} alt="fesw" 
        className="imagen"
        />
      </div>
      <Filter />
    </div>
  )
}

export default HomePage
