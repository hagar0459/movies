import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


import ReduxThunk from 'redux-thunk';
import reducers from '../reducer/reducer';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,

};

const pReducer = persistReducer( persistConfig, reducers );

export const store = createStore( pReducer, {}, applyMiddleware( ReduxThunk ) );
export const persistor = persistStore( store );

