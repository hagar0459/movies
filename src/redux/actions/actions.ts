/**
 * @flow
 * Created by Hagar Abdelghafar on 22.10.2021
 */

import
{
    GET_MOVIES_LIST_SUCCESS,
    GET_MOVIES_LIST_ATTEMPT,
    GET_MOVIES_LIST_FAIL,
    GET_FAVOURITE_LIST_SUCCESS,
    GET_FAVOURITE_LIST_ATTEMPT,
    GET_FAVOURITE_LIST_FAIL,
    UPDATE_FAVOURITE_SUCCESS,
    UPDATE_FAVOURITE_ATTEMPT,
    UPDATE_FAVOURITE_FAIL,
    CREAT_TOKEN_ATTEMPT,
    CREAT_TOKEN_FAIL,
    CREAT_TOKEN_SUCCESS,
    LOGIN_SUCCESS,
    LOGIN_ATTEMPT,
    LOGIN_FAIL,
    GET_SESSION_ATTEMPT,
    GET_SESSION_FAIL,
    GET_SESSION_SUCCESS,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAIL,
    GET_USER_DETAILS_ATTEMPT,
    GET_GENER_ATTEMPT,
    GET_GENER_FAIL,
    GET_GENER_SUCCESS,

} from './types';

import axios from 'axios';
import { API_KEY, BASE_URL } from '../../config/index'
export const GetGenerAction = () =>
{
    let URL = BASE_URL + '/genre/movie/list?api_key=' + API_KEY + '&language=en-US'

    return dispatch =>
    {

        dispatch( { type: GET_GENER_ATTEMPT } );
        axios
            .get( URL, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            } )
            .then( response =>
            {
                try
                {

                    dispatch( { type: GET_GENER_SUCCESS, payload: response.data.genres } );
                } catch ( e )
                {
                    dispatch( { type: GET_GENER_FAIL, error: e } );
                }
            } )
            .catch( error =>
            {
                dispatch( { type: GET_GENER_FAIL, error: error } );

            } );
    };
};


