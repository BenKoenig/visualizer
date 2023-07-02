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
            <h2>Experience the Impact of Rainforest Deforestation in Real-Time with our WebGL-Powered Web Application</h2>
        </>
  )
}

export default Intro
