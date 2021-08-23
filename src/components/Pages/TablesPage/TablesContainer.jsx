import Tables from './Tables';
import { connect } from 'react-redux';
import {updatePageActionCreator} from '../../../redux/operations-reducer';

let mapStateToProps = (state) => {
    return {
        operations: state.operations,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updatePage: (count) => {
            dispatch(updatePageActionCreator(count));
        }
    };
};
const TablesContainer = connect(mapStateToProps, mapDispatchToProps)(Tables);

export default TablesContainer;
