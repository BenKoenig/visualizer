import React from 'react'
import CanvasWrapper from '../components/canvas/CanvasWrapper'
import Gui from '../components/gui/Gui'
import Hud from '../components/hud/Hud'
/* import Loading from '../components/loading/Loading' */

const Home: React.FC = () => {
  return (
        <>
     {/*        <Loading/> */}
            <Hud/>
            <Gui/>
            <CanvasWrapper/>
        </>
  )
}

export default Home
