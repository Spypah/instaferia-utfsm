import React from 'react'
import { Button, Grid, Container, TextField } from '@mui/material'
import {useState} from 'react';


import '../stylesheets/page/exposition.css';

import NavBar from '../components/nav_bar'
import Comment from '../components/comment'
import Wave from '../components/wave';

import '../components/projectCard'
import image from '../assets/barbie.png'
import expo from '../assets/expo.png'
import user from '../assets/user.png'


export const Exposition = () => {
    const [listaComentarios, setListaComentarios] =  useState([]);



    const appendComentario = (img, msg) => {
        const newData = {img: img, msg: msg}
        console.log(listaComentarios)
        const newlista = listaComentarios.concat(newData)
        setListaComentarios(newlista)
        console.log(listaComentarios)
    }


    const handleEnter = () => {

        const msg = document.getElementById('comment-box').value

        appendComentario(user, msg);

        document.getElementById('comment-box').value = '';
      };



  return (

    <div className='page'>
        <Wave />
      <NavBar />

        <Grid container spacing={2}>
            <Grid item xs={10} >
                <h1> Exposición Grupo Barbies  </h1>  
            </Grid>
            <Grid item xs={2} style={{marginTop: '2rem' }}>
                <Button variant="outlined" href="/project" variant="contained">Volver a Proyecto</Button>
            </Grid>
        </Grid>

        <Container className="video-exposition" maxWidth="100%"  >
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <img
                        alt="expo"
                        src={expo}
                        width="100%"
                        className="d-inline-block align-top"
                    />{' '}
                </Grid>
                <Grid item container direction="column" xs={3}>
                    <Grid item >

                        <Grid id="comentarios" container direction="column" xs={12}>
                        
                            <Comment img={user} msg="Se escucha bien" />
                            <Comment img={user} msg="Buenos días" />
                            <Comment img={user} msg="🤠🤠" />

                            {listaComentarios.map(data => {
                                console.log(data)
                                return (
                                    <Comment key={data.msg} img={data.img} msg={data.msg}/>
                                )
                            })}

                        </Grid>

                    </Grid>
                    <Grid item container alignItems="center">
                        <Grid item xs={2}> 
                        </Grid>
                        <Grid item xs={9}>
                            <TextField fullWidth 
                                id="comment-box"
                                label="Escribe un Comentario"
                                multiline

                                onKeyDown={(ev) => {
                                    if (ev.key === 'Enter') {
                                      handleEnter();
                                    }
                                  }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>


    </div>
  
  );
}

export default Exposition
