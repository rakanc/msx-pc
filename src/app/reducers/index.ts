import { combineReducers } from 'redux';
import partners from './partnerReducer';

const rootReducer = combineReducers({
  partners
});

export default rootReducer;
