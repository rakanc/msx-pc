import { applyMiddleware, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { LoadCountries } from '../actions/countries';
import rootReducer from '../reducers';

const configStore = (initialState?: any) => {

  // if (!initialState) {
  //   initialState = {
  //     countries: ,
  //     partners: new Array<Partner>()

  //   }
  // }

  return createStore(
    rootReducer,
    initialState!,
    applyMiddleware(thunk, reduxImmutableStateInvariant()));
}

const rootStore = configStore();
rootStore.dispatch<any>(LoadCountries());
export default rootStore;
