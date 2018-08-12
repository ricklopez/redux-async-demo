import { combineReducers } from 'redux';
import hello from './hello.reducer';

const rootReducer = combineReducers({
  hello
});

export default rootReducer;