import classes from './classes.module.scss'

const Stats = () => {
    /* list of stats */
    const stats = {
        data: [
            { value: "200,000 acres", desc: "of land burned today" },
            { value: "200,000 acres", desc: "of land burned today" },
            { value: "200,000 acres", desc: "of land burned today" },
            { value: "200,000 acres", desc: "of land burned today" },
        ]
    }

    return (
        <div className={classes.stats}>
            <h2 className={classes['stats--headline']}>Live Stats</h2>
            <ul className={classes.stats__list}>
                {stats.data.map((statsItem, i) => (
                    <li key={i} className={classes.stats__list__item}>
                        <span className={classes['stats__list__item__value']}>{statsItem.value}</span>
                        {statsItem.desc}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Stats