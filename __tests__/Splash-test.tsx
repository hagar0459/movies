/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import SplashScreen from '../src/screens/SplashScreen';
import { Image } from 'react-native';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

// async function wait( ms = 0 )
// {
//     await renderer.act( () =>
//     {
//         return new Promise( resolve =>
//         {
//             setTimeout( resolve, ms );
//         } );
//     } );
// }

describe( '<SplashScreen /> tests', () =>
{
    const initialState = { output: 10 }

    const mockStore = configureStore()
    let store = mockStore( initialState )
    const navigate = jest.fn();
    it( 'Screen Shows ImageView', () =>
    {

        const component = renderer.create(
            <Provider store={store}>
                <SplashScreen navigation={{ navigate }} />
            </Provider>,
        );

        expect( () => component.root.findByType( Image ) ).not.toThrow();
    } );


    it( 'Render the component correctly ', () =>
    {
        store = mockStore( initialState )


        const navigate = jest.fn();
        const tree = renderer.create( <Provider store={store}><SplashScreen navigation={{ navigate }} /></Provider> ).toJSON();
        expect( tree ).toMatchSnapshot();
    } );
} );