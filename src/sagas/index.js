// eslint-disable-next-line
import { delay } from 'redux-saga';
// eslint-disable-next-line
import { all, put, takeEvery, take } from 'redux-saga/effects';
import * as types from '../constants/action.types';

export function* helloSaga() {
  yield delay(3000);
  console.log('Hello Sagas!');
}



// Single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga()
  ]);
} 