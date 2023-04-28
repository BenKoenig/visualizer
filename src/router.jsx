import './App.css'
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";

function router() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </>
  )
}

export default router
