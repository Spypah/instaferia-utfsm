import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'
import Wave from '../components/wave'

export const AboutPage = () => {
  return (
    <div className='page'>
      <NavBar />
      <Wave />
      <h2>Sobre el evento</h2>
      <img src={LogoUSM} height="100" alt='logo usm' /><br />
      <Button variant='contained'>Material UI Button</Button>
    </div>
  )
}

export default AboutPage
