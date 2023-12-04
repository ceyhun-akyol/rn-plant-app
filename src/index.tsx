import React from 'react';
// import Config from 'react-native-config';
import { Provider } from 'react-redux';

import './locales/index';
import setupStore from './store';
import Navigation from './navigation';

// import StorybookUIRoot from '../.storybook/Storybook';

const store = setupStore();

function AppContainer(): JSX.Element {
  // if (Config.showStorybook === 'true') return <StorybookUIRoot />;

  return (
    <Provider store={store}>
      {/* <App /> */}
      <Navigation />
    </Provider>
  );
}

export default AppContainer;
