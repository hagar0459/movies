/**
 * @flow
 * Created by Hagar Abdelghafar on 22.10.2021
 */

import React, { FC, useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, StyleSheet, SafeAreaView, TextInput, View, ListRenderItemInfo, BackHandler } from 'react-native';
import { MovieItemType } from '../redux/models/MovieResultType';
import { MovieCard } from './MovieCard';
import { GetMoviesListAction, updateFavouriteAction, GetSearchAction } from '../redux/actions/actions'
import { FooterComponent } from './FooterComponent';
import { styles } from '../../utils/styles';

export const MoviesScreen: FC = ( { navigation } ) =>
{
    const dispatch = useDispatch();

    let ref = useRef<FlatList<MovieItemType>>( null );
    const GetMoviesReducer = useSelector( state => state.GetMoviesReducer );
    const GetUserDetailsReducer = useSelector( state => state.GetUserDetailsReducer );
    const CreateSessionReducer = useSelector( state => state.CreateSessionReducer );

    const [searchTxt, setSearchTxt] = useState( '' );
    const [movies, setMovies] = useState( [] )
    const [loading, setLoading] = useState( true );
    const [currentPage, setCurrentPage] = useState( 1 )
    const [sessionId, setSessionId] = useState( null );
    const [accountId, setAccountId] = useState( null );

    //load more for movies
    const loadMore = () =>
    {
        if ( loading || currentPage === GetMoviesReducer.pages )
        {
            return;
        } else if ( GetMoviesReducer.payload && GetMoviesReducer.payload.length > 0 )
        {
            dispatch( GetMoviesListAction( currentPage + 1, '' + sessionId ) )
            setCurrentPage( currentPage + 1 );
            setLoading( true )
        }
    };

    useEffect( () =>
    {
        if ( GetUserDetailsReducer.payload && !GetUserDetailsReducer.loading )
        {
            setAccountId( GetUserDetailsReducer.payload )
        }
    }, [GetUserDetailsReducer.loading] );
    useEffect( () =>
    {
        const backHandler = BackHandler.addEventListener( 'hardwareBackPress', () => true )
        return () => backHandler.remove()
    }, [] )
    useEffect( () =>
    {
        if ( CreateSessionReducer.payload && !CreateSessionReducer.loading )
        {
            setSessionId( CreateSessionReducer.payload )
        }
    }, [CreateSessionReducer.loading] );
    useEffect( () =>
    {
        if ( GetMoviesReducer.payload.length > 0 && currentPage === 1 )
        {
            setMovies( GetMoviesReducer.payload );
            setLoading( false )
        } else if ( GetMoviesReducer.payload.length > 0 )
        {
            setMovies( [...movies, ...GetMoviesReducer.payload] );
            setLoading( false )
        }
    }, [GetMoviesReducer.payload] );

    const renderCharacter = ( { item, index, }: ListRenderItemInfo<MovieItemType> ) =>
    {
        return (
            <MovieCard
                info={item}
                showFavIcon={true}
                onPress={( item: any, geners: [] ) =>
                {
                    navigation.navigate( 'MovieDetails', {
                        item: item,
                        geners: geners
                    } );
                }}
                onUpdateFavourite={( movie_id, fav_state ) =>
                {
                    if ( accountId && sessionId )
                    {
                        dispatch( updateFavouriteAction( accountId, '' + movie_id, !fav_state, sessionId ) )
                    }
                }}
                index={index}
            />
        );
    };
    return (
        <SafeAreaView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='search...'
                    onChangeText={( text ) =>
                    {
                        ref.current?.scrollToOffset( { animated: true, offset: 0 } );
                        setSearchTxt( text );
                        setCurrentPage( 1 )
                        if ( text && text.length > 0 )
                        {
                            dispatch( GetSearchAction( text, 1 ) )
                        } else
                        {
                            dispatch( GetMoviesListAction( 1, '' + sessionId ) )

                        }
                    }}
                    autoCorrect={false}
                    value={searchTxt}
                />
            </View>
            <FlatList
                keyboardShouldPersistTaps='never'
                ref={ref}
                style={styles.moviesList}
                contentContainerStyle={styles.moviesListContainer}
                data={movies}
                keyExtractor={item => `${ item.id }`}
                renderItem={renderCharacter}
                onEndReached={loadMore}
                ListFooterComponent={FooterComponent}
            />
        </SafeAreaView>
    );
};
