/**
 * @flow
 * Created by Hagar Abdelghafar on 22.10.2021
 */

import { combineReducers } from 'redux';
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
} from '../actions/types';

const INITIAL_STATE = { error: '', payload: [], loading: true };
const GetFavouriteReducer = ( state = INITIAL_STATE, action: { type: any; error: any; payload: any; } ) =>
{
    switch ( action.type )
    {

        case GET_FAVOURITE_LIST_FAIL: {
            return { error: action.error, payload: null, loading: false };
        }
        case GET_FAVOURITE_LIST_SUCCESS: {
            return { error: 'success', payload: action.payload, loading: false, pages: action.pages };
        }
        default:
            return state;
    }
};
const GetMoviesReducer = ( state = INITIAL_STATE, action: { type: any; error: any; payload: any; } ) =>
{
    switch ( action.type )
    {
        case GET_MOVIES_LIST_FAIL: {
            return { error: action.error, payload: null, loading: false };
        }
        case GET_MOVIES_LIST_SUCCESS: {
            return { error: 'success', payload: action.payload, loading: false, pages: action.pages };
        }
        default:
            return state;
    }
};

const UpdateFavouriteReducer = ( state = INITIAL_STATE, action: { type: any; error: any; payload: any; } ) =>
{
    switch ( action.type )
    {
        case UPDATE_FAVOURITE_FAIL: {
            return { error: action.error, payload: null, loading: false };
        }
        case UPDATE_FAVOURITE_SUCCESS: {
            return { error: 'success', payload: action.payload, loading: false };
        }
        default:
            return state;
    }
};

const CreateSessionReducer = ( state = INITIAL_STATE, action: { type: any; error: any; payload: any; } ) =>
{
    switch ( action.type )
    {
        case GET_SESSION_FAIL: {
            return { error: action.error, payload: null, loading: false };
        }
        case GET_SESSION_SUCCESS: {
            return { error: 'success', payload: action.payload, loading: false };
        }
        default:
            return state;
    }
};
const GetTokenReducer = ( state = INITIAL_STATE, action: { type: any; error: any; payload: any; } ) =>
{
    switch ( action.type )
    {
        case CREAT_TOKEN_FAIL: {
            return { error: action.error, payload: null, loading: false };
        }
        case CREAT_TOKEN_SUCCESS: {
            return { error: 'success', payload: action.payload, loading: false };
        }
        default:
            return state;
    }
};
const LoginReducer = ( state = INITIAL_STATE, action: { type: any; error: any; payload: any; } ) =>
{
    switch ( action.type )
    {
        case LOGIN_FAIL: {
            return { error: action.error, payload: null, loading: false };
        }
        case LOGIN_SUCCESS: {
            return { error: 'success', payload: action.payload, loading: false };
        }
        default:
            return state;
    }
};
const GetUserDetailsReducer = ( state = INITIAL_STATE, action: { type: any; error: any; payload: any; } ) =>
{
    switch ( action.type )
    {

        case GET_USER_DETAILS_FAIL: {
            return { error: action.error, payload: null, loading: false };
        }
        case GET_USER_DETAILS_SUCCESS: {
            return { error: 'success', payload: action.payload, loading: false };
        }
        default:
            return state;
    }
};
const GetGenerReducer = ( state = INITIAL_STATE, action: { type: any; error: any; payload: any; } ) =>
{
    switch ( action.type )
    {

        case GET_GENER_FAIL: {
            return { error: action.error, payload: null, loading: false };
        }
        case GET_GENER_SUCCESS: {
            return { error: 'success', payload: action.payload, loading: false };
        }
        default:
            return state;
    }
};
export default combineReducers( {
    GetTokenReducer: GetTokenReducer,
    CreateSessionReducer: CreateSessionReducer,
    GetMoviesReducer: GetMoviesReducer,
    GetFavouriteReducer: GetFavouriteReducer,
    UpdateFavouriteReducer: UpdateFavouriteReducer,
    LoginReducer: LoginReducer,
    GetUserDetailsReducer: GetUserDetailsReducer,
    GetGenerReducer: GetGenerReducer


} );
