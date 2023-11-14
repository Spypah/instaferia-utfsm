import React from 'react';

import NavBar from '../components/nav_bar';
import Filter from '../components/filter';
import Wave from '../components/wave';

import '../stylesheets/images/fesw.css';

import feswlogo from '../assets/fesw-logo.png';
import { Container, Row, Col } from 'react-bootstrap';

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
      <Container>
        <Row align='center'>
          <div>
            <p>
              Ingrese el nombre de un proyecto:
            </p>
          </div>
        </Row>
        <Row>
          <Filter />
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
