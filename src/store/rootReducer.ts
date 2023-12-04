import { combineReducers } from '@reduxjs/toolkit';

import settings from './settings/reducer';
import categories from './categories/reducer';
import questions from './questions/reducer';

export const appReducer = combineReducers({
  settings,
  questions,
  categories,
});

const rootReducer = (state: any, action: any) => {
  const updatedState = state;
  return appReducer(updatedState, action);
};

export default rootReducer;
