import React, {FC} from 'react';
import { useState } from 'react';
import FiltersButton from '../FiltersButton/FiltersButton';
import s from './FiltersButtons.module.css';
import { connect } from 'react-redux';
import createRequest from '../../../api/api';
import {
    clearFilters,
    updateFilter,
    updatePeriod,
    updatePage,
} from '../../../redux/operations-reducer';
import Button from '../Button/Button';
import { useTranslation } from "react-i18next";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    sort: string;
}

type MapDispatchToPropsType = {
    clearFilters: () => void
    updateFilter: (text: string) => void
    updatePeriod: (url: string) => void
    updatePage: (count: number) => void
}
type OwnPropsType = {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

type onFunctionType = () => void

const PanelButtons: FC<PropsType> = ({sort, clearFilters, updateFilter, updatePeriod, updatePage}) => {
    const { t } = useTranslation();
    const [menuStatus, setMenuStatus] = useState<string>('');

    const menuToggler: onFunctionType = () => {
        setMenuStatus(menuStatus ? '' : 'show');
    };

    const onClearFilter: onFunctionType = () => {
        clearFilters();
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
        const date: Date = new Date();
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

    const buttons: React.ReactElement[] = buttonNames.map((item: string, idex: number) => (
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        sort: state.operations.sort as string,
    };
};

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    clearFilters,
    updateFilter,
    updatePeriod,
    updatePage
    })(PanelButtons);
