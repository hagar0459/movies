/**
 * @flow
 * Created by Hagar Abdelghafar on 22.10.2021
 */

import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, View, } from 'react-native';
import { CreatTokenAction } from '../redux/actions/actions'
import { useDispatch } from 'react-redux';
import AppImage from '../../imgs';
import { styles } from '../../utils/styles';


const SplashScreen = ( { navigation } ) =>
{
    const dispatch = useDispatch();

    const [start, setstart] = useState( false )
    if ( start )
    {
        navigation.navigate( 'Tabs' )
    }

    useEffect( () =>
    {
        timeoutHandle = setTimeout( () =>
        {
            dispatch( CreatTokenAction() );
            setstart( true )
        }, 4000 );

    }, [] );
    return (
        <SafeAreaView >

            <View style={[styles.container, {
                justifyContent: 'center',
                alignItems: 'center'
            }]}>
                <Image source={AppImage.splash} resizeMode='contain' style={styles.splashImage} />
            </View>
        </SafeAreaView >
    );
};



export default SplashScreen;