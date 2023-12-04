import { call, put, takeLatest } from 'redux-saga/effects';

import API from '@services/API';

import { GET_CATEGORY, getCategory } from '../actions';

export function* updateListSaga() {
  try {
    const response: object = yield call(API.getCategory);
    yield put(getCategory.success(response));
  } catch (e) {
    yield put(getCategory.error(e));
  }
}

export default function* CategorySaga() {
  yield takeLatest(GET_CATEGORY.PENDING, updateListSaga);
}
