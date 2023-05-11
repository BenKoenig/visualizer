import classes from './classes.module.scss'
import React, { useEffect, useState } from 'react';

const Hud: React.FC = () => {
  const stages = {
    data: [
      {
        name: "stage1"
      },
      {
        name: "stage2"
      },
      {
        name: "stage3"
      },
    ]
  }

  const [currentStage, setCurrentStage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress >= 100 ? 0 : prevProgress + (100/(15*10)));
      if (progress >= 100) {
        setCurrentStage((prevStage) => prevStage >= stages.data.length - 1 ? 0 : prevStage + 1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [progress, stages.data.length]);

  return (
    <div className={classes.container}>
      {stages.data.map((stage, i) => (
        <div
          key={i}
          className={classes.container__stage}
        >
          <div
            className={classes.fill}
            style={{width: `${i < currentStage ? '100%' : i === currentStage ? `${progress}%` : '0%'}`}}
          />
        </div>
      ))}
    </div>
  );
}

export default Hud;
