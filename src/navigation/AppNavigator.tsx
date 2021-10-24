/**
 * @flow
 * Created by Hagar Abdelghafar on 22.10.2021
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen'
import MyTabs from './MyTabs';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();
// const Stack = createSharedElementStackNavigator();

const options = {
    headerBackTitleVisible: false,
    cardStyleInterpolator: ( { current: { progress } } ) =>
    {
        return {
            cardStyle: {
                opacity: progress
            }
        };
    }
};
export function AppNavigator()
{
    return (


        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }} >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Tabs" component={MyTabs} />
                <Stack.Screen name="MovieDetails" component={DetailsScreen}
                    options={() => options} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}