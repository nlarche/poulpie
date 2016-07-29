import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import clubs, { selectedClub } from './clubs';

const rootReducers = combineReducers({
  clubs,
  selectedClub,
  routing: routerReducer
});

export default rootReducers;
