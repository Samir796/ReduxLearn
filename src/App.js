import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import MainContainer from './app/MainContainer';

import configureStore from './app/redux/store';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
