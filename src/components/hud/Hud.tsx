import React from 'react';
import classes from './classes.module.scss'

const Hud: React.FC = () => {
    const stages = {
        data: [
            {
                name: "stage1"
            },
            {
                name: "stage2"
            },
            {
                name: "stage3"
            },
        ]
    }
    return (
        <div className={classes.container}>
            {stages.data.map((stage, i) => (
                <div
                    key={i}
                    className={classes.container__stage}>
                </div>
            ))}
        </div>
    )
}

export default Hud