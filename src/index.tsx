import React from 'react';
// import Config from 'react-native-config';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import './locales/index';
import setupStore from './store';
import Navigation from './navigation';

// import StorybookUIRoot from '../.storybook/Storybook';

const store = setupStore();
const persistor = persistStore(store);

function AppContainer(): JSX.Element {
  // if (Config.showStorybook === 'true') return <StorybookUIRoot />;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <App /> */}
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

export default AppContainer;
