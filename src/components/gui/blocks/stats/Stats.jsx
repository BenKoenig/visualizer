import '../stats/stats.scss'

const Stats = () => {
    /* list of stats */
    const stats = {
        data: [
            {value: "200,000 acres", desc: "burned today"},
            {value: "200,000 acres", desc: "burned today"},
            {value: "200,000 acres", desc: "burned today"},
        ]
    }

    return(
        <div className="stats">
            <h2 className={"stats--headline"}>Stats</h2>
            <ul className={"stats__list"}>
                {/* map of all the facts in an ordered list */}
                {stats.data.map((statsItem,i) => (
                    <li key={i} className="stats__list__item">
                        <span className="stats__list__item__value">{statsItem.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Stats