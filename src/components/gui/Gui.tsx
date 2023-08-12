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
      desc: 'forest fires since last year',
      svg: '<svg xml:space="preserve" id="Layer_1" style="enable-background:new 0 0 64 64" version="1.1" viewBox="13.89 8 36.22 48"><style>.st0{fill:#b4e6dd}.st1{fill:#80d4c4}.st2{fill:#d2f0ea}.st3{fill:#fff}.st5{fill:#db7767}.st6{fill:#f38e7a}.st8{fill:#32a48e}.st9{fill:#a38fd8}.st10{fill:#7c64bd}.st11{fill:#eaa157}.st12{fill:#9681cf}.st13{fill:#f9c46a}.st14{fill:#ce6b61}</style><path d="M21.04 20.63s-1.79 8.99-.96 11.47c0 0 1.1-13.6 11.67-24.1 0 0-.34 8.79 5.15 13.25s6.73 11.4 6.73 11.4.62-4.74-1.24-12.33c0 0 11.67 12.12 6.32 25.65 0 0-6.45 14.9-24.92 8.38s-6.05-31.38-2.75-33.72z" style="fill:#f6af62"></path><path d="M40.75 32.12c.17 3.81-1.55 4.81-2.94 5.01-.89.13-1.79-.1-2.57-.53-7.65-4.15-3.72-14.29-3.72-14.29-5.01 4.79-2.4 14.74-2.4 14.74s1.55 5.64-1.62 6.13c-1.59.25-2.33-.39-2.67-1.08-.31-.64-.31-1.39-.04-2.05 2.15-5.34.31-8.36.31-8.36-1.03 3.06-2.12 5.08-2.91 6.29-1.12 1.72-1.83 3.68-1.93 5.73-.36 7.64 6.04 10.69 6.04 10.69 10.51 5.36 15.23-4.44 15.23-4.44 5.43-10.44-.78-17.84-.78-17.84z" style="fill:#fbd872"></path></svg>'
    },
    {
      value: 139,
      unit: 'acres',
      desc: 'of rainforest lost last hour',
      svg: '<svg xml:space="preserve" id="Layer_1" style="enable-background:new 0 0 64 64" version="1.1" viewBox="13.89 8 36.22 48"><style>.st0{fill:#b4e6dd}.st1{fill:#80d4c4}.st2{fill:#d2f0ea}.st3{fill:#fff}.st5{fill:#db7767}.st6{fill:#f38e7a}.st8{fill:#32a48e}.st9{fill:#a38fd8}.st10{fill:#7c64bd}.st11{fill:#eaa157}.st12{fill:#9681cf}.st13{fill:#f9c46a}.st14{fill:#ce6b61}</style><path d="M21.04 20.63s-1.79 8.99-.96 11.47c0 0 1.1-13.6 11.67-24.1 0 0-.34 8.79 5.15 13.25s6.73 11.4 6.73 11.4.62-4.74-1.24-12.33c0 0 11.67 12.12 6.32 25.65 0 0-6.45 14.9-24.92 8.38s-6.05-31.38-2.75-33.72z" style="fill:#f6af62"></path><path d="M40.75 32.12c.17 3.81-1.55 4.81-2.94 5.01-.89.13-1.79-.1-2.57-.53-7.65-4.15-3.72-14.29-3.72-14.29-5.01 4.79-2.4 14.74-2.4 14.74s1.55 5.64-1.62 6.13c-1.59.25-2.33-.39-2.67-1.08-.31-.64-.31-1.39-.04-2.05 2.15-5.34.31-8.36.31-8.36-1.03 3.06-2.12 5.08-2.91 6.29-1.12 1.72-1.83 3.68-1.93 5.73-.36 7.64 6.04 10.69 6.04 10.69 10.51 5.36 15.23-4.44 15.23-4.44 5.43-10.44-.78-17.84-.78-17.84z" style="fill:#fbd872"></path></svg>'
    },
    {
      value: 200000,
      unit: 'acres',
      desc: 'of land burned today',
      svg: '<svg xml:space="preserve" id="Layer_1" style="enable-background:new 0 0 64 64" version="1.1" viewBox="13.89 8 36.22 48"><style>.st0{fill:#b4e6dd}.st1{fill:#80d4c4}.st2{fill:#d2f0ea}.st3{fill:#fff}.st5{fill:#db7767}.st6{fill:#f38e7a}.st8{fill:#32a48e}.st9{fill:#a38fd8}.st10{fill:#7c64bd}.st11{fill:#eaa157}.st12{fill:#9681cf}.st13{fill:#f9c46a}.st14{fill:#ce6b61}</style><path d="M21.04 20.63s-1.79 8.99-.96 11.47c0 0 1.1-13.6 11.67-24.1 0 0-.34 8.79 5.15 13.25s6.73 11.4 6.73 11.4.62-4.74-1.24-12.33c0 0 11.67 12.12 6.32 25.65 0 0-6.45 14.9-24.92 8.38s-6.05-31.38-2.75-33.72z" style="fill:#f6af62"></path><path d="M40.75 32.12c.17 3.81-1.55 4.81-2.94 5.01-.89.13-1.79-.1-2.57-.53-7.65-4.15-3.72-14.29-3.72-14.29-5.01 4.79-2.4 14.74-2.4 14.74s1.55 5.64-1.62 6.13c-1.59.25-2.33-.39-2.67-1.08-.31-.64-.31-1.39-.04-2.05 2.15-5.34.31-8.36.31-8.36-1.03 3.06-2.12 5.08-2.91 6.29-1.12 1.72-1.83 3.68-1.93 5.73-.36 7.64 6.04 10.69 6.04 10.69 10.51 5.36 15.23-4.44 15.23-4.44 5.43-10.44-.78-17.84-.78-17.84z" style="fill:#fbd872"></path></svg>'
    },
    {
      value: 2400,
      unit: 'trees',
      desc: 'cut down last minute',
      svg: '<svg xml:space="preserve" id="Layer_1" style="enable-background:new 0 0 64 64" version="1.1" viewBox="13.89 8 36.22 48"><style>.st0{fill:#b4e6dd}.st1{fill:#80d4c4}.st2{fill:#d2f0ea}.st3{fill:#fff}.st5{fill:#db7767}.st6{fill:#f38e7a}.st8{fill:#32a48e}.st9{fill:#a38fd8}.st10{fill:#7c64bd}.st11{fill:#eaa157}.st12{fill:#9681cf}.st13{fill:#f9c46a}.st14{fill:#ce6b61}</style><path d="M21.04 20.63s-1.79 8.99-.96 11.47c0 0 1.1-13.6 11.67-24.1 0 0-.34 8.79 5.15 13.25s6.73 11.4 6.73 11.4.62-4.74-1.24-12.33c0 0 11.67 12.12 6.32 25.65 0 0-6.45 14.9-24.92 8.38s-6.05-31.38-2.75-33.72z" style="fill:#f6af62"></path><path d="M40.75 32.12c.17 3.81-1.55 4.81-2.94 5.01-.89.13-1.79-.1-2.57-.53-7.65-4.15-3.72-14.29-3.72-14.29-5.01 4.79-2.4 14.74-2.4 14.74s1.55 5.64-1.62 6.13c-1.59.25-2.33-.39-2.67-1.08-.31-.64-.31-1.39-.04-2.05 2.15-5.34.31-8.36.31-8.36-1.03 3.06-2.12 5.08-2.91 6.29-1.12 1.72-1.83 3.68-1.93 5.73-.36 7.64 6.04 10.69 6.04 10.69 10.51 5.36 15.23-4.44 15.23-4.44 5.43-10.44-.78-17.84-.78-17.84z" style="fill:#fbd872"></path></svg>'
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
