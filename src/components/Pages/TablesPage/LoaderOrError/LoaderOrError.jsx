import React from 'react';
import s from './LoaderOrError.module.css';

const LoaderOrError = (props) => {
    return (
        <tr>
            <th colSpan='6' className={s.loadTH}>
                <img
                    className={s.load}
                    src={props.loader}
                    alt='loading'
                    title='loading'
                ></img>
            </th>
        </tr>
    );
};

export default LoaderOrError;
