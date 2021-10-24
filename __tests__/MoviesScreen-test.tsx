/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MoviesScreen } from '../src/screens/MoviesScreen';
import { FlatList, TextInput } from 'react-native';

async function wait( ms = 0 )
{
    await renderer.act( () =>
    {
        return new Promise( resolve =>
        {
            setTimeout( resolve, ms );
        } );
    } );
}

describe( '<MovieScreen /> tests', () =>
{
    const initialState = { output: 10 }

    const mockStore = configureStore()
    let store = mockStore( initialState )

    it( 'Screen Shows FlatList', () =>
    {

        const component = renderer.create(
            <Provider store={store}>
                <MoviesScreen />
            </Provider>,
        );

        expect( () => component.root.findByType( FlatList ) ).not.toThrow();
    } );

    it( 'Screen Shows InputText', () =>
    {
        const component = renderer.create(
            <Provider store={store}>

                <MoviesScreen />
            </Provider>,
        );

        expect( () => component.root.findByType( TextInput ) ).not.toThrow();
    } );
    it( 'Screen Have TextInput With Place Holder', async () =>
    {
        const component = (
            <Provider store={store}>
                <MoviesScreen />
            </Provider>
        );

        const { findByPlaceholderText } = render( component );

        const header = findByPlaceholderText( 'search...' );

        expect( header ).toBeTruthy();
    } );

    // it( "Search For A Movie When The Movie Name is Typed", () =>
    // {
    //     const { getByPlaceholderText, getAllByText } = render( <MoviesScreen /> );
    //     fireEvent.changeText( getByPlaceholderText( "search..." ), "Venom" );
    //     const mockedData = {
    //         request: {
    //             query: "",
    //             variables: {
    //                 page: 1,
    //             }
    //         },
    //         result: {

    //         },
    //     };
    //     const component = renderer.create(
    //         <Provider mocks={[mockedData]} addTypename={false} >
    //             <MoviesScreen />
    //         </Provider>,
    //     );
    //     expect( () =>
    //     {
    //         component.root.findByProps( {
    //             children: 'Venom',
    //         } );
    //     } );
    // } );

    it( 'Render the component correctly ', () =>
    {
        store = mockStore( initialState )


        const navigate = jest.fn();
        const tree = renderer.create( <Provider store={store}><MoviesScreen navigation={{ navigate }} /></Provider> ).toJSON();
        expect( tree ).toMatchSnapshot();
    } );
} );