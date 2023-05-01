const Facts = () => {
    /* list of facts */
    const facts = [
        "150 acres lost every minute",
        "Over 40% of Global Tropical Deforestation Occurs in Brazil",
        "Beef Production is the Biggest Driver for Deforestation in the Amazon",
        "150 acres lost every minute",
        "Over 40% of Global Tropical Deforestation Occurs in Brazil",
    ]
    return(
        <div className={"container__gui__facts"}>
            <h2 className={"container__gui__facts--headline"}>Deforestation Facts</h2>
            <ol className={"container__gui__facts__list"}>
                {/* map of all the facts in an ordered list */}
                {facts.map((item,i) => (
                    <li key={i} className="container__gui__facts__list__item">
                        {item}
                    </li>
                ))}
            </ol>
        </div>
    )
}
export default Facts