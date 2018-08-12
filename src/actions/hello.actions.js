import * as types from '../constants/action.types';
import axios from 'axios';

export function getPosts(data) {
  const reqPromise = axios.get(`http://bloc-node-ricklopez.codeanyapp.com:3010/posts`);
  
  console.log('Request', reqPromise);
  
  return {
    type: types.GET_POSTS,
    payload: reqPromise
  };
}