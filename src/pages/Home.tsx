import React from 'react'
import CanvasWrapper from '../components/canvas/CanvasWrapper'
import Gui from '../components/gui/Gui'
import LoadingBar from '../components/loadingBar/LoadingBar'
/* import Loading from '../components/loading/Loading' */

const Home: React.FC = () => {
  return (
        <>
     {/*        <Loading/> */}
            <LoadingBar/>
            <Gui/>
            <CanvasWrapper/>
        </>
  )
}

export default Home
