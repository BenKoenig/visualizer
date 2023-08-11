import React, { useEffect, useState } from 'react'
import classes from './classes.module.scss'
import { type stageType } from '../../utils/types'
import CalculateTimeRemaining from '../CalculateTimeRemaining'

const LoadingBar: React.FC = () => {
  const stages: stageType[] = [{ name: 'stage1' }]

  const daysPassed = 30 - CalculateTimeRemaining()
  const initialProgress = (daysPassed / 30) * 100

  const [currentStage, setCurrentStage] = useState(0)
  const [progress, setProgress] = useState(initialProgress)

  useEffect(() => {
    const timer = setInterval(() => {
      // Increment progress by 1/30 of the total bar daily
      setProgress(prev => prev + (100 / 30))
    }, 1000 * 60 * 60 * 24) // Update once every day

    // Cleanup on component unmount
    return () => { clearInterval(timer) }
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      setCurrentStage(prev => prev >= stages.length - 1 ? 0 : prev + 1)
      setProgress(0)
    }
  }, [progress, stages.length])

  return (
    <div className={classes.container}>
      <p>Just <strong>{CalculateTimeRemaining()} days</strong> until deforestation</p>
      {stages.map((stage, i) => (
        <div key={i} className={classes.container__stage}>
          <div className={classes.fill} style={{ width: `${i < currentStage ? '100%' : i === currentStage ? `${progress}%` : '0%'}` }} />
        </div>
      ))}
    </div>
  )
}

export default LoadingBar
