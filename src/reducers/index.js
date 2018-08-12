import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import hello from './hello.reducer';

const rootReducer = combineReducers({
  hello
});

export default rootReducer;