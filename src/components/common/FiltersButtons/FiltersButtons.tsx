import React, {FC} from 'react';
import { useState } from 'react';
import FiltersButton from '../FiltersButton/FiltersButton';
import s from './FiltersButtons.module.css';
import { connect } from 'react-redux';
import createRequest from '../../../api/api';
import {clearFiltersActionCreator, updateFilterActionCreator, updatePeriodActionCreator, updatePageActionCreator} from '../../../redux/operations-reducer';
import Button from '../Button/Button';
import { useTranslation } from "react-i18next";

type PropsType = {
    sort: string;
    clearFilter: () => void
    updateFilter: (text: string) => void
    updatePeriod: (url: string) => void
    updatePage: (count: number) => void
}

type onFunctionType = () => void

const PanelButtons: FC<PropsType> = ({sort, clearFilter, updateFilter, updatePeriod, updatePage}) => {
    const { t } = useTranslation();
    const [menuStatus, setMenuStatus] = useState<string>('');

    const menuToggler: onFunctionType = () => {
        setMenuStatus(menuStatus ? '' : 'show');
    };

    const onClearFilter: onFunctionType = () => {
        clearFilter();
        createRequest();
    }

    const buttonNames: string[] = [
        'INCOME TYPE',
        'INCOME',
        'ASSET',
        'MONTH',
        'WEEK',
        'DAY',
    ];

    const onFilter = (e: any) => {
        const date: any = new Date();
        const now: string = date.toLocaleDateString().split('.').reverse().join('-');
        const month: string = String(date.getMonth() + 1).length === 1 ? "0" + (date.getMonth() + 1) : String(date.getMonth() + 1);
        const weekDay: number = date.getDay();
        const nameButton: string = e.target.id;

        if (sort === "" || sort !== nameButton) {
            updateFilter(nameButton);
        } else {
            updateFilter("");
        }

        switch (nameButton) {
            case 'MONTH':
                updatePeriod(`dateFrom=2021-${month}-01&dateTo=${now}`);
                updatePage(1);
                createRequest();
                break;
            case 'WEEK':
                date.setDate(date.getDate() - (weekDay - 1));
                let dateFrom: string = date.toLocaleDateString().split('.').reverse().join('-');
                date.setDate(date.getDate() + 6);
                let dateTo: string = date.toLocaleDateString().split('.').reverse().join('-');
                updatePeriod(`dateFrom=${dateFrom}&dateTo=${dateTo}`);
                updatePage(1);
                createRequest();
                break;
            case 'DAY':
                updatePeriod(`dateFrom=${now}&dateTo=${now}`);
                updatePage(1);
                createRequest();
                break;
            default:
              return;
        }
    }

    const buttons = buttonNames.map((item: string, idex: number) => (
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

const mapStateToProps = (state: any) => {
    return {
        sort: state.operations.sort,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        clearFilter: () => {
            dispatch(clearFiltersActionCreator());
        },
        updateFilter: (text: string) => {
            dispatch(updateFilterActionCreator(text));
        },
        updatePeriod: (url: string) => {
            dispatch(updatePeriodActionCreator(url));
        },
        updatePage: (count: number) => {
            dispatch(updatePageActionCreator(count));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PanelButtons);
