import React from 'react'
import classes from './classes.module.scss'

const Intro: React.FC = () => {
  return (
        <>
            <div className={classes.videoWrapper}>
                <div className={classes.videoWrapper__overlay}>
                    <h1>Rainforest Deforestation Visualizer</h1>
                </div>
                <img className={classes['videoWrapper--video']} src="/img/rainforest.jpg" alt="Rainforest" />
            </div>
            <h2>Experience the Impact of Rainforest Deforestation in Real-Time with our WebGL-Powered Web Application.</h2>
            <p>The visualisation shows how long it would take to completely deforest an area the size of Vienna. Within an alarming period of 30 days, the progress bar at the top of the screen shows the extent of the destruction of our forests in such a region. The timer resets at the end of each month.</p>
        </>
  )
}

export default Intro
