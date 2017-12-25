import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const SET_HEADER_VISIBILITY = 'base/SET_HEADER_VISIBILITY' // 헤더 렌더링 여부
const SET_HEADER_SCROLL_NECESSITY = 'base/SET_HEADER_SCROLL_NECESSITY' // 헤더 스크롤 필요 여부

// Action Create
export const setHeaderVisibility = createAction(SET_HEADER_VISIBILITY);
export const setHeaderScrollNecessity = createAction(SET_HEADER_SCROLL_NECESSITY);

const initialState = Map({
    header: Map({
        visible: true,
        needScroll: true
    })
});

export default handleActions({
    [SET_HEADER_VISIBILITY]: (state, action) => state.setIn(['header', 'visible'], action.payload),
    [SET_HEADER_SCROLL_NECESSITY] : (state, action) => state.setIn(['header', 'needScroll'], action.payload)
}, initialState);