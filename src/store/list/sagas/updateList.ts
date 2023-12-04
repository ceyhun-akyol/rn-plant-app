import { call, put, takeLatest } from 'redux-saga/effects';

import API from '@services/API';

import { UPDATE_LIST, updateList } from '../actions';

export function* updateListSaga() {
  try {
    const response: object = yield call(API.getList);
    yield put(updateList.success(response));
  } catch (e) {
    yield put(updateList.error(e));
  }
}

export default function* ListSaga() {
  yield takeLatest(UPDATE_LIST.PENDING, updateListSaga);
}
