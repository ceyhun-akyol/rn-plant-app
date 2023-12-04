import { fork, all } from 'redux-saga/effects';

import categoriesSagas from './categories/sagas';
import questionsSagas from './questions/sagas';

const sagas = [...questionsSagas, ...categoriesSagas];

export default function* rootSaga() {
  yield all(sagas.map((saga) => fork(saga)));
}
