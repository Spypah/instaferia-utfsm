import React from 'react'
import '../stylesheets/page/project.css';

import NavBar from '../components/nav_bar'

import '../components/projectCard'
import image from '../assets/barbie.png'
import live from '../assets/live.gif'
import grupo from '../assets/grupo.png'
import { Outlet } from 'react-router-dom'
import Wave from '../components/wave';

export const Project = ({title, description, img}) => {
  return (
    <div className='page'>
      <Wave />
      <NavBar />
      <div className="page-container">
        <div className="column">

          <img
              alt="logo"
              src={image}
              width="225rem"
              className="d-inline-block align-top"
          />{' '}

        </div>
        <div className="column">
          <div className='estetico-h1-container'>  
          <h1 className='estetico-h1' style={{ textAlign: 'center'}}>
            Alimentando Barbies mediante IA
          </h1>
          </div>
          <div className='titulo-container'>
          <p style={{ textAlign: 'center'}}>
            Grupo Barbies
          </p>
          </div>

        </div>
        <div className="column">
          <a href="/project/exposition">
            <img
                  alt="logo"
                  src={live}
                  width="170rem"
                  className="live"
            />{' '}
          </a>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <img
          alt="grupo"
          src={grupo}
          width="800rem"
          className='imagen-group'
        />
      </div>
      <div className='page-container'>
        <div className='column'>
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
        </div>
        <div className='column centrado'>
          <div className='centrado'>
            <div className='textbox-container'>
              <p>El proyecto "Alimentación Inteligente para Barbies" busca revolucionar la experiencia de juego con las muñecas Barbie mediante la implementación de inteligencia artificial (IA) para simular un proceso de alimentación realista. La idea es proporcionar a los usuarios una interacción más inmersiva y educativa con sus muñecas, llevando la jugabilidad a un nuevo nivel.</p>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Project
