import { combineReducers } from '@reduxjs/toolkit';

import list from './list/reducer';
import cart from './cart/reducer';

export const appReducer = combineReducers({
  list,
  cart,
});

const rootReducer = (state: any, action: any) => {
  const updatedState = state;
  return appReducer(updatedState, action);
};

export default rootReducer;
