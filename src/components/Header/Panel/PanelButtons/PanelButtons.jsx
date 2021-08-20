import React from 'react';
import { useState } from 'react';
import FiltersButtonsContainer from './FiltersButtonsContainer';
import s from './PanelButtons.module.css';

const PanelButtons = (props) => {
    const [menuStatus, setMenuStatus] = useState('');

    const menuToggler = () => {
        setMenuStatus(menuStatus ? '' : 'show');
    };

    const buttonNames = [
        'INCOME TYPE',
        'INCOME',
        'ASSET',
        'MONTH',
        'WEEK',
        'DAY',
    ];
    const buttons = buttonNames.map((item, idex) => (
        <FiltersButtonsContainer key={idex} name={item} />
    ));

    return (
        <div className={`col-lg-6 col-5 text-right ${s.positionRelative}`}>
            <a href='/' className='btn btn-sm btn-neutral'>
                New
            </a>
            <button onClick={menuToggler} className='btn btn-sm btn-neutral'>
                Filters
            </button>
            <div
                className={`dropdown-menu dropdown-menu-right ${s.position} ${menuStatus}`}
            >
                {buttons}
            </div>
        </div>
    );
};

export default PanelButtons;
