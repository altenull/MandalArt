import { handleActions, createAction } from 'redux-actions';

import { Map } from 'immutable';
import * as AuthAPI from 'lib/api/auth';
import { pender } from 'redux-pender';

const SET_LOGGED_INFO = 'user/SET_LOGGED_INFO';
const SET_VALIDATED = 'user/SET_VALIDATED';
const LOGOUT = 'user/LOGOUT';
const CHECK_STATUS = 'user/CHECK_STATUS';

export const setLoggedInfo = createAction(SET_LOGGED_INFO);
export const setValidated = createAction(SET_VALIDATED);
export const logout = createAction(LOGOUT, AuthAPI.logout);
export const checkStatus = createAction(CHECK_STATUS, AuthAPI.checkStatus);

const initialState = Map({
    loggedInfo: Map({
        nickname: null
    }),
    logged: false,
    validated: false
});

export default handleActions({
    [SET_LOGGED_INFO]: (state, action) => state.set('loggedInfo', Map(action.payload)).set('logged', true),
    [SET_VALIDATED]: (state, action) => state.set('validated', action.payload),
    ...pender({
        type: CHECK_STATUS,
        onSuccess: (state, action) => state.set('loggedInfo', Map(action.payload.data)).set('validated', true), 
        onFailure: (state, action) => initialState
    })
}, initialState);