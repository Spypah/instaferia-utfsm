import React from 'react'

import NavBar from '../components/nav_bar'
import Filter from '../components/filter'

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <h2>Página de Inicio</h2>
      <Filter />
    </div>
  )
}

export default HomePage
