/**
 * @flow
 * Created by Hagar Abdelghafar on 22.10.2021
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, FlatList, ListRenderItemInfo, View, BackHandler } from 'react-native';
import { MovieItemType } from '../redux/models/MovieResultType';
import { MovieCard } from './MovieCard';
import { updateFavouriteAction, GetFavouriteList } from '../redux/actions/actions'
import { FooterComponent } from './FooterComponent';
import { styles } from '../../utils/styles';

export const FavouritesScreen = ( { navigation } ) =>
{
    const dispatch = useDispatch();
    const GetFavouriteReducer = useSelector( state => state.GetFavouriteReducer );
    const GetUserDetailsReducer = useSelector( state => state.GetUserDetailsReducer );
    const CreateSessionReducer = useSelector( state => state.CreateSessionReducer );
    const [favourits, setFavourites] = useState( [] )
    const [loading, setLoading] = useState( true );
    const [currentPage, setCurrentPage] = useState( 1 )
    const [sessionId, setSessionId] = useState( null );
    const [accountId, setAccountId] = useState( null );

    const loadMore = () =>
    {

        if ( loading || currentPage === GetFavouriteReducer?.pages )
        {
            return;
        } else if ( GetFavouriteReducer.payload && GetFavouriteReducer.payload.length > 0 )
        {
            dispatch( GetFavouriteList( accountId, currentPage + 1, '' + sessionId ) )
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
        if ( CreateSessionReducer.payload && !CreateSessionReducer.loading )
        {
            setSessionId( CreateSessionReducer.payload )
        }
    }, [CreateSessionReducer.loading] );

    useEffect( () =>
    {
        if ( GetFavouriteReducer.payload.length > 0 && currentPage === 1 )
        {
            setFavourites( GetFavouriteReducer.payload );
            setLoading( false )
        } else if (
            GetFavouriteReducer.payload.length > 0
        )
        {
            setFavourites( [...favourits, ...GetFavouriteReducer.payload] );
            setLoading( false )
        }

    }, [GetFavouriteReducer.payload] );


    const renderFavourite = ( { item, index, }: ListRenderItemInfo<MovieItemType> ) =>
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
    useEffect( () =>
    {
        const backHandler = BackHandler.addEventListener( 'hardwareBackPress', () => true )
        return () => backHandler.remove()
    }, [] )
    return (
        <SafeAreaView style={{ flex: 1 }} >

            <View style={{ flex: 1 }}>
                <FlatList
                    keyboardShouldPersistTaps='never'
                    style={styles.moviesList}
                    contentContainerStyle={styles.moviesListContainer}
                    data={favourits}
                    keyExtractor={item => `${ item.id }`}
                    renderItem={renderFavourite}
                    onEndReached={loadMore}
                    ListFooterComponent={FooterComponent}
                />
            </View>
        </SafeAreaView>
    );
};



