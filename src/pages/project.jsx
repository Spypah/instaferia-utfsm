import React from 'react'
import './project.css';

import NavBar from '../components/nav_bar'

import '../components/projectCard'
import image from '../assets/barbie.png'
import live from '../assets/live.gif'
import grupo from '../assets/grupo.png'
import { Outlet } from 'react-router-dom'

export const Project = ({title, description, img}) => {
  return (
    <div className='page'>
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
            Grupo Barbiefascistas
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
          className='imagen-grupo'
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
              src="https://www.youtube.com/embed/NvpZdDRfBlQ" 
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
      <div class="custom-shape-divider-top-1697696674">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
      <Outlet />
    </div>
  );
}

export default Project
