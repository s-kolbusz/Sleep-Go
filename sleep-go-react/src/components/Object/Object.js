import React from 'react';

import classes from './Object.module.css';

const object = (props) => (
    <article className={classes.Object} onClick={props.clicked}>
        {props.name}
        <div>
            <div className={classes.Author}>{props.city}</div>
        </div>
    </article>
);

export default object;