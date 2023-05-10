import React, { useState } from 'react';
import classes from './classes.module.scss';
import Facts from './blocks/facts/Facts';
import Stats from './blocks/stats/Stats';
import Intro from './blocks/intro/Intro';
import Links from './blocks/links/Links';
import { statsType } from '../types/statsType';


const Gui: React.FC = () => {
  const [hideGUI, setHideGUI] = useState(true);

  const toggleGUI = () => {
    hideGUI ? setHideGUI(false) : setHideGUI(true);
  };

  const stats: statsType[] = [
    {
      value: "200,001 acres",
      desc: "of land burned today",
    },
    {
      value: "200,000 acres",
      desc: "of land burned today",
    },
    {
      value: "200,000 acres",
      desc: "of land burned today",
    },
    {
      value: "200,000 acres",
      desc: "of land burned today",
    },
  ];

  return (
    <div className={`${classes.container} ${hideGUI && classes['container--closed']}`}>
      <div className={`${classes.container__gui} ${hideGUI && classes['container__gui--closed']}`}>
        <div className={classes.container__gui__head}>
          <h2>Visualizer 0.1.4</h2>
          {
            hideGUI ?
              <button
                type="button"
                className={classes['container__gui__head--open']}
                onClick={() => toggleGUI()}
              >
                More Details
              </button>
              :
              <div className={classes.container__gui__head__closeBtn}>
                <svg className={classes['container__gui__head__closeBtn--svg']} data-name="Capa 1" viewBox="5.11 5.43 9.06 9.06"><path d="m10.17 10 3.89-3.89a.37.37 0 1 0-.53-.53L9.64 9.43 5.75 5.54a.37.37 0 1 0-.53.53L9.11 10l-3.89 3.85a.37.37 0 0 0 0 .53.34.34 0 0 0 .26.11.36.36 0 0 0 .27-.11l3.89-3.89 3.89 3.89a.34.34 0 0 0 .26.11.35.35 0 0 0 .27-.11.37.37 0 0 0 0-.53Z"></path></svg>
                <button
                  type="button"
                  className={classes.container__gui__head__closeBtn__clickable}
                  onClick={() => toggleGUI()}
                >
                  <span className="sr-only">Close</span>
                </button>
              </div>
          }
        </div>

        <div className={classes.container__gui__wrapper}>
          <Intro />
          <Facts />
          <Stats stats={stats} />
          <Links />
        </div>
      </div>
    </div>
  )
}

export default Gui;