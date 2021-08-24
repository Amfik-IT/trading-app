import React from 'react';
import { useState } from 'react';
import FiltersButtonsContainer from './FiltersButtonsContainer';
import s from './PanelButtons.module.css';
import { connect } from 'react-redux';
import createRequest from '../../../../api/api';
import {clearFiltersActionCreator} from '../../../../redux/operations-reducer';

const PanelButtons = (props) => {
    const [menuStatus, setMenuStatus] = useState('');

    const menuToggler = () => {
        setMenuStatus(menuStatus ? '' : 'show');
    };

    const onClearFilter = () => {
        props.clearFilter();
        createRequest();
    }

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
            <button onClick={onClearFilter} className='btn btn-sm btn-neutral'>
                Clear filter
            </button>
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

const mapStateToProps = (state) => {
    return {
        sort: state.operations.sort,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearFilter: () => {
            dispatch(clearFiltersActionCreator());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PanelButtons);
