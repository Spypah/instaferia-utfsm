import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import AboutPage from '../pages/about'
import ActualProjectsPage from '../pages/actual_projects'
import OldProjectsPage from '../pages/old_projects'
import Project from '../pages/project'
import Exposition from '../pages/exposition'
import EditProject from '../pages/edit_project'
import EditedProject from '../pages/edited_project'


const AppRouter = () => {
  const projects = [
    {"title" : "Alimentando Barbies mediante IA", "description" : "Grupo Barbiefascistas", "img" : "https://www.ceupe.com.ve/images/easyblog_articles/230/ges_proyec.png"},
  ]
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/actual_projects' element={<ActualProjectsPage />} />
        <Route path='/actual_projects/:id' element={<ActualProjectsPage />} />
        <Route path='/old_projects' element={<OldProjectsPage />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project/:title' element={<Project />} />
        <Route path='/project/exposition' element={<Exposition />} />
        <Route path='/project/edit' element={<EditProject />} />
        <Route path='/project/edited' element={<EditedProject />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
