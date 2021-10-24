/**
 * @format
 */

import 'react-native';
import React from 'react';
import { MovieCard } from '../src/screens/MovieCard';
import renderer, { act } from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from '../src/navigation/AppNavigator';
import { render, fireEvent } from '@testing-library/react-native';
import { Image, Text } from 'react-native';

describe( '<MovieCard /> tests', () =>
{
  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store = mockStore( initialState )


  it( 'clicking on one item takes you to the details screen', async () =>
  {
    const component = (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>

    );

    const { findByTestId } = render( component );
    const toClick = await findByTestId( 'CardView' );
    await act( async () =>
    {
      fireEvent( toClick, 'press' );
    } );
    const Title = await findByTestId( 'DetailsTitle' );
    const Review = await findByTestId( 'DetailsDescription' );

    expect( Title ).toBeTruthy();
    expect( Review ).toBeTruthy();
  } );
  it( 'Screen Shows Text', () =>
  {

    const component = renderer.create(
      <Provider store={store}><MovieCard
        showFavIcon={true}
        index={0}
        onPress={() => { }}
        onUpdateFavourite={() => { }}
        info={{
          adult: false,
          backdrop_path: "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
          genre_ids: [878, 28],
          id: 580489,
          original_language: "en",
          original_title: "Venom: Let There Be Carnage",
          overview: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
          popularity: 7484.462,
          poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
          release_date: "2021-09-30",
          title: "Venom: Let There Be Carnage",
          video: false,
          vote_average: 7,
          vote_count: 1059
        }} /></Provider>,
    );

    expect( () => component.root.findByType( Text ) ).not.toThrow();
  } );
  it( 'Screen Shows Image', () =>
  {

    const component = renderer.create(
      <Provider store={store}><MovieCard
        showFavIcon={true}
        index={0}
        onPress={() => { }}
        onUpdateFavourite={() => { }}
        info={{
          adult: false,
          backdrop_path: "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
          genre_ids: [878, 28],
          id: 580489,
          original_language: "en",
          original_title: "Venom: Let There Be Carnage",
          overview: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
          popularity: 7484.462,
          poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
          release_date: "2021-09-30",
          title: "Venom: Let There Be Carnage",
          video: false,
          vote_average: 7,
          vote_count: 1059
        }} /></Provider>,
    );

    expect( () => component.root.findByType( Image ) ).not.toThrow();
  } );
  it( 'Render the component correctly ', () =>
  {

    const navigate = jest.fn();
    const tree = renderer.create( <Provider store={store}><MovieCard
      showFavIcon={true}
      index={0}
      onPress={() => { }}
      onUpdateFavourite={() => { }}
      info={{
        adult: false,
        backdrop_path: "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
        genre_ids: [878, 28],
        id: 580489,
        original_language: "en",
        original_title: "Venom: Let There Be Carnage",
        overview: "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
        popularity: 7484.462,
        poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
        release_date: "2021-09-30",
        title: "Venom: Let There Be Carnage",
        video: false,
        vote_average: 7,
        vote_count: 1059
      }} /></Provider> ).toJSON();
    expect( tree ).toMatchSnapshot();
  } );
} );