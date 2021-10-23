/**
 * @flow
 * Created by Hagar Abdelghafar on 22.10.2021
 */


import React from 'react';
import
{
    ActivityIndicator,
    View,
} from 'react-native';
export const FooterComponent = () =>
{

    return (
        <View style={{ height: 20 }}>
            <ActivityIndicator size='large' />
        </View>
    );

};