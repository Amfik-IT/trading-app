import SearchInput from './SearchInput';
import {updateSearchActionCreator, updatePageActionCreator} from '../../../../redux/operations-reducer'
import { connect } from 'react-redux';
import createRequest from '../../../../api/api';

let mapStateToProps = (state) => {
    return {
        search: state.operations.search,
        createRequest: createRequest,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateSearch: (text) => {
            dispatch(updateSearchActionCreator(text));
        },
        updatePage: (count) => {
            dispatch(updatePageActionCreator(count));
        }
    };
};
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput);

export default SearchContainer;
