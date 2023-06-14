import React from 'react'
import classes from './classes.module.scss'
import { type factType } from '../../../../utils/types'
interface Props {
  facts: factType[]
}
const Facts: React.FC<Props> = ({ facts }: Props) => {
  return (
    <div>
      <h2 className={classes.headline}>Facts</h2>
      <ol className={classes.list}>
        {/* map of all the facts in an ordered list */}
        {facts.map((item, index) => (
          <li key={index} className={classes.list__item}>
            <span className={classes['list__item--listDecimal']}>{index + 1}</span>
            {item.desc}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Facts
