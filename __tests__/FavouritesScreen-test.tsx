/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { FavouritesScreen } from '../src/screens/FavouritesScreen';

// Note: test renderer must be required after react-native.
describe( '<MovieCard /> tests', () =>
{
    const initialState = { output: 10 }
    const mockStore = configureStore()
    let store, wrapper

    it( 'Render the component correctly ', () =>
    {
        store = mockStore( initialState )
        const navigate = jest.fn();
        const tree = renderer.create( <Provider store={store}><FavouritesScreen navigation={{ navigate }} /></Provider> ).toJSON();
        expect( tree ).toMatchSnapshot();
    } );
} );