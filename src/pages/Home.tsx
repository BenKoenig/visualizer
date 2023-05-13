import React from 'react'
import CanvasWrapper from '../components/canvas/CanvasWrapper'
import Gui from '../components/gui/Gui'
import Hud from '../components/hud/Hud'

const Home: React.FC = () => {
  return (
        <>
            <Hud/>
            <Gui/>
            <CanvasWrapper/>
        </>
  )
}

export default Home