export const GetFavouriteList = ( account_id: number, page: number, session_id: string ) =>
{
    let URL = BASE_URL + '/account/' + account_id + '/favorite/movies?api_key=' + API_KEY + '&language=en-US&page=' + page + '&session_id=' + session_id
    return dispatch =>
    {
        dispatch( { type: GET_FAVOURITE_LIST_ATTEMPT } );

        axios
            .get( URL, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            } )
            .then( response =>
            {
                try
                {


                    dispatch( { type: GET_FAVOURITE_LIST_SUCCESS, payload: response.data.results, pages: response.data.total_pages } );
                } catch ( e )
                {

                    dispatch( { type: GET_FAVOURITE_LIST_FAIL, error: e } );
                }
            } )
            .catch( error =>
            {

                dispatch( { type: GET_FAVOURITE_LIST_FAIL, error: error } );

            } );
    };
};
export const SearchMoviesList = ( page: number, query: string ) =>
{
    let URL = BASE_URL + '/search/movie?api_key=' + API_KEY + '&language=en-US&page=' + page + '&query=' + query
    return dispatch =>
    {

        dispatch( { type: GET_MOVIES_LIST_ATTEMPT } );

        axios
            .get( URL, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            } )
            .then( response =>
            {
                try
                {
                    dispatch( { type: GET_MOVIES_LIST_SUCCESS, payload: response.data.session_id } );
                } catch ( e )
                {
                    dispatch( { type: GET_MOVIES_LIST_FAIL, error: e } );
                }
            } )
            .catch( error =>
            {
                dispatch( { type: GET_MOVIES_LIST_FAIL, error: error } );

            } );
    };
};
export const GetMoviesListAction = ( page: number, session_id: string ) =>
{
    let URL = BASE_URL + '/discover/movie?api_key=' + API_KEY + '&language=en-US&page=' + page + '&session_id=' + session_id
    return dispatch =>
    {

        dispatch( { type: GET_MOVIES_LIST_ATTEMPT } );

        axios
            .get( URL, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            } )
            .then( response =>
            {
                try
                {

                    dispatch( { type: GET_MOVIES_LIST_SUCCESS, payload: response.data.results, pages: response.data.total_pages } );
                } catch ( e )
                {
                    dispatch( { type: GET_MOVIES_LIST_FAIL, error: e } );
                }
            } )
            .catch( error =>
            {
                dispatch( { type: GET_MOVIES_LIST_FAIL, error: error } );

            } );
    };
};
export const GetUserDetails = ( session: string ) =>
{
    let URL = BASE_URL + '/account?api_key=' + API_KEY + '&session_id=' + session
    return dispatch =>
    {

        dispatch( { type: GET_USER_DETAILS_ATTEMPT } );

        axios
            .get( URL, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            } )
            .then( response =>
            {
                try
                {
                    dispatch( GetFavouriteList( response.data.id, 1, session ) )
                    dispatch( { type: GET_USER_DETAILS_SUCCESS, payload: response.data.id } );

                } catch ( e )
                {
                    dispatch( { type: GET_USER_DETAILS_FAIL, error: e } );
                }
            } )
            .catch( error =>
            {
                dispatch( { type: GET_MOVIES_LIST_FAIL, error: error } );

            } );
    };
};
export const CreateSessionAction = ( token: string ) =>
{
    let URL = BASE_URL + '/authentication/session/new?api_key=' + API_KEY;
    return dispatch =>
    {
        var formData = new FormData();
        formData.append( 'request_token', token );
        dispatch( { type: GET_SESSION_ATTEMPT } );

        axios
            .post( URL, formData, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            } )
            .then( response =>
            {
                try
                {
                    dispatch( GetMoviesListAction( 1, response?.data?.session_id ) )

                    dispatch( GetUserDetails( response?.data?.session_id, ) )

                    dispatch( { type: GET_SESSION_SUCCESS, payload: response?.data?.session_id } );
                } catch ( e )
                {
                    dispatch( { type: GET_SESSION_FAIL, error: e } );
                }
            } )
            .catch( error =>
            {
                dispatch( { type: GET_SESSION_FAIL, error: error } );

            } );
    };
};
export const LoginAction = ( token: string ) =>
{
    let URL = BASE_URL + '/authentication/token/validate_with_login?api_key=' + API_KEY;
    return dispatch =>
    {
        var formData = new FormData();
        formData.append( 'username', 'hagar0459' );
        formData.append( 'password', 'qazxsw' );
        formData.append( 'request_token', token );
        dispatch( { type: LOGIN_ATTEMPT } );

        axios
            .post( URL, formData, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            } )
            .then( response =>
            {
                try
                {
                    dispatch( CreateSessionAction( response.data.request_token ) )
                    dispatch( GetGenerAction() )
                    dispatch( { type: LOGIN_SUCCESS, payload: response.data } );
                } catch ( e )
                {
                    dispatch( { type: LOGIN_FAIL, error: e } );
                }
            } )
            .catch( error =>
            {
                dispatch( { type: LOGIN_FAIL, error: error } );

            } );
    };
};
export const CreatTokenAction = () =>
{
    let URL = BASE_URL + '/authentication/token/new?api_key=' + API_KEY;

    return ( dispatch: ( arg0: { ( dispatch: any ): void; type?: string; payload?: any; error?: any; } ) => void ) =>
    {
        {


            dispatch( { type: CREAT_TOKEN_ATTEMPT } );

            axios
                .get( URL, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                } )
                .then( response =>
                {
                    try
                    {
                        if ( response.data.success )
                        {
                            dispatch( LoginAction( response.data.request_token ) )
                            dispatch( { type: CREAT_TOKEN_SUCCESS, payload: response.data.request_token } );

                        } else
                        {
                            dispatch( { type: CREAT_TOKEN_FAIL, error: '' + response.data.success } );

                        }
                    } catch ( e )
                    {

                        dispatch( { type: CREAT_TOKEN_FAIL, error: e } );
                    }
                } )
                .catch( error =>
                {

                    dispatch( { type: CREAT_TOKEN_FAIL, error: error } );

                } );
        };
    };
};
export const updateFavouriteAction = ( account_id: number, movie_id: string, favorite_state: boolean, session_id: string ) =>
{
    let URL = BASE_URL + '/account/' + account_id + '/favorite?api_key=' + API_KEY + '&session_id=' + session_id
    return dispatch =>
    {

        var formData = new FormData();
        formData.append( 'media_type', "movie" );
        formData.append( 'media_id', movie_id );
        formData.append( 'favorite', favorite_state );
        dispatch( { type: UPDATE_FAVOURITE_ATTEMPT } );
        axios
            .post( URL, formData, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            } )
            .then( response =>
            {
                try
                {

                    dispatch( GetFavouriteList( account_id, 1, session_id ) )
                    dispatch( { type: UPDATE_FAVOURITE_SUCCESS, payload: response.data } );
                } catch ( e )
                {

                    dispatch( { type: UPDATE_FAVOURITE_FAIL, error: e } );
                }
            } )
            .catch( error =>
            {

                dispatch( { type: UPDATE_FAVOURITE_FAIL, error: error } );

            } );
    };
};

export const GetSearchAction = ( searchText: string, page: number ) =>
{
    let URL = BASE_URL + '/search/movie?api_key=' + API_KEY + '&query=' + searchText + '&page=' + page

    return dispatch =>
    {

        dispatch( { type: GET_MOVIES_LIST_ATTEMPT } );
        axios
            .get( URL, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            } )
            .then( response =>
            {
                try
                {

                    dispatch( { type: GET_MOVIES_LIST_SUCCESS, payload: response.data.results, pages: response.data.total_pages } );
                } catch ( e )
                {

                    dispatch( { type: GET_MOVIES_LIST_FAIL, error: e } );
                }
            } )
            .catch( error =>
            {

                dispatch( { type: GET_MOVIES_LIST_FAIL, error: error } );

            } );
    };
};

