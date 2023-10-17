import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import AboutPage from '../pages/about'
import ActualProjectsPage from '../pages/actual_projects'
import OldProjectsPage from '../pages/old_projects'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/actual_projects' element={<ActualProjectsPage />} />
        <Route path='/actual_projects/:id' element={<ActualProjectsPage />} />
        <Route path='/old_projects' element={<OldProjectsPage />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
