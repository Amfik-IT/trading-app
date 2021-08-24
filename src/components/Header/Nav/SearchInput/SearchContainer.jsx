import SearchInput from './SearchInput';
import {updateSearchActionCreator, updatePageActionCreator} from '../../../../redux/operations-reducer'
import { connect } from 'react-redux';
import createRequest from '../../../../api/api';

const SearchContainer = (props) => {
    const setSearch = (e) => {
        let text = e.target.value.toUpperCase();
        props.updateSearch(text);
        props.updatePage(1);
        props.createRequest();
    }

    return (
        <SearchInput setSearch={setSearch}
        search={props.search}/>
    );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
