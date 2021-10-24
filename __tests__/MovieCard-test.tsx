/**
 * @format
 */

import 'react-native';
import React from 'react';
import { MovieCard } from '../src/screens/MovieCard';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

// Note: test renderer must be required after react-native.
describe( '<MovieCard /> tests', () =>
{
  const initialState = { output: 10 }
  const mockStore = configureStore()
  let store, wrapper

  it( 'Render the component correctly ', () =>
  {
    store = mockStore( initialState )

    // const route = {
    //   params: {
    //     item: {
    //       adult: false,
    //       backdrop_path: "/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg",
    //       genre_ids: [28, 12, 18, 14, 878],
    //       id: 438631,
    //       original_language: "en",
    //       original_title: "Dune",
    //       overview: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    //       popularity: 5449.083,
    //       poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    //       release_date: "2021-09-15",
    //       title: "Dune",
    //       video: false,
    //       vote_average: 8.1,
    //       vote_count: 2176
    //     }, geners: ["Action", "Adventure", "Drama", "Fantasy", "Science Fiction"]
    //   }
    // }
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