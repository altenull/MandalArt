import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const SET_HEADER_VISIBILITY = 'base/SET_HEADER_VISIBILITY' // 헤더 렌더링 여부

export const setHeaderVisibility = createAction(SET_HEADER_VISIBILITY); // action 생성

const initialState = Map({
    header: Map({
        visible: true
    })
});

export default handleActions({
    [SET_HEADER_VISIBILITY]: (state, action) => state.setIn(['header', 'visible'], action.payload)
}, initialState);