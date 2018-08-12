import { GET_POSTS } from '../constants/action.types';
import objectAssign from 'object-assign';

export default function(state = {posts: []}, action) {
  console.log('Action received' , action);
  switch (action.type) {
    case GET_POSTS:
      if(action.payload.status === 200 && action.payload.data ) {
        const newState = objectAssign({}, state, {posts: action.payload.data});
        console.log(newState);
        return newState;
      }else{
        const newState = objectAssign({}, state, {});
        console.log(newState);
        return newState;
      }

    default:
      return state;
  }
}