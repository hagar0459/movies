/**
 * @flow
 * Created by Hagar Abdelghafar on 22.10.2021
 */

import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MoviesScreen } from '../screens/MoviesScreen';
import { FavouritesScreen } from '../screens/FavouritesScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function MyTabs()
{
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
            tabBarActiveTintColor: '#fff',
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 50,
                right: 50,
                elevation: 0,
                justifyContent: 'space-between',
                backgroundColor: '#505050',
                paddingLeft: 30,
                borderRadius: 30,
                height: 60,
            },
        }}>
            <Tab.Screen name="  "

                options={{
                    tabBarIcon: ( { focused } ) => (
                        <View
                            style={{
                                position: 'absolute',
                                top: focused ? 0 : 0,
                                flexDirection: 'column',
                                backgroundColor: focused ? 'red' : 'transperent',
                                borderRadius: 60,
                                height: focused ? 50 : 50,
                                left: 10,
                                right: 10,
                                marginVertical: 5,
                                width: 100,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Icon
                                name="movie-filter"
                                size={30}
                                color={focused ? 'white' : 'grey'}
                            ></Icon>

                        </View>
                    ),
                }
                }
                component={MoviesScreen} />
            <Tab.Screen name=" "
                options={{
                    tabBarIcon: ( { focused } ) => (
                        <View
                            style={{
                                position: 'absolute',
                                top: focused ? 0 : 0,
                                flexDirection: 'column',
                                backgroundColor: focused ? 'red' : 'transperent',
                                borderRadius: 60,
                                height: focused ? 50 : 50,
                                left: 10,
                                right: 10,
                                marginVertical: 5,
                                width: 100,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Icon
                                name="favorite"
                                size={30}
                                color={focused ? 'white' : 'grey'}
                            ></Icon>

                        </View>
                    ),
                }
                } component={FavouritesScreen} />
        </Tab.Navigator >
    );
}
export default MyTabs;