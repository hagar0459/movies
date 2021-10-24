/**
 * @format
 */

import 'react-native';
import React from 'react';
import DetailsScreen from '../src/screens/DetailsScreen';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
describe( '<DetailsScreen /> tests', () =>
{
  it( 'Render the component correctly ', () =>
  {

    const route = {
      params: {
        item: {
          adult: false,
          backdrop_path: "/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg",
          genre_ids: [28, 12, 18, 14, 878],
          id: 438631,
          original_language: "en",
          original_title: "Dune",
          overview: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
          popularity: 5449.083,
          poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
          release_date: "2021-09-15",
          title: "Dune",
          video: false,
          vote_average: 8.1,
          vote_count: 2176
        }, geners: ["Action", "Adventure", "Drama", "Fantasy", "Science Fiction"]
      }
    }
    const navigate = jest.fn();
    const tree = renderer.create( <DetailsScreen route={route} navigation={{ navigate }} /> ).toJSON();
    expect( tree ).toMatchSnapshot();
  } );
} );