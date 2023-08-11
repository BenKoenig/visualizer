import React, { useState } from 'react'
import classes from './classes.module.scss'
import Facts from './sections/facts/Facts'
import Stats from './sections/stats/Stats'
import Intro from './sections/intro/Intro'
import Links from './sections/links/Links'
import Causes from './sections/causes/Causes'
import { type statsType, type factType, type causeType } from '@/utils/types'
import packageJson from '../../../package.json'
import Button from '../../utils/button/Button'

const Gui: React.FC = () => {
  // state variable with initial value of "true" and a function "setHideGUI" to toggle its value
  const [hideGUI, setHideGUI] = useState(true)
  const projectName = packageJson.name
  const projectVersion = packageJson.version
  const extendBtnText = 'View Statistics'
  const closeBtnText = 'Close'

  // function to toggle the value of "hideGUI" between true and false
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggleGUI = () => {
    hideGUI ? setHideGUI(false) : setHideGUI(true)
  }

  /* list of facts */
  const facts: factType[] = [
    {
      desc: 'Beef Production is the Biggest Driver for Deforestation in the Amazon'
    },
    {
      desc: '15B of trees cut down every year'
    },
    {
      desc: '50,000 species disappear every year'
    },
    {
      desc: 'The Amazon rainforest has lost over 17% of its area in the past 50 years'
    },
    {
      desc: 'Deforestation contributes to climate change by releasing stored carbon back into the atmosphere'
    },
    {
      desc: 'Agriculture, especially large-scale farming, contributes to extensive forest clearance'
    },
    {
      desc: 'Deforestation increases the risk of flooding and soil erosion'
    },
    {
      desc: 'International initiatives like REDD+ aim to address rainforest deforestation by providing incentives for forest protection'
    },
    {
      desc: '150 acres lost every minute'
    },
    {
      desc: 'Over 40% of Global Tropical Deforestation Occurs in Brazil'
    }
  ]

  // array of objects which contains statistical data
  const stats: statsType[] = [
    {
      value: 78433,
      unit: '',
      desc: 'forest fires since last year'
    },
    {
      value: 139,
      unit: 'acres',
      desc: 'of rainforest lost last hour'
    },
    {
      value: 200000,
      unit: 'acres',
      desc: 'of land burned today'
    },
    {
      value: 2400,
      unit: 'trees',
      desc: 'cut down last minute'
    }
  ]

  // array of objects which contains causes data
  const causes: causeType[] = [
    {
      desc: 'Forests cleared to build factories, businesses, or homes'
    },
    {
      desc: 'Forests cleared for farmland'
    },
    {
      desc: 'Forests cleared to create pastures for livestock'
    },
    {
      desc: 'Forests burned by wildfires'
    }
  ]

  return (
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    <div className={`${classes.container} ${hideGUI && classes['container--closed']}`}>
      {/* eslint-disable-next-line @typescript-eslint/restrict-template-expressions */}
      <div className={`${classes.container__gui} ${hideGUI && classes['container__gui--closed']}`}>
        <div className={classes.container__gui__head}>
          <h2>{projectName} {projectVersion}</h2>
          {
            hideGUI
              ? <Button button={{ text: extendBtnText, onClick: toggleGUI }} />
              : <div className={classes.container__gui__head__closeBtn}>
                <svg className={classes['container__gui__head__closeBtn--svg']} data-name="Capa 1" viewBox="5.11 5.43 9.06 9.06"><path d="m10.17 10 3.89-3.89a.37.37 0 1 0-.53-.53L9.64 9.43 5.75 5.54a.37.37 0 1 0-.53.53L9.11 10l-3.89 3.85a.37.37 0 0 0 0 .53.34.34 0 0 0 .26.11.36.36 0 0 0 .27-.11l3.89-3.89 3.89 3.89a.34.34 0 0 0 .26.11.35.35 0 0 0 .27-.11.37.37 0 0 0 0-.53Z"></path></svg>
                <button
                  type="button"
                  className={classes.container__gui__head__closeBtn__clickable}
                  onClick={() => { toggleGUI() }}
                >
                  <span className="sr-only">{closeBtnText}</span>
                </button>
              </div>
          }
        </div>

        <div className={classes.container__gui__wrapper}>
          <Intro />
          <Facts facts={facts}/>
          <Stats stats={stats} />
          <Causes causes={causes}/>
          <Links />
        </div>

      </div>
    </div>
  )
}

export default Gui
