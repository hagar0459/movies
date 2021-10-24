/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';

describe( 'Testing App', () =>
{
  it( 'renders correctly', () =>
  {
    renderer.create( <App /> );
  } );

} );