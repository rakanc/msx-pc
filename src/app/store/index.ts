import { applyMiddleware, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';
import { IStoreState } from '../types';

const configStore = (initialState?: IStoreState) => {
  return createStore(
    rootReducer,
    initialState!,
    applyMiddleware(reduxImmutableStateInvariant()));
}
const rootStore = configStore();
export default rootStore;
