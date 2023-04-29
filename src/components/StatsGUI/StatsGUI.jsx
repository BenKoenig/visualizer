import './stats-gui.scss'

const StatsGUI = () => {
    /* list of facts */
    const facts = [
        "150 acres lost every minute",
        "Over 40% of Global Tropical Deforestation Occurs in Brazil",
        "Beef Production is the Biggest Driver for Deforestation in the Amazon"
    ]

    return(
        <div className="container">
            <ol className={"container__facts"}>
                {/* map of all the facts in an ordered list */}
                {facts.map((item) => (
                    <li className="container__facts__item">
                        {item}
                    </li>
                ))}
            </ol>

        </div>
    )
}

export default StatsGUI