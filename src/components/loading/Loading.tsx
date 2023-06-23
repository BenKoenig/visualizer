import React from 'react'
import classes from './classes.module.scss'

const Loading: React.FC = () => {
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

      </div>
    </>
  )
}
export default Loading
