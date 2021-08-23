import { connect } from 'react-redux';
import FiltersButtons from './FiltersButtons';
import {updateFilterActionCreator, updatePeriodActionCreator} from '../../../../redux/operations-reducer';

let mapStateToProps = (state) => {
    return {
        sort: state.operations.sort,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateFilter: (text) => {
            dispatch(updateFilterActionCreator(text));
        },
        updatePeriod: (url) => {
            dispatch(updatePeriodActionCreator(url));
        }
    };
};
const FiltersButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(FiltersButtons);

export default FiltersButtonsContainer;