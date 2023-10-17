import React from 'react'

import NavBar from '../components/nav_bar'
import ProjectThumbnail from '../components/project'

export const ActualProjectsPage = () => {
    const RenderList = () => {
        let content = []
        for (let index = 0; index < 3; index++) {
            content.push(<ProjectThumbnail 
                title='asd'
                description='holahola'
                img='https://www.ceupe.com.ve/images/easyblog_articles/230/ges_proyec.png'/>)
        }
        return (
            <div className='project-list'>
                {content}
            </div>
        );
    }

    return (
        <div className='page'>
        <h1 className='page__title'>Insta Feria</h1>
        <NavBar />
        <h2>Página de Proyectos</h2>
        <RenderList />
        </div>
    )
}

export default ActualProjectsPage
