import { connect } from 'react-redux';
import s from "./FiltersButtons.module.css"
import createRequest from '../../../../api/api';
import {updateFilterActionCreator, updatePeriodActionCreator, updatePageActionCreator} from '../../../../redux/operations-reducer';

const FiltersButtonsContainer = (props) => {

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

    return <button onClick={filterToggler} className={`dropdown-item ${s.buttonOutline}`}>{props.name}</button>;
};

const mapStateToProps = (state) => {
    return {
        sort: state.operations.sort,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(FiltersButtonsContainer);