import React from 'react'

import NavBar from '../components/nav_bar'
import Filter from '../components/filter'
import Wave from '../components/wave'

export const ActualProjectsPage = () => {

    return (
        <div className='page'>
        <NavBar />
        <Wave />
        <h2>Proyectos Feria del Software</h2>
        <Filter />
        </div>
    )
}

export default ActualProjectsPage
