import React from 'react';
import { useState } from 'react';
import FiltersButton from '../FiltersButton/FiltersButton';
import s from './FiltersButtons.module.css';
import { connect } from 'react-redux';
import createRequest from '../../../api/api';
import {clearFiltersActionCreator, updateFilterActionCreator, updatePeriodActionCreator, updatePageActionCreator} from '../../../redux/operations-reducer';
import Button from '../Button/Button';
import { useTranslation } from "react-i18next";

const PanelButtons = (props) => {
    const { t } = useTranslation();
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

    const onFilter = (e) => {
        const date = new Date();
        const now = date.toLocaleDateString().split('.').reverse().join('-');
        const month = String(date.getMonth() + 1).length === 1 ? "0" + (date.getMonth() + 1) : String(date.getMonth() + 1);
        const weekDay = date.getDay();
        const nameButton = e.target.id;

        if (props.sort === "" || props.sort !== nameButton) {
            props.updateFilter(nameButton);
        } else {
            props.updateFilter("");
        }

        switch (nameButton) {
            case 'MONTH':
                props.updatePeriod(`dateFrom=2021-${month}-01&dateTo=${now}`);
                props.updatePage(1);
                createRequest();
                break;
            case 'WEEK':
                date.setDate(date.getDate() - (weekDay - 1));
                let dateFrom = date.toLocaleDateString().split('.').reverse().join('-');
                date.setDate(date.getDate() + 6);
                let dateTo = date.toLocaleDateString().split('.').reverse().join('-');
                props.updatePeriod(`dateFrom=${dateFrom}&dateTo=${dateTo}`);
                props.updatePage(1);
                createRequest();
                break;
            case 'DAY':
                props.updatePeriod(`dateFrom=${now}&dateTo=${now}`);
                props.updatePage(1);
                createRequest();
                break;
            default:
              return;
        }
    }

    const buttons = buttonNames.map((item, idex) => (
        <FiltersButton key={idex} id={item} name={t(item)} onFilter={onFilter}/>
    ));

    return (
        <div className={`col-lg-6 col-5 text-right ${s.positionRelative}`}>
            <Button onClick={onClearFilter} name={t("Clear filter")}/>
            <Button onClick={menuToggler} name={t("Filters")}/>
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
        },
        updateFilter: (text) => {
            dispatch(updateFilterActionCreator(text));
        },
        updatePeriod: (url) => {
            dispatch(updatePeriodActionCreator(url));
        },
        updatePage: (count) => {
            dispatch(updatePageActionCreator(count));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PanelButtons);
