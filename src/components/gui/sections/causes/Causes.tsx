import React from 'react'
import classes from './classes.module.scss'
import { type causeType } from '../../../../utils/types'

interface Props {
  causes: causeType[]
}
const Causes: React.FC<Props> = ({ causes }: Props) => {
  return (
        <div className={classes.stats}>
            <h2 className={classes['stats--headline']}>Four main causes of Deforestation</h2>
            <ul className={classes.stats__list}>
                {causes.map((causeItem, i) => (
                    <li key={i} className={classes.stats__list__item}>
                      <span className={classes['stats__list__item--listDecimal']}>{i + 1}</span>
                        {causeItem.desc}
                    </li>
                ))}
            </ul>
        </div>
  )
}
export default Causes
