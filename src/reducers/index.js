import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import club from './club';

const rootReducers = combineReducers({
  club, routing : routerReducer
});

export default rootReducers;
