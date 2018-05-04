import { Map } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as AuthAPI from 'lib/api/auth';

// action types
const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const CHECK_EMAIL_EXISTS = 'auth/CEHCK_EMAIL_EXISTS';
const CHECK_NICKNAME_EXISTS = 'auth/CHECK_NICKNAME_EXISTS';
const LOCAL_REGISTER = 'auth/LOCAL_REGISTER';
const LOCAL_LOGIN = 'auth/LOCAL_LOGIN';
const SOCIAL_LOGIN = 'auth/SOCIAL_LOGIN';
const LOGOUT = 'auth/LOGOUT';
const SET_ERROR = 'auth/SET_ERROR';

// action creators
export const changeInput = createAction(CHANGE_INPUT);
export const initializeForm = createAction(INITIALIZE_FORM);

export const checkEmailExists = createAction(CHECK_EMAIL_EXISTS, AuthAPI.checkEmailExists);
export const checkNicknameExists = createAction(CHECK_NICKNAME_EXISTS, AuthAPI.checkNicknameExists);

export const localRegister = createAction(LOCAL_REGISTER, AuthAPI.localRegister);
export const localLogin = createAction(LOCAL_LOGIN, AuthAPI.localLogin);
export const socialLogin = createAction(SOCIAL_LOGIN);

export const logout = createAction(LOGOUT, AuthAPI.logout);

export const setError = createAction(SET_ERROR);

// initial state
const initialState = Map({
    register: Map({
        form: Map({
            email: '',
            password: '',
            nickname: ''
        }),
        exists: Map({
            email: false,
            nickname: false
        }),
        error: null
    }),
    login: Map({
        form: Map({
            email: '',
            password: ''
        }),
        error: null
    }),
    result: Map({})
});

// reducer
export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { form, name, value } = action.payload;
        return state.setIn([form, 'form', name], value);
    },
    [INITIALIZE_FORM]: (state, action) => {
        const initialForm = initialState.get(action.payload);
        return state.set(action.payload, initialForm);
    },
    ...pender({
        type: CHECK_EMAIL_EXISTS,
        onSuccess: (state, action) => state.setIn(['register', 'exists', 'email'], action.payload.data.exists)
    }),
    ...pender({
        type: CHECK_NICKNAME_EXISTS,
        onSuccess: (state, action) => state.setIn(['register', 'exists', 'nickname'], action.payload.data.exists)
    }),
    ...pender({
        type: LOCAL_REGISTER,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    }),
    ...pender({
        type: LOCAL_LOGIN,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    }),
    [SOCIAL_LOGIN]: (state, action) => {
        return state.set('result', Map(action.payload));
    },
    [SET_ERROR]: (state, action) => {
        const { form, message } = action.payload;
        return state.setIn([form, 'error'], message);
    }
}, initialState);