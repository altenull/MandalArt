import { Map } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as AuthAPI from 'lib/api/auth';

// action types
const SET_LOGGED_INFO = 'user/SET_LOGGED_INFO'; // 로그인 정보 세팅
const SET_VALIDATED = 'user/SET_VALIDATED'; // 로그인 정보 검증
const SET_LOGIN_METHOD = 'user/SET_LOGIN_METHOD'; // 로그인 방법 세팅
const LOGOUT = 'user/LOGOUT'; // 로그아웃
const CHECK_STATUS = 'user/CHECK_STATUS'; // 상태 확인

// action creator
export const setLoggedInfo = createAction(SET_LOGGED_INFO);
export const setValidated = createAction(SET_VALIDATED);
export const setLoginMethod = createAction(SET_LOGIN_METHOD);
export const logout = createAction(LOGOUT, AuthAPI.logout);
export const checkStatus = createAction(CHECK_STATUS, AuthAPI.checkStatus);

// initial state
const initialState = Map({
    loggedInfo: Map({}),
    logged: false,
    validated: false,
    loginMethod: ''
});

// reducer
export default handleActions({
    [SET_LOGGED_INFO]: (state, action) => state.set('loggedInfo', Map(action.payload)).set('logged', true),
    [SET_VALIDATED]: (state, action) => state.set('validated', action.payload),
    [SET_LOGIN_METHOD] : (state, action) => state.set('loginMethod', action.payload),
    ...pender({
        type: CHECK_STATUS,
        onSuccess: (state, action) => state.set('validated', true), 
        onFailure: (state, action) => initialState
    })
}, initialState);