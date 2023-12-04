import { call, put, takeLatest } from 'redux-saga/effects';

import API from '@services/API';

import { GET_QUESTIONS, getQuestions } from '../actions';

export function* updateListSaga() {
  try {
    const response: object = yield call(API.getQuestions);
    yield put(getQuestions.success(response));
  } catch (e) {
    yield put(getQuestions.error(e));
  }
}

export default function* ListSaga() {
  yield takeLatest(GET_QUESTIONS.PENDING, updateListSaga);
}
