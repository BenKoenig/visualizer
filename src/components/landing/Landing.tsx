import classes from './classes.module.scss'
import React from 'react'

const Landing: React.FC = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.container__wrapper}>
          <h1>Rainforest Visualizer</h1>
          <h2>This web application shows the devastating effects of deforestation on rainforests in a visually compelling way.</h2>
          <form>
            <label htmlFor="signup">Get notified when we go live!</label>
            <input id="signup" name="signup" type="text" placeholder="E-Mail" />
            <button
                type="button"
                className={classes.button}
              >
                Submit
              </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Landing
