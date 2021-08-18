// import { updateTextActionCreator } from '../../../redux/tables-reducer';
import Tables from './Tables';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        operations: state.operations,
    };
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateText: (text) => {
//             dispatch(updateTextActionCreator(text));
//         },
//     };
// };
const TablesContainer = connect(mapStateToProps)(Tables);

export default TablesContainer;
