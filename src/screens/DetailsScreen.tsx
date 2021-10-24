/**
 * @flow
 * Created by Hagar Abdelghafar on 22.10.2021
 */

import React, { useRef } from 'react';
import
{ StyleSheet, ImageBackground, SafeAreaView, Text, View } from 'react-native';
// import { SharedElement } from 'react-navigation-shared-element';
import * as Animatable from 'react-native-animatable';
import { AppMetrics } from '../../utils/Dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../utils/styles';
import { ScrollView } from 'react-native-gesture-handler';
import { IMAGE_BASE_URL } from '../config';

const DetailsScreen = ( { navigation, route } ) =>
{
    const { item, geners } = route.params;
    debugger;
    const buttonRef = useRef();



    return (

        <SafeAreaView>

            <View style={styles.container}>
                {/* <SharedElement id={`item.${ item.id }.image_url`}> */}

                <ImageBackground key={`item.${ item.id }.image_url`}
                    style={{ width: '100%', height: AppMetrics.screenHeight * .4 }} source={{ uri: IMAGE_BASE_URL + item.poster_path }} resizeMode='cover' borderRadius={20} >
                    <Animatable.View
                        key={`item.${ item.id }.view`}
                        ref={buttonRef}
                        animation='fadeIn'
                        duration={600}
                        delay={300}
                        style={[StyleSheet.absoluteFillObject]}
                    >

                        <Icon
                            key={`item.${ item.id }.close`}
                            name='close'
                            size={28}
                            color='#fff'
                            style={{
                                position: 'absolute',
                                top: 40,
                                right: 20,
                                zIndex: 2
                            }}
                            onPress={() =>
                            {
                                buttonRef.current.fadeOut( 100 ).then( () =>
                                {
                                    navigation.goBack();
                                } );
                            }}
                        />
                    </Animatable.View>
                    <View style={styles.languageContainer} key={`item.${ item.id }.langView`}>
                        <Text key={`item.${ item.id }.langText`}
                            style={styles.language}>{item.original_language}</Text>
                    </View>
                </ImageBackground>
                {/* </SharedElement> */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'column' }}>
                        {/* <SharedElement id={`item.${ item.id }.cardInfo`}> */}
                        <View key={`item.${ item.id }.infoView`}
                            style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', padding: 20 }}>
                            <View style={{ flex: 4 }}>
                                <Text
                                    key={`item.${ item.id }.infoTitle`}
                                    style={styles.title}>{item.title}</Text>
                                <Text key={`item.${ item.id }.infoRealese`}
                                    style={styles.releaseDate}
                                >{item.release_date}</Text>
                            </View>
                            <View style={{ flex: 2, marginHorizontal: 10 }}>
                                <Text key={`item.${ item.id }.infoVotes`}
                                    style={styles.votes}>{item.vote_average}<Text style={styles.votes}>/{item.vote_count}</Text></Text>
                            </View>
                        </View>
                        {/* </SharedElement> */}
                        <Text key={`item.${ item.id }.infoOverview`}
                            style={styles.overview}>{item.overview}</Text>
                        <View style={styles.tagContainer}>
                            {geners.map( ( item, key ) => (
                                <View
                                    key={`item.${ item.id }.tagView`}
                                    style={styles.tagItemContainer}>
                                    <Text key={`item.${ item.id }.tagText`}
                                        style={styles.tagItem}>{item}</Text>
                                </View>
                            ) )}

                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>

    );
};



// DetailsScreen.sharedElements = route =>
// {
//     const { item } = route.params;
//     return [
//         {
//             id: `item.${ item.id }.image_url`,
//             animation: 'move',
//             resize: 'clip'
//         },
//         {
//             id: `item.${ item.id }.cardInfo`,
//             animation: 'fade',
//             resize: 'clip'
//         }
//     ];
// };
export default DetailsScreen;
