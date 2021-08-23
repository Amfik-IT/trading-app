import React from 'react';

const PageButton = (props) => {
    return (
        <li className={`page-item ${props.active}`}>
            <button onClick={props.onClick} className='page-link'>
                {props.count}
            </button>
        </li>
    );
};

export default PageButton;
