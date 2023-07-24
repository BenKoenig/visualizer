import React from 'react'
import CanvasWrapper from '../components/canvas/CanvasWrapper'
import Gui from '../components/gui/Gui'
import LoadingBar from '../components/loadingBar/LoadingBar'
/* import LoadingScreen from '../components/loadingScreen/LoadingScreen' */

const Home: React.FC = () => {
  return (
        <>
     {/*        <LoadingScreen/> */}
            <LoadingBar/>
            <Gui/>
            <CanvasWrapper/>
        </>
  )
}

export default Home
