import './stats-gui.scss'
import Facts from "./blocks/Facts.jsx";

const StatsGUI = () => {
    return(
        <div className="container">

            <div className="container__gui">
                <div className="container__gui__btn">
                    <svg className={"container__gui__btn--svg"} data-name="Capa 1" viewBox="5.11 5.43 9.06 9.06"><path d="m10.17 10 3.89-3.89a.37.37 0 1 0-.53-.53L9.64 9.43 5.75 5.54a.37.37 0 1 0-.53.53L9.11 10l-3.89 3.85a.37.37 0 0 0 0 .53.34.34 0 0 0 .26.11.36.36 0 0 0 .27-.11l3.89-3.89 3.89 3.89a.34.34 0 0 0 .26.11.35.35 0 0 0 .27-.11.37.37 0 0 0 0-.53Z"></path></svg>
                    <button type="button" className="container__gui__btn__clickable">
                        <span className="sr-only">Close</span>
                    </button>
                </div>
                <Facts/>
            </div>
        </div>
    )
}

export default StatsGUI