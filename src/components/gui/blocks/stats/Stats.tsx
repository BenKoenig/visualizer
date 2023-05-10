import React from 'react';
import classes from './classes.module.scss'
import {statsType} from '../../../types/statsType'

interface Props {
    stats: statsType[];
}
const Stats: React.FC<Props> = ({ stats }: Props) => {
    return (
        <div className={classes.stats}>
            <h2 className={classes['stats--headline']}>Live Stats</h2>
            <ul className={classes.stats__list}>
                {stats.map((statsItem, i) => (
                    <li key={i} className={classes.stats__list__item}>
                        <span className={classes['stats__list__item__value']}>{statsItem.value}</span>
                        {statsItem.desc}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Stats