import { applyMiddleware, createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { LoadCountries } from '../actions/countries';
import rootReducer from '../reducers';

const logger = (store: any) => (next: any) => (action: any) => {
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  return result
}
​
const crashReporter = (store: any) => (next: any) => (action: any)  => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    // Raven.captureException(err, {
    //   extra: {
    //     action,
    //     state: store.getState()
    //   }
    // })
    throw err
  }
}

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
    applyMiddleware(logger, crashReporter, thunk, reduxImmutableStateInvariant()));
}

const rootStore = configStore();
rootStore.dispatch<any>(LoadCountries());
export default rootStore;
