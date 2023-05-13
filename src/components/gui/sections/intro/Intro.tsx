import React from 'react'
import classes from './classes.module.scss'

const Intro: React.FC = () => {
  return (
        <>
            <div className={classes.videoWrapper}>
                <div className={classes.videoWrapper__overlay}>
                    <h1>Amazon Deforestation Visualizer</h1>
                </div>
                <video
                    className={classes['videoWrapper--video']}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/rainforest.mp4" type="video/mp4" />
                    <source src="/videos/rainforest.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <h2>Experience the Impact of Amazon Rainforest Deforestation in Real-Time with our WebGL-Powered Web Application</h2>
        </>
  )
}

export default Intro
