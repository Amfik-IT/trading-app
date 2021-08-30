import React, {FC} from 'react';
import s from './LoaderOrError.module.css';

const LoaderOrError: FC<{loader: string}> = ({loader}) => {
    return (
        <tr>
            <th colSpan={6} className={s.loadTH}>
                <img
                    className={s.load}
                    src={loader}
                    alt='loading'
                    title='loading'
                ></img>
            </th>
        </tr>
    );
};

export default LoaderOrError;
