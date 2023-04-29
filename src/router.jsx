import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";

function router() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default router
