import { combineReducers } from 'redux';
import home from '../pages/Home/redux/reducer.js';

const reducer = combineReducers({
  home,
});

export default reducer;
