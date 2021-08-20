import Tables from './Tables';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        operations: state.operations,
    };
};
const TablesContainer = connect(mapStateToProps)(Tables);

export default TablesContainer;
