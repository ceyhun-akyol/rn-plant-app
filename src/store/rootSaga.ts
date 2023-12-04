import { fork, all } from 'redux-saga/effects';

import listSagas from './list/sagas';

const sagas = [...listSagas];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
