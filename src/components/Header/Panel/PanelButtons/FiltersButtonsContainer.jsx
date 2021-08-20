import { connect } from 'react-redux';
import FiltersButtons from './FiltersButtons';
import {updateFilterActionCreator} from '../../../../redux/operations-reducer';

let mapStateToProps = (state) => {
    return {
        sort: state.operations.sort,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateFilter: (text) => {
            dispatch(updateFilterActionCreator(text));
        }
    };
};
const FiltersButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(FiltersButtons);

export default FiltersButtonsContainer;