import { combineReducers } from 'redux';
import hello from './hello.reducer';
import posts from './post.reducer';

const rootReducer = combineReducers({
  hello,
  posts
});

export default rootReducer;