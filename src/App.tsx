/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { View, Alert } from 'react-native';
import { AppNavigator } from './navigation/AppNavigator';
import thunk from 'redux-thunk';
import reducers from './redux/reducer/reducer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { createStore, applyMiddleware } from 'redux';
import { persistor, store } from './redux/store/store';

export default function App()
{

  return (
    <Provider store={createStore( reducers, {}, applyMiddleware( thunk ) )}>
      <PersistGate loading={<View />} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};



