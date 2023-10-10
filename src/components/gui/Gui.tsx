import React, { useState } from 'react'
import classes from './classes.module.scss'
import Facts from './sections/facts/Facts'
import Stats from './sections/stats/Stats'
import Intro from './sections/intro/Intro'
import Links from './sections/links/Links'
import Causes from './sections/causes/Causes'
import { type statsType, type factType, type causeType, type donationType } from '@/utils/types'
import packageJson from '../../../package.json'
import Button from '../../utils/button/Button'
import DonationLinks from './sections/donationLinks/DonationLinks'

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
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="5 6.2 54 52.6"><g fill-rule="evenodd"><path fill="#feccba" d="M52.12 31.47c-.55 0-1 .45-1 1v9.17c0 .55.45 1 1 1s1-.45 1-1v-9.17c0-.55-.45-1-1-1Z"></path><path fill="#d1f1f4" d="M55.12 7.44c1.05 0 1.9.85 1.9 1.91s-.85 1.9-1.9 1.9h-1.89c-.74 0-1.33.6-1.33 1.33s.59 1.33 1.33 1.34h.61a1.9 1.9 0 1 1 0 3.8H37.6a1.9 1.9 0 1 1 0-3.8h7.98c.74 0 1.34-.6 1.34-1.34s-.6-1.33-1.34-1.33h-.81c-1.05 0-1.9-.85-1.9-1.9s.85-1.91 1.9-1.91h10.35ZM25.52 6.2h7.36c1.15 0 2.09.93 2.09 2.09s-.93 2.08-2.09 2.08h-7.36c-1.15 0-2.09-.93-2.09-2.08s.93-2.09 2.09-2.09ZM8.21 18.8a1.9 1.9 0 1 0 0 3.8h2.33c.74.01 1.33.6 1.33 1.34s-.59 1.33-1.33 1.33H6.93c-1.05 0-1.9.85-1.9 1.9s.85 1.91 1.9 1.91H18.3l3.18-10.28H8.21Z"></path><path fill="#6dd4a1" d="m17.78 27.45-3.2.05a3.693 3.693 0 0 0-2.33 3.43 3.67 3.67 0 0 0 3.68 3.68h3.5l.65-6.31-2.31-.85Z"></path><path fill="#f0f4f6" d="M9.68 35.55c-1.83 0-3.31 1.48-3.31 3.31v1.43l4.06 3.8 3.09-1.25v-5.2c0-1.16-.93-2.09-2.1-2.09H9.67Z"></path><path fill="#9af6d3" d="M6.96 43.82c-1.09 0-1.96.87-1.96 1.96v3.92h54v-3.92c0-1.09-.88-1.96-1.96-1.96H6.96Z"></path><path fill="#feccba" d="M45.36 33.75v4.28h1.29c1.57 0 2.84-1.27 2.84-2.84v-1.44h2.64v1.44c0 3.03-2.44 5.47-5.47 5.47h-1.29v7.08h-3.38v-3.81H40.7c-3.03 0-5.47-2.44-5.47-5.47v-4.71h2.64v4.71c0 1.57 1.27 2.84 2.84 2.84H42v-7.55h3.38Z"></path><path fill="#6dd4a1" d="M34.11 33.75h18.01c2.07 0 3.74-1.67 3.74-3.74s-1.67-3.74-3.74-3.74h-.59c0-.1.01-.2.01-.3 0-1.94-1.56-3.5-3.51-3.5h-9.3c-.77 0-1.48.24-2.06.66l-.16.96-1.63 1.03-1.17 3.86.41 4.77ZM8.08 39.99c-.58 0-1.15.1-1.69.3-.82.3-1.39 1.48-1.39 2.36v7.05l16.22-1.96a3.263 3.263 0 0 0-4.69-2.93 5.002 5.002 0 0 0-4-2.08 4.993 4.993 0 0 0-4.46-2.74Z"></path><path fill="#6df4c0" d="M59 50.73V49.7c0-1.08-.88-1.96-1.96-1.96H6.96c-1.09 0-1.96.88-1.96 1.96v6.14c0 1.09.88 1.96 1.96 1.96h33.79L59 50.73Z"></path><path fill="#feccba" d="M24.69 27.91v9.44h-1.11c-1.63 0-2.95-1.32-2.95-2.95v-6.49h-2.6v6.49c0 3.07 2.47 5.54 5.55 5.54h1.11v7.8h3.33V36.72h1.27c2.99 0 5.39-2.4 5.39-5.39v-3.42h-2.6v3.42c0 1.55-1.25 2.8-2.79 2.8h-1.27v-6.22h-3.33Z"></path><path fill="#6dd4a1" d="M53.89 50.05c-1.88 0-3.6 1.06-4.46 2.74-1.58.02-3.07.79-4 2.08-.44-.22-.93-.33-1.42-.33a3.27 3.27 0 0 0-3.27 3.26h16.29c1.09 0 1.96-.88 1.96-1.96v-5.11l-.05-.03c-.68.01-1.35.15-1.98.42a4.988 4.988 0 0 0-3.08-1.07Z"></path><path fill="#feccba" d="M21.29 38.46c-.55 0-1 .45-1 1v1.53c0 .55.45 1 1 1s1-.45 1-1v-1.53c0-.55-.45-1-1-1ZM31.88 33.47c-.55 0-1 .45-1 1v5.98c0 .55.45 1 1 1s1-.45 1-1v-5.98c0-.55-.45-1-1-1ZM38.23 40.73c-.55 0-1 .45-1 1v3.74c0 .54.45 1 1 1s1-.46 1-1v-3.74c0-.55-.45-1-1-1Z"></path><path fill="#6dd4a1" d="M23.37 53.46c-.55 0-1 .45-1 1v.65c-.33-.18-.74-.39-.74-.39-.53-.13-1.08.2-1.21.73-.13.54.2 1.08.73 1.21 0 0 .87.13 1.26 1.43.13.42.52.71.96.71s.83-.29.96-.71c.4-1.3 1.26-1.43 1.26-1.43.45-.1.76-.51.76-.97 0-.08 0-.16-.03-.24-.13-.53-.68-.86-1.21-.73 0 0-.41.22-.74.39v-.65c0-.55-.45-1-1-1ZM35.19 53.46c-.55 0-1 .45-1 1v.65c-.33-.17-.74-.39-.74-.39-.53-.13-1.08.2-1.21.73-.13.54.2 1.08.73 1.21 0 0 .86.13 1.26 1.43.13.42.52.71.96.71s.83-.29.96-.71c.4-1.3 1.26-1.43 1.26-1.43.53-.13.86-.67.73-1.21-.13-.53-.68-.86-1.21-.73 0 0-.41.21-.74.39v-.65c0-.55-.45-1-1-1ZM11.55 53.46c-.55 0-1 .45-1 1v.65c-.33-.17-.74-.39-.74-.39-.53-.13-1.08.2-1.21.73-.13.54.2 1.08.73 1.21 0 0 .87.13 1.26 1.43.13.42.52.71.96.71s.83-.29.96-.71c.4-1.3 1.26-1.43 1.26-1.43.53-.13.86-.67.73-1.21-.13-.53-.68-.86-1.21-.73 0 0-.41.21-.74.39v-.65c0-.55-.45-1-1-1Z"></path><path fill="#feccba" d="M18.03 28.18c-.55 0-1 .45-1 1v11.05c0 .54.45 1 1 1s1-.46 1-1V29.18c0-.55-.45-1-1-1ZM48.74 37.87c-.55 0-1 .45-1 1v6.35c0 .55.45 1 1 1s1-.45 1-1v-6.35c0-.55-.45-1-1-1Z"></path><path fill="#91deb3" d="M21.48 18.8c-1.91 0-3.45 1.54-3.45 3.45 0 .1 0 .2.01.29h-.01c-2.04 0-3.68 1.65-3.68 3.69s1.64 3.68 3.68 3.68h16.64c2.04 0 3.68-1.64 3.68-3.68s-1.64-3.69-3.68-3.69h-.59c0-.09.01-.19.01-.29 0-1.91-1.54-3.45-3.45-3.45h-9.16Z"></path></g></svg>'
    },
    {
      value: 2400,
      unit: 'trees',
      desc: 'cut down last minute',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="5 6.2 54 52.6"><g fill-rule="evenodd"><path fill="#feccba" d="M52.12 31.47c-.55 0-1 .45-1 1v9.17c0 .55.45 1 1 1s1-.45 1-1v-9.17c0-.55-.45-1-1-1Z"></path><path fill="#d1f1f4" d="M55.12 7.44c1.05 0 1.9.85 1.9 1.91s-.85 1.9-1.9 1.9h-1.89c-.74 0-1.33.6-1.33 1.33s.59 1.33 1.33 1.34h.61a1.9 1.9 0 1 1 0 3.8H37.6a1.9 1.9 0 1 1 0-3.8h7.98c.74 0 1.34-.6 1.34-1.34s-.6-1.33-1.34-1.33h-.81c-1.05 0-1.9-.85-1.9-1.9s.85-1.91 1.9-1.91h10.35ZM25.52 6.2h7.36c1.15 0 2.09.93 2.09 2.09s-.93 2.08-2.09 2.08h-7.36c-1.15 0-2.09-.93-2.09-2.08s.93-2.09 2.09-2.09ZM8.21 18.8a1.9 1.9 0 1 0 0 3.8h2.33c.74.01 1.33.6 1.33 1.34s-.59 1.33-1.33 1.33H6.93c-1.05 0-1.9.85-1.9 1.9s.85 1.91 1.9 1.91H18.3l3.18-10.28H8.21Z"></path><path fill="#6dd4a1" d="m17.78 27.45-3.2.05a3.693 3.693 0 0 0-2.33 3.43 3.67 3.67 0 0 0 3.68 3.68h3.5l.65-6.31-2.31-.85Z"></path><path fill="#f0f4f6" d="M9.68 35.55c-1.83 0-3.31 1.48-3.31 3.31v1.43l4.06 3.8 3.09-1.25v-5.2c0-1.16-.93-2.09-2.1-2.09H9.67Z"></path><path fill="#9af6d3" d="M6.96 43.82c-1.09 0-1.96.87-1.96 1.96v3.92h54v-3.92c0-1.09-.88-1.96-1.96-1.96H6.96Z"></path><path fill="#feccba" d="M45.36 33.75v4.28h1.29c1.57 0 2.84-1.27 2.84-2.84v-1.44h2.64v1.44c0 3.03-2.44 5.47-5.47 5.47h-1.29v7.08h-3.38v-3.81H40.7c-3.03 0-5.47-2.44-5.47-5.47v-4.71h2.64v4.71c0 1.57 1.27 2.84 2.84 2.84H42v-7.55h3.38Z"></path><path fill="#6dd4a1" d="M34.11 33.75h18.01c2.07 0 3.74-1.67 3.74-3.74s-1.67-3.74-3.74-3.74h-.59c0-.1.01-.2.01-.3 0-1.94-1.56-3.5-3.51-3.5h-9.3c-.77 0-1.48.24-2.06.66l-.16.96-1.63 1.03-1.17 3.86.41 4.77ZM8.08 39.99c-.58 0-1.15.1-1.69.3-.82.3-1.39 1.48-1.39 2.36v7.05l16.22-1.96a3.263 3.263 0 0 0-4.69-2.93 5.002 5.002 0 0 0-4-2.08 4.993 4.993 0 0 0-4.46-2.74Z"></path><path fill="#6df4c0" d="M59 50.73V49.7c0-1.08-.88-1.96-1.96-1.96H6.96c-1.09 0-1.96.88-1.96 1.96v6.14c0 1.09.88 1.96 1.96 1.96h33.79L59 50.73Z"></path><path fill="#feccba" d="M24.69 27.91v9.44h-1.11c-1.63 0-2.95-1.32-2.95-2.95v-6.49h-2.6v6.49c0 3.07 2.47 5.54 5.55 5.54h1.11v7.8h3.33V36.72h1.27c2.99 0 5.39-2.4 5.39-5.39v-3.42h-2.6v3.42c0 1.55-1.25 2.8-2.79 2.8h-1.27v-6.22h-3.33Z"></path><path fill="#6dd4a1" d="M53.89 50.05c-1.88 0-3.6 1.06-4.46 2.74-1.58.02-3.07.79-4 2.08-.44-.22-.93-.33-1.42-.33a3.27 3.27 0 0 0-3.27 3.26h16.29c1.09 0 1.96-.88 1.96-1.96v-5.11l-.05-.03c-.68.01-1.35.15-1.98.42a4.988 4.988 0 0 0-3.08-1.07Z"></path><path fill="#feccba" d="M21.29 38.46c-.55 0-1 .45-1 1v1.53c0 .55.45 1 1 1s1-.45 1-1v-1.53c0-.55-.45-1-1-1ZM31.88 33.47c-.55 0-1 .45-1 1v5.98c0 .55.45 1 1 1s1-.45 1-1v-5.98c0-.55-.45-1-1-1ZM38.23 40.73c-.55 0-1 .45-1 1v3.74c0 .54.45 1 1 1s1-.46 1-1v-3.74c0-.55-.45-1-1-1Z"></path><path fill="#6dd4a1" d="M23.37 53.46c-.55 0-1 .45-1 1v.65c-.33-.18-.74-.39-.74-.39-.53-.13-1.08.2-1.21.73-.13.54.2 1.08.73 1.21 0 0 .87.13 1.26 1.43.13.42.52.71.96.71s.83-.29.96-.71c.4-1.3 1.26-1.43 1.26-1.43.45-.1.76-.51.76-.97 0-.08 0-.16-.03-.24-.13-.53-.68-.86-1.21-.73 0 0-.41.22-.74.39v-.65c0-.55-.45-1-1-1ZM35.19 53.46c-.55 0-1 .45-1 1v.65c-.33-.17-.74-.39-.74-.39-.53-.13-1.08.2-1.21.73-.13.54.2 1.08.73 1.21 0 0 .86.13 1.26 1.43.13.42.52.71.96.71s.83-.29.96-.71c.4-1.3 1.26-1.43 1.26-1.43.53-.13.86-.67.73-1.21-.13-.53-.68-.86-1.21-.73 0 0-.41.21-.74.39v-.65c0-.55-.45-1-1-1ZM11.55 53.46c-.55 0-1 .45-1 1v.65c-.33-.17-.74-.39-.74-.39-.53-.13-1.08.2-1.21.73-.13.54.2 1.08.73 1.21 0 0 .87.13 1.26 1.43.13.42.52.71.96.71s.83-.29.96-.71c.4-1.3 1.26-1.43 1.26-1.43.53-.13.86-.67.73-1.21-.13-.53-.68-.86-1.21-.73 0 0-.41.21-.74.39v-.65c0-.55-.45-1-1-1Z"></path><path fill="#feccba" d="M18.03 28.18c-.55 0-1 .45-1 1v11.05c0 .54.45 1 1 1s1-.46 1-1V29.18c0-.55-.45-1-1-1ZM48.74 37.87c-.55 0-1 .45-1 1v6.35c0 .55.45 1 1 1s1-.45 1-1v-6.35c0-.55-.45-1-1-1Z"></path><path fill="#91deb3" d="M21.48 18.8c-1.91 0-3.45 1.54-3.45 3.45 0 .1 0 .2.01.29h-.01c-2.04 0-3.68 1.65-3.68 3.69s1.64 3.68 3.68 3.68h16.64c2.04 0 3.68-1.64 3.68-3.68s-1.64-3.69-3.68-3.69h-.59c0-.09.01-.19.01-.29 0-1.91-1.54-3.45-3.45-3.45h-9.16Z"></path></g></svg>'
    },
    {
      value: 200000,
      unit: 'acres',
      desc: 'of land burned today',
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

  // donation links
  const donationLinks: donationType[] = [
    {
      link: 'https://www.rainforesttrust.org/',
      org: 'Rainforest Trust'
    },
    {
      link: 'https://www.amazonconservation.org/take-action/donate/',
      org: 'Amazon Conservation'
    },
    {
      link: 'https://www.rainforest-alliance.org/support/',
      org: 'Rainforest Alliance'
    },
    {
      link: 'https://rainforestfoundation.org/engage/give/',
      org: 'Rainforest foundation'
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
          <DonationLinks donationLinks={donationLinks}/>
          <Links />
        </div>

      </div>
    </div>
  )
}

export default Gui
