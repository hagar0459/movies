/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { FavouritesScreen } from '../src/screens/FavouritesScreen';
import { FlatList, TextInput } from 'react-native';

describe( '<FavouriteScreen /> tests', () =>
{
    const initialState = { output: 10 }
    const mockStore = configureStore()
    let store = mockStore( initialState )
    const navigate = jest.fn();
    it( 'Screen Shows FlatList', () =>
    {
        store = mockStore( initialState )

        const component = renderer.create(
            <Provider store={store}>
                <FavouritesScreen navigation={{ navigate }} />
            </Provider>,
        );

        expect( () => component.root.findByType( FlatList ) ).not.toThrow();
    } );
    it( 'Screen Not Shows InputText', () =>
    {
        const component = renderer.create(
            <Provider store={store}>

                <FavouritesScreen navigation={{ navigate }} />
            </Provider>,
        );

        expect( () => component.root.findByType( TextInput ) ).toThrow();
    } );
    it( 'Render the component correctly ', () =>
    {

        const tree = renderer.create( <Provider store={store}><FavouritesScreen navigation={{ navigate }} /></Provider> ).toJSON();
        expect( tree ).toMatchSnapshot();
    } );
} );