import { combineReducers } from 'redux';
import base from './base';
import auth from './auth';
import user from './user';
import mandalart from './mandalart';
import { penderReducer } from 'redux-pender';

export default combineReducers({
    base,
    auth,
    user,
    mandalart,
    pender: penderReducer
});