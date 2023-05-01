import './gui.scss'
import Facts from "./blocks/facts/Facts.jsx";
import Stats from "./blocks/stats/Stats.jsx";
import {useState} from "react";

const Gui = () => {
    const [hideGUI, setHideGUI] = useState(true)

    const toggleGUI = () => {
        hideGUI ? setHideGUI(false) : setHideGUI(true)
    }

    return(
        <div className={`container ${hideGUI && 'container--closed' }`}>
            <div className={`container__gui ${hideGUI && 'container__gui--closed' }`}>
                <div className="container__gui__head">
                    <h2>More Details</h2>

                    {
                        hideGUI ?
                            <button
                                type="button"
                                className="container__gui__head--open"
                                onClick={() => toggleGUI()}
                            >
                                Read more</button>
                            :
                            <div className="container__gui__head__closeBtn">
                                <svg className={"container__gui__head__closeBtn--svg"} data-name="Capa 1" viewBox="5.11 5.43 9.06 9.06"><path d="m10.17 10 3.89-3.89a.37.37 0 1 0-.53-.53L9.64 9.43 5.75 5.54a.37.37 0 1 0-.53.53L9.11 10l-3.89 3.85a.37.37 0 0 0 0 .53.34.34 0 0 0 .26.11.36.36 0 0 0 .27-.11l3.89-3.89 3.89 3.89a.34.34 0 0 0 .26.11.35.35 0 0 0 .27-.11.37.37 0 0 0 0-.53Z"></path></svg>
                                <button
                                    type="button"
                                    className="container__gui__head__closeBtn__clickable"
                                    onClick={() => toggleGUI()}
                                >
                                    <span className="sr-only">Close</span>
                                </button>
                            </div>
                    }
                </div>

                <div className="container__gui__wrapper">
                    <Facts/>
                    <Stats/>
                </div>
            </div>
        </div>
    )
}

export default Gui