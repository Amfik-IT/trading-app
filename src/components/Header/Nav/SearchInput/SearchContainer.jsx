import SearchInput from './SearchInput';
import {updateSearchActionCreator, loadingActionCreator, updateOperationActionCreator, errorActionCreator} from '../../../../redux/operations-reducer'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        search: state.operations.search,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateSearch: (text) => {
            dispatch(updateSearchActionCreator(text));
        },
        loading: (text) => {
            dispatch(loadingActionCreator(text));
        },
        updateOperation: (text) => {
            dispatch(updateOperationActionCreator(text));
        },
        error: (text) => {
            dispatch(errorActionCreator(text));
        },
    };
};
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput);

export default SearchContainer;
