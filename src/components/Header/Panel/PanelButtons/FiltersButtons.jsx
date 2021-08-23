import React from 'react';
import s from "./FiltersButtons.module.css"
import createRequest from '../../../../api/api';

const FiltersButtons = (props) => {

    const filterToggler = (e) => {
        const date = new Date();
        const now = date.toLocaleDateString().split('.').reverse().join('-');
        const month = String(date.getMonth() + 1).length === 1 ? "0" + (date.getMonth() + 1) : String(date.getMonth() + 1);
        const weekDay = date.getDay();

        if (props.sort === "" || props.sort !== props.name) {
            props.updateFilter(props.name);
        } else {
            props.updateFilter("");
        }

        switch (props.name) {
            case 'MONTH':
                props.updatePeriod(`dateFrom=2021-${month}-01&dateTo=${now}`);
                createRequest();
                break;
            case 'WEEK':
                date.setDate(date.getDate() - (weekDay - 1));
                let dateFrom = date.toLocaleDateString().split('.').reverse().join('-');
                date.setDate(date.getDate() + 6);
                let dateTo = date.toLocaleDateString().split('.').reverse().join('-');
                props.updatePeriod(`dateFrom=${dateFrom}&dateTo=${dateTo}`);
                createRequest();
                break;
            case 'DAY':
                props.updatePeriod(`dateFrom=${now}&dateTo=${now}`);
                createRequest();
                break;
            default:
              return;
        }
    }



    return <button onClick={filterToggler} className={`dropdown-item ${s.buttonOutline}`}>{props.name}</button>;
};

export default FiltersButtons;
