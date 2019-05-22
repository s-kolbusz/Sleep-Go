import React from 'react';

import classes from './Object.module.css';

const post = (props) => (
    <article className={classes.Object} onClick={props.clicked}>
        {props.title}
        <div>
            <div className={classes.Author}>{props.author}</div>
        </div>
    </article>
);

export default post;