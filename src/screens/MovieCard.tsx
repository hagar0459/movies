/**
 * @flow
 * Created by Hagar Abdelghafar on 22.10.2021
 */

import React, { FC } from 'react';
import { Platform, Image, StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import type { MovieItemType } from '../redux/models/MovieResultType';
type Props = {
    info: MovieItemType;
    onPress( item: MovieItemType, geners: [] ): void;
    onUpdateFavourite( id: number, state: boolean ): void;
    index: number;
    showFavIcon: boolean
};
import { useDispatch, useSelector } from 'react-redux';
import { SharedElement } from 'react-navigation-shared-element';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { IMAGE_BASE_URL } from '../config';
import { styles } from '../../utils/styles';

export const MovieCard: FC<Props> = ( { info, onPress, onUpdateFavourite, index, showFavIcon }: Props ) =>
{
    debugger;
    const GetFavouriteReducer = useSelector( state => state.GetFavouriteReducer );
    const GetGenerReducer = useSelector( state => state.GetGenerReducer );

    const getGeners = ( geners: any[], reducer: { payload: string | any[]; } ) =>
    {
        let genersNames = [];
        for ( let i = 0; i < geners.length; i++ )
        {
            for ( let d = 0; d < reducer.payload.length; d++ )
            {
                if ( geners[i] === reducer.payload[d].id )
                {
                    genersNames.push( reducer.payload[d].name )
                }
            }
        }
        return genersNames;
    }

    const getFavouriteState = ( id: number ) =>
    {
        if ( GetFavouriteReducer?.payload && GetFavouriteReducer?.payload?.length > 0 )
        {
            for ( let i = 0; i < GetFavouriteReducer?.payload?.length; i++ )
            {
                if ( GetFavouriteReducer?.payload[i]?.id === id )
                {
                    return true
                }
            }
        } else 
        {
            return false
        }
        return false

    }

    const renderContent = () =>
    {


        return (
            <View style={styles.cardContainer} >
                <View>
                    {/* <SharedElement id={`item.${ info.id }.image_url`}> */}

                    <Image source={{ uri: IMAGE_BASE_URL + info.poster_path }}
                        resizeMode="cover" style={styles.cardImage} />
                    {/* </SharedElement> */}
                    {showFavIcon &&
                        <TouchableHighlight
                            underlayColor={Platform.OS === 'ios' ? "transparent" : ''}
                            activeOpacity={0.2}
                            onPress={() => onUpdateFavourite( info.id, getFavouriteState( info.id ) )}>
                            <Icon
                                style={styles.cardFavIcon}
                                name="favorite"
                                color={getFavouriteState( info.id ) ? 'red' : 'grey'}
                                size={30}
                            ></Icon>
                        </TouchableHighlight>
                    }
                    <View style={styles.languageContainer}>
                        <Text style={styles.language}>{info.original_language}</Text>
                    </View>
                </View>
                {/* <SharedElement id={`item.${ info.id }.cardInfo`}> */}
                <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginVertical: 5 }}>
                    <View style={{ flex: 4 }}>
                        <Text style={styles.title}>{info.title}</Text>
                        <Text style={styles.releaseDate}>{info.release_date}</Text>
                    </View>
                    <View style={{ flex: 2, marginHorizontal: 10, alignItems: 'center' }}>
                        <Text style={styles.votes}>{info.vote_average}</Text>

                    </View>
                </View>
                {/* </SharedElement> */}
            </View>
        );

    };
    return (
        <TouchableOpacity style={styles.card}
            onPress={() =>
            {
                onPress( info, getGeners( info.genre_ids, GetGenerReducer ) );
            }}>
            {renderContent()}
        </TouchableOpacity>
    );
}
