import React from 'react';
import classes from './classes.module.scss';

const Facts: React.FC = () => {
  /* list of facts */
  const facts = [
    "150 acres lost every minute",
    "Over 40% of Global Tropical Deforestation Occurs in Brazil",
    "Beef Production is the Biggest Driver for Deforestation in the Amazon",
    "150 acres lost every minute",
    "Over 40% of Global Tropical Deforestation Occurs in Brazil",
  ];

  return (
    <div>
      <h2 className={classes.headline}>Facts</h2>
      <ol className={classes.list}>
        {/* map of all the facts in an ordered list */}
        {facts.map((item, index) => (
          <li key={index} className={classes.list__item}>
            <span className={classes['list__item--listDecimal']}>{index + 1}</span>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Facts;