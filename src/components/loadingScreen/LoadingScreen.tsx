import React from 'react'
import classes from './classes.module.scss'

const LoadingScreen: React.FC = () => {
  return (
    <>
      <div className={classes.container}>
        <div>
          {/* spinner */}
          <div className={classes['lds-ripple']}>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={classes.container__infoWrapper}>
          <p>If Vienna were a rainforest, it would only take 30 days for it to be completely deforested.</p>
          <p><i>Loading content...</i></p>
        </div>
      </div>
    </>
  )
}
export default LoadingScreen
