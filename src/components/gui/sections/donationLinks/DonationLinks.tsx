import React from 'react'
import classes from './classes.module.scss'
import { type donationType } from '../../../../utils/types'

interface Props {
  donationLinks: donationType[]
}
const DonationLinks: React.FC<Props> = ({ donationLinks }: Props) => {
  return (
        <div className={classes.donation}>
            <h2 className={classes['donation--headline']}>Donate to Organisations</h2>
            <div className={classes.donation__box}>
                <h3>Why donate?</h3>
                <p>Donating to rainforest conservation aids in preserving biodiversity, combating climate change, fostering medicinal research, and supporting indigenous communities and global well-being.</p>
            </div>
            <ul className={classes.donation__list}>
                {donationLinks.map((link, i) => (
                    <li key={i} className={classes.donation__list__item}>
                        <a href={link.link}>{link.org}</a>
                    </li>
                ))}
            </ul>
        </div>
  )
}
export default DonationLinks
