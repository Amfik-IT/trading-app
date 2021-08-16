import { updateTextActionCreator } from '../../redux/tables-reducer';
import Tables from './Tables';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        tablesPage: state.tablesPage,
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            dispatch(updateTextActionCreator(text));
        },
    };
};
const TablesContainer = connect(mapStateToProps, mapDispatchToProps)(Tables);

export default TablesContainer;
