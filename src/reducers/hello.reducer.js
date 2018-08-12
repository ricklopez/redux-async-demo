import { HELLO_PROMISE } from '../constants/action-types';
import objectAssign from 'object-assign';

export default function(state = {promiseData: null, sagaData: null}, action) {
  console.log('Action received' , action);
  switch (action.type) {
    case HELLO_PROMISE:
      if(action.payload.status === 200 && action.payload.data.message === true ) {
        const newState = objectAssign({}, state, {promiseData: action.payload.data});
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