import React from 'react'
import { Button, Grid, Container, TextField } from '@mui/material'
import {useState} from 'react';


import './project.css';
import './exposition.css';

import NavBar from '../components/nav_bar'
import Comment from '../components/comment'

import '../components/projectCard'
import image from '../assets/barbie.png'


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

        appendComentario(image, msg);

        document.getElementById('comment-box').value = '';
      };



  return (

    <div className='page'>
      <NavBar />

        <Grid container spacing={2}>
            <Grid item xs={10}>
                <h1> Exposición "[Nombre Grupo?]" </h1>  
            </Grid>
            <Grid item xs={2}>
                <Button variant="outlined" href="/project" >Outlined</Button>
            </Grid>
        </Grid>

        <Container className="video-exposition" maxWidth="100%">
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <img
                        alt="expo"
                        src={image}
                        width="100%"
                        className="d-inline-block align-top"
                    />{' '}
                </Grid>
                <Grid item container direction="column" xs={3}>
                    <Grid item >

                        <Grid id="comentarios" container direction="column" xs={12}>
                        
                            <Comment img={image} msg="Wena los cabros" />
                            <Comment img={image} msg="Y vo qn eri" />
                            <Comment img={image} msg="🤡🤠🤡🤠" />
                            <Comment img={image} msg="🤡🤠🤡🤠" />
                            <Comment img={image} msg="учитель, дай 100" />
                            <Comment img={image} msg="aaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaaaaaaaaaaaa" />

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
