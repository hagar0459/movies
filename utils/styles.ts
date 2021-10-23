import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create( {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',

    },
    splashImage: {
        width: '60%',
        marginHorizontal: '20%',
        height: '30%'
    },
    moviesList: {
        backgroundColor: '#fafafa',
    },
    moviesListContainer: {
        backgroundColor: '#fafafa',
        paddingVertical: 8,
        marginHorizontal: 8,
    },
    input: {
        flex: 1,
        marginTop: 10,
        fontSize: 18,
        paddingHorizontal: 10,
        backgroundColor: '#dcdcdc',
        borderRadius: 10,
        marginBottom: 10,
        width: '90%',
        marginHorizontal: '5%',
    }, inputContainer:
    {
        height: 60,
        width: '100%',
        backgroundColor: 'white'
    },
    cardContainer: {
        flexDirection: 'column',
        width: '100%',
        padding: 10
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardImage: {
        height: 200,
        width: '100%',
    },
    cardFavIcon: {
        position: 'absolute',
        bottom: 10,
        left: 20
    },
    title: {
        fontSize: 17,
    },
    releaseDate: {
        fontSize: 15,
        color: 'grey'
    },
    votes: {
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    languageContainer: {
        position: 'absolute',
        bottom: 10, right: 20,
        backgroundColor: 'white',
        borderRadius: 20
    }, language: {
        fontWeight: '600',
        fontSize: 15,
        margin: 10,
        textTransform: 'uppercase',
        color: 'red',
    }, overview: {
        fontSize: 17,
        padding: 20
    },
    tagItem: {
        color: 'white',
        fontSize: 14,
        margin: 7
    }, tagItemContainer: {
        marginLeft: 5,
        marginBottom: 5,
        backgroundColor: 'grey',
        borderRadius: 15,
    }, tagContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 20
    }
} );