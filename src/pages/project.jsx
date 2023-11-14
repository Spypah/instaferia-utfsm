import React from 'react'
import '../stylesheets/page/project.css';

import NavBar from '../components/nav_bar'

import '../components/projectCard'
import image from '../assets/barbie.png'
import live from '../assets/live.gif'
import grupo from '../assets/grupo.png'
import { Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Wave from '../components/wave';

import { Row, Container, Col} from "react-bootstrap";

export const Project = ({title, description, img}) => {
  return (
    <div className='page'>
      <Wave />
      <NavBar />
      <Container style={{}}>
        <Row md={3} xs={1}>
          <Col align='left' style={{marginTop: '1.5rem'}}>
            <Container>
              <Row>
                  <div className="d-flex justify-content-center">
                    <img
                        alt="logo"
                        src={image}
                        style={{maxWidth: '15rem'}}
                        className="d-inline-block align-top"
                    />{' '}

                  </div>
              </Row>
            </Container>
          </Col>
          <Col align='center' style={{marginTop: '1.5rem' }}>
            <div>
              <h1 className='estetico-h1' style={{ textAlign: 'center'}}>
                Alimentando IA con barbies
              </h1>
            </div>
          </Col>
          <Col align='center' style={{marginTop: '1.5rem'}}>
            <Row>
            <div className="d-flex justify-content-center">
              <a href="/project/exposition">
                <img
                      alt="logo"
                      src={live}
                      width="170rem"
                      className="live"
                />{' '}
              </a>
            </div>
            </Row>
          </Col>
        </Row>
        <Row md={2} xs={1}>
          <Col align='center'>
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <img
                alt="grupo"
                src={grupo}
                width="800rem"
                className='imagen-group'
              />
            </div>
          </Col>
          <Col align='center'>
            <Row>
              <Row>
                <div className='column centrado'>
                  <h2>
                    ¿Qué es Alimentando Barbies mediante IA?
                  </h2>
                </div>
              </Row>
            </Row>
            <Row>
              <div className='column centrado'>
                <div className='centrado'>
                    <p class="text-justify">El proyecto "Alimentación Inteligente para Barbies" busca revolucionar la experiencia de juego con las muñecas Barbie mediante la implementación de inteligencia artificial (IA) para simular un proceso de alimentación realista. La idea es proporcionar a los usuarios una interacción más inmersiva y educativa con sus muñecas, llevando la jugabilidad a un nuevo nivel.</p>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col align='center'>
            <div className='video-container'>
              <div className='centrado'>
                <iframe 
                className='video'
                width="400" 
                height="250" 
                src="https://www.youtube.com/embed/rrB13utjYV4" 
                title="Chilean Lobster Jumpscare" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                </iframe>
              </div>
            </div>
          </Col>
        </Row>
        <Row align='center' style={{margin: '1.5rem'}}>
          <Col align='center'>
            <div>
              <Button
                      className="object-fit-contain"
                      href={"/project/edit"}
                      >
                      Editar proyecto
              </Button>
            </div>

          </Col>
        </Row>
      </Container>
      <Outlet />
    </div>
  );
}

export default Project
