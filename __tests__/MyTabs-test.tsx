/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MyTabs from '../src/navigation/MyTabs';

describe( '<MyTabs /> tests', () =>
{
    it( 'Render the component correctly ', () =>
    {
        const navigate = jest.fn();
        const tree = renderer.create( <MyTabs /> ).toJSON();
        expect( tree ).toMatchSnapshot();
    } );
} );