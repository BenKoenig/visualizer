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
          <p>If Vienna, known for its urban and cultural landscape, were a rainforest, it would be completely deforested in just 30 days, demonstrating the alarming rate at which deforestation occurs in actual rainforests.</p>
          <p><i>Loading content...</i></p>
        </div>
      </div>
    </>
  )
}
export default LoadingScreen
