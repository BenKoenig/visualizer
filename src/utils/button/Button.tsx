import React, { useState } from 'react'
import classes from './classes.module.scss'
import { type buttonType } from '@/utils/types'

interface Props {
  button: buttonType
}
const Button: React.FC<Props> = ({ button }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = (): void => {
    setIsHovered(true)
  }

  const handleMouseLeave = (): void => {
    setIsHovered(false)
  }
  return (
    <>
      <div
        className={`${classes.wrapper} ${(isHovered) ? classes.hovered : ''}`}

      >
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          type="button"
          className={classes.wrapper__button}
          onClick={button.onClick}
        >
          {button.text}
        </button>
      </div>
    </>
  )
}

export default Button
