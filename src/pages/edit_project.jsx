import React from 'react';
import '../stylesheets/page/edit_project.css';

import NavBar from '../components/nav_bar';

import '../components/projectCard';
import image from '../assets/barbie.png';
import live from '../assets/live.gif';
import grupo from '../assets/grupo.png';
import { Outlet } from 'react-router-dom';
import Wave from '../components/wave';

import {useState} from 'react';
import {TextField} from '@mui/material';
import {styled, Button } from '@mui/joy';
import { Row, Container, Col} from "react-bootstrap";
import { TextareaAutosize } from '@mui/base';

import {Button as ButtonMat} from '@mui/material';


import '../stylesheets/components/button.css'


const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;


export const EditProject = () => {

    const [logo, setLogo] =  useState(image);
    const [imgGrupo, setImgGrupo] =  useState(grupo);
    const [textLink, setTextLink] =  useState('https://youtu.be/rrB13utjYV4');
    const [link, setLink] =  useState('https://www.youtube.com/embed/rrB13utjYV4');

    const ActualizarLogo = () => {
        setLogo(URL.createObjectURL(document.getElementById('logo_upload').files[0]))
    }

    const ActualizarImgGrupo = () => {
        setImgGrupo(URL.createObjectURL(document.getElementById('img_grupo_upload').files[0]))
    }

    const ActualizarEmbed = () => {
        const array = document.getElementById('link_text').value.split("/")
        setLink("https://www.youtube.com/embed/" + array[array.length - 1])
        console.log("https://www.youtube.com/embed/" + array[array.length - 1])
    }

  return (
    <div className='page'>
      <NavBar />
      <Wave />
      <Container style={{}}>
        <Row md={3} xs={1}>
          <Col align='left'>
            <Container>
              <Row>
                <Col align='center'>
                  <img
                      alt="logo"
                      src={logo}
                      style={{maxWidth: '15rem'}}
                      className="d-inline-block align-top"
                  />{' '}
                </Col>
              </Row>
              <Row>
                <Col align='center'>
                  <Button 
                    className="object-fit-contain"
                    role={undefined} 
                    component="label"
                    >
                    Subir Imagen
                    <VisuallyHiddenInput id="logo_upload" type="file" onChange={ActualizarLogo} />
                  </Button>
                </Col>
              </Row >
            </Container>
          </Col>
          <Col align='center'>
            <Container>
              <Row className='justify-content-md-center'>
                <Col align='center'>
                  <h1>Inserte título</h1>
                  <TextareaAutosize id="estetico-edit-h1" label="" className="estetico-edit-h1" defaultValue="Alimentando IA con barbies"/>
                </Col>
              </Row>
              <Row className='justify-content-md-center'>
                <Col align='center'>
                  <h2>Grupo Barbie</h2>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row md={2} className='justify-content-md-center' >
          <Col align='center'>
            <Container>
              <Row className='m-3'>
                <Col align='center'>
                  <img
                    alt="grupo"
                    src={imgGrupo}
                    width="800rem"
                    className='imagen-group'
                  />
                </Col>
              </Row>
              <Row>
                <Col align='center'>
                  <Button
                      className="my-btn"
                      role={undefined} 
                      component="label"
                      >
                      Subir Imagen del proyecto
                      <VisuallyHiddenInput id="img_grupo_upload" type="file" onChange={ActualizarImgGrupo} />
                    </Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col align='center'>
            <Container>
              <Row className='justify-content-md-center'>
                <Col align='center'>
                  <h1>Inserte descripción</h1>
                </Col>
              </Row>
              <Row className='justify-content-md-center' style={{boxSizing: 'border-box', width:'100%', height:'10rem'}}>
                <Col align='center'>
                  <TextareaAutosize style={{boxSizing: 'border-box', width:'100%', height:'100%'}} maxRows={4} label="" defaultValue="El proyecto 'Alimentación Inteligente para Barbies' busca revolucionar la experiencia de juego con las muñecas Barbie mediante la implementación de inteligencia artificial (IA) para simular un proceso de alimentación realista. La idea es proporcionar a los usuarios una interacción más inmersiva y educativa con sus muñecas, llevando la jugabilidad a un nuevo nivel."/>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className='justify-content-md-center' md={3}>
          <Col>
            <Container>
              <Row className='md-3'>
                <Col align='center'>
                  <iframe 
                  className='video'
                  width="400" 
                  height="250" 
                  src={link} 
                  title=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                  </iframe>
                </Col>
              </Row>
              <Row className='md-3'>
                <Col align='center'>
                  <label htmlFor="Inserte link:">Inserte link:</label>
                </Col>
              </Row>
              <Row className='md-3'>
                  <TextareaAutosize id="link_text" defaultValue={textLink} onChange={ActualizarEmbed}></TextareaAutosize>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className='justify-content-md-center' md={3}>
          <Container>
              <Row className='justify-content-md-center' md={2} style={{marginTop: '1.5rem', marginBottom: '1.5rem'}}>
                <Col align='center'>
                  <ButtonMat   variant="contained" color="error" href={"/project/"}>Descartar Cambios</ButtonMat>
                </Col>
                <Col align='center'>
                  <ButtonMat  variant="contained" color="success" href={"/project/edited"}>Confirmar Cambios</ButtonMat >
                </Col>
              </Row>
          </Container>
        </Row>
      </Container>

      <Outlet />
    </div>
  );
}

export default EditProject
