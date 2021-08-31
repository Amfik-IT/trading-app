import store, {AppStateType} from '../redux/redux-store';
import {loading, updateOperation, error} from "../redux/operations-reducer";
import {NotificationManager} from 'react-notifications';

type CreateRequestType = () => void

const createRequest: CreateRequestType = () => {
    const state: AppStateType = store.getState();
    const limit: number = state.operations.pageSize;
    const skip: number = (state.operations.page - 1) * 10;
    const symbol: string = state.operations.search;
    const period: string = state.operations.period;
    
    store.dispatch(loading());
    fetch(`https://invest-dimasik.herokuapp.com/api/trades?${!period ? "" : period}&limit=${limit}&skip=${skip}&symbol=${symbol}`)
    .then(response => response.json())
    .then(items => store.dispatch(updateOperation(items)))
    .catch(errors => {
        store.dispatch(error(errors));
        NotificationManager.error(errors.message, errors.name, 5000, () => {
            alert(errors.stack);
          });
    })
}

export default createRequest;