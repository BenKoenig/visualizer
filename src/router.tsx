import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const router: React.FC = () => {
  return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
  )
}

export default router
