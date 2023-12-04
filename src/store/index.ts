import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
  blacklist: ['settings'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const setupStore = (preloadedState?: any) => {
  const store = configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat([sagaMiddleware]),
    preloadedState,
    reducer: persistedReducer,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default setupStore;
