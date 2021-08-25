import store from '../redux/redux-store';
import {loadingActionCreator, updateOperationActionCreator, errorActionCreator} from "../redux/operations-reducer";
import {NotificationManager} from 'react-notifications';

const createRequest = (f) => {
    const state = store.getState();
    const limit = state.operations.pageSize;
    const skip = (state.operations.page - 1) * 10;
    const symbol = state.operations.search;
    const period = state.operations.period;
    
    store.dispatch(loadingActionCreator());
    fetch(`https://invest-dimasik.herokuapp.com/api/trades?${!period ? "" : period}&limit=${limit}&skip=${skip}&symbol=${symbol}`)
    .then(response => response.json())
    .then(items => store.dispatch(updateOperationActionCreator(items)))
    .catch(errors => {
        store.dispatch(errorActionCreator(errors));
        NotificationManager.error(errors.message, errors.name, 5000, () => {
            alert(errors.stack);
          });
    })
}

export default createRequest;