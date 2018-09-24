import { combineReducers } from 'redux';
import countries from './countryReducer';
import partners from './partnerReducer';

const rootReducer = combineReducers({
  countries,
  partners
});

export default rootReducer;
