import React from 'react'
import { Routes, Route } from 'react-router-dom'
import KKInvestLanding from './components/KKInvestLanding'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<KKInvestLanding/>} />
      <Route path="/realizacje" element={<ProjectsPage/>} />
      <Route path="/o-nas" element={<AboutPage/>} />
      <Route path="/kontakt" element={<ContactPage/>} />
    </Routes>
  )
}