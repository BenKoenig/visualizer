import './stats-gui.scss'

const StatsGUI = () => {
    /* list of facts */
    const facts = [
        "150 acres lost every minute",
        "Over 40% of Global Tropical Deforestation Occurs in Brazil",
        "Beef Production is the Biggest Driver for Deforestation in the Amazon"
    ]

    document.body.style.overflow = 'hidden';

    return(
        <div className="container">
            <div className="container__gui">
                <div className="container__gui__btn">
                    <svg className={"container__gui__btn--svg"} data-name="Capa 1" viewBox="5.11 5.43 9.06 9.06"><path d="m10.17 10 3.89-3.89a.37.37 0 1 0-.53-.53L9.64 9.43 5.75 5.54a.37.37 0 1 0-.53.53L9.11 10l-3.89 3.85a.37.37 0 0 0 0 .53.34.34 0 0 0 .26.11.36.36 0 0 0 .27-.11l3.89-3.89 3.89 3.89a.34.34 0 0 0 .26.11.35.35 0 0 0 .27-.11.37.37 0 0 0 0-.53Z"></path></svg>

                    <button type="button" className="container__gui__btn__clickable">
                        <span className="sr-only">Close</span>
                    </button>
                </div>

                <div className={"container__gui__facts"}>
                    <h2 className={"container__gui__facts--headline"}>Deforestation Facts</h2>
                    <ol className={"container__gui__facts__list"}>
                        {/* map of all the facts in an ordered list */}
                        {facts.map((item) => (
                            <li className="container__gui__facts__list__item">
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default StatsGUI