import { Map, List, fromJS } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import * as MandalArtAPI from 'lib/api/mandalart';
import { pender } from 'redux-pender';

const CHANGE_GOAL = 'mandalart/CHANGE_GOAL'; // 최종 목표 입력
const CHANGE_PLANS = 'mandalart/CHAGNE_PLANS'; // 세부 목표 입력
const INITIALIZE_MANDALART = 'mandalart/INITIALIZE_MANDALART'; // mandalart 초기화
const MANDALART_WRITE = 'mandalart/MANDALART_WRITE'; // madnalart 쓰기
const MANDALART_GET = 'mandalart/MANDALART_GET'; // mandalart 불러오기
const MANDALART_SET = 'mandalart/MANDALART_SET'; // mandalart state 저장
const MANDALART_GET_OLDER = 'mandalart/MANDALART_GET_OLDER';
const MANDALART_UPDATE = 'mandalart/MANDALART_UPDATE';
const MANDALART_DELETE = 'mandalart/MANDALART_DELETE';
const MANDALART_DELETE_IN_STATE = 'mandalart/MANDALART_DELETE_IN_STATE';
const MANDALART_STAR = 'mandalart/MANDALART_STAR';
const MANDALART_UPDATE_IN_STATE = 'mandalart/MANDALART_UPDATE_IN_STATE';

// Action Create
export const changeGoal = createAction(CHANGE_GOAL);
export const changePlans = createAction(CHANGE_PLANS);
export const initializeMandalArt = createAction(INITIALIZE_MANDALART);
export const mandalartWrite = createAction(MANDALART_WRITE, MandalArtAPI.mandalartWrite);
export const mandalartGet = createAction(MANDALART_GET, MandalArtAPI.mandalartGet);
export const mandalartSet = createAction(MANDALART_SET);
export const mandalartGetOlder = createAction(MANDALART_GET_OLDER, MandalArtAPI.mandalartGetOlder);
export const mandalartUpdate = createAction(MANDALART_UPDATE);
export const mandalartDelete = createAction(MANDALART_DELETE, MandalArtAPI.mandalartDelete);
export const mandalartDeleteInState = createAction(MANDALART_DELETE_IN_STATE)
export const mandalartStar = createAction(MANDALART_STAR, MandalArtAPI.mandalartStar);
export const mandalartUpdateInState = createAction(MANDALART_UPDATE_IN_STATE);

const initialState = Map({
    write: Map({
        goal: '',
        plans: Map({
            plan1: '',
            plan2: '',
            plan3: '',
            plan4: '',
            plan5: '',
            plan6: '',
            plan7: '',
            plan8: ''
        })
    }),
    listUp: Map({
        mandalData: List([])
    }),
    deleteID: ''
});

export default handleActions({
    [CHANGE_GOAL]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['write', name], value);
    },
    [CHANGE_PLANS]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['write', 'plans', name], value);
    },
    [INITIALIZE_MANDALART]: () => {
        return initialState;
    },
    ...pender({
        type: MANDALART_WRITE
    }),
    ...pender({
        type: MANDALART_DELETE,
        onSuccess: (state, action) => state.set('deleteID', action.payload.data._id)
    }),
    ...pender({
        type: MANDALART_GET
    }),
    ...pender({
        type: MANDALART_GET_OLDER
    }),
    ...pender({
        type: MANDALART_STAR
    }),
    [MANDALART_SET]: (state, action) => {
        const { mandalData } = action.payload;
        return state.setIn(['listUp', 'mandalData'], fromJS(mandalData));
    },
    [MANDALART_UPDATE]: (state, action) => {
        const { mandalData } = action.payload;
        return state.setIn(['listUp', 'mandalData'], state.getIn(['listUp', 'mandalData']).concat(fromJS(mandalData)));
    },
    [MANDALART_DELETE_IN_STATE]: (state, action) => {
        return state.setIn(['listUp', 'mandalData'], state.getIn(['listUp', 'mandalData']).delete(action.payload.index))
                    .set('deleteID', '');
    },
    [MANDALART_UPDATE_IN_STATE] : (state, action) => {
        const { index, mandalData } = action.payload;
        return state.setIn(['listUp', 'mandalData'], state.getIn(['listUp', 'mandalData']).splice(index, 1, fromJS(mandalData)));
    }
}, initialState);