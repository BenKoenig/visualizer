import React, { useState, useEffect } from 'react'
import classes from './classes.module.scss'
import { type statsType } from '../../../../utils/types'

interface Props {
  stats: statsType[]
}

const Stats: React.FC<Props> = ({ stats }: Props) => {
  const [liveStats, setLiveStats] = useState(stats)

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(liveStats.map(stat => ({
        ...stat,
        value: stat.value + Math.floor(Math.random() * 10) // Random increase up to 10
      })))
    }, 10000) // Update every second

    return () => { clearInterval(interval) } // Clean up on component unmount
  }, [liveStats])

  return (
        <div className={classes.stats}>
            <h2 className={classes['stats--headline']}>Statistics</h2>
            <ul className={classes.stats__list}>
                {liveStats.map((statsItem, i) => (
                    <li key={i} className={classes.stats__list__item}>
                        <span className={classes.stats__list__item__value}>
                            {statsItem.value.toLocaleString('en-US')} {statsItem.unit}
                        </span>
                        {statsItem.desc}
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default Stats
