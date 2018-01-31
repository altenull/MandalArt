import { Map, List, fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as MandalArtAPI from 'lib/api/mandalart';

// action types
const CHANGE_GOAL = 'mandalart/CHANGE_GOAL'; // 최종 목표 입력
const CHANGE_PLANS = 'mandalart/CHAGNE_PLANS'; // 세부 목표 입력
const INITIALIZE_MANDALART = 'mandalart/INITIALIZE_MANDALART'; // MandalArt 초기화
const MANDALART_WRITE = 'mandalart/MANDALART_WRITE'; // MandalArt 쓰기
const MANDALART_GET = 'mandalart/MANDALART_GET'; // MandalArt 요청
const MANDALART_GET_OLDER = 'mandalart/MANDALART_GET_OLDER'; // OlderMandalArt 요청
const MANDALART_DELETE = 'mandalart/MANDALART_DELETE'; // MandalArt 삭제
const MANDALART_DELETE_IN_STATE = 'mandalart/MANDALART_DELETE_IN_STATE'; // MandalArt State 삭제
const MANDALART_STAR = 'mandalart/MANDALART_STAR'; // MandalArt 별주기
const MANDALART_STAR_IN_STATE = 'mandalart/MANDALART_STAR_IN_STATE'; // MandalArt State 별주기

// action creator
export const changeGoal = createAction(CHANGE_GOAL);
export const changePlans = createAction(CHANGE_PLANS);
export const initializeMandalArt = createAction(INITIALIZE_MANDALART);
export const mandalartWrite = createAction(MANDALART_WRITE, MandalArtAPI.mandalartWrite);
export const mandalartGet = createAction(MANDALART_GET, MandalArtAPI.mandalartGet);
export const mandalartGetOlder = createAction(MANDALART_GET_OLDER, MandalArtAPI.mandalartGetOlder);
export const mandalartDelete = createAction(MANDALART_DELETE, MandalArtAPI.mandalartDelete);
export const mandalartDeleteInState = createAction(MANDALART_DELETE_IN_STATE)
export const mandalartStar = createAction(MANDALART_STAR, MandalArtAPI.mandalartStar);
export const mandalartStarInState = createAction(MANDALART_STAR_IN_STATE);

// initial state
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
        mandalData: List([]),
        isLast: false,
        status: 'INIT',
        error: -1
    }),
    deleteID: ''
});

// reducer
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
        type: MANDALART_GET,
        onPending: (state, action) => state.setIn(['listUp', 'status'], 'WAITING'),
        onSuccess: (state, action) => {
            const { data } = action.payload;
            return state.setIn(['listUp', 'mandalData'], fromJS(data))
                        .setIn(['listUp', 'status'], 'SUCCESS')
                        .setIn(['listUp', 'isLast'], (data.length < 5));
        }
    }),
    ...pender({
        type: MANDALART_GET_OLDER,
        onPending: (state, action) => state.setIn(['listUp', 'status'], 'WAITING'),
        onSuccess: (state, action) => {
            const { data } = action.payload;
            return state.setIn(['listUp', 'mandalData'], state.getIn(['listUp', 'mandalData']).concat(fromJS(data)))
                        .setIn(['listUp', 'status'], 'SUCCESS')
                        .setIn(['listUp', 'isLast'], (data.length < 5));
        }
    }),
    ...pender({
        type: MANDALART_WRITE
    }),
    ...pender({
        type: MANDALART_DELETE,
        onSuccess: (state, action) => {
            const { data } = action.payload;
            return state.set('deleteID', data._id);
        }
    }),
    [MANDALART_DELETE_IN_STATE]: (state, action) => {
        const { index } = action.payload;
        return state.setIn(['listUp', 'mandalData'], state.getIn(['listUp', 'mandalData']).delete(index))
                    .set('deleteID', '');
    },
    ...pender({
        type: MANDALART_STAR
    }),
    [MANDALART_STAR_IN_STATE] : (state, action) => {
        const { index, mandalData } = action.payload;
        return state.setIn(['listUp', 'mandalData'], state.getIn(['listUp', 'mandalData']).splice(index, 1, fromJS(mandalData)));
    }
}, initialState);