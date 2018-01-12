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
        mandalData: List()
    })
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
        type: MANDALART_GET
    }),
    [MANDALART_SET]: (state, action) => {
        const { mandalData } = action.payload;
        console.log('MANDALART_SET');
        console.log(mandalData);
        return state.setIn(['listUp', 'mandalData'], fromJS(mandalData));
    },
    ...pender({
        type: MANDALART_GET_OLDER
    }),
    [MANDALART_UPDATE]: (state, action) => {
        const { mandalData } = action.payload;
        const prevMandalData = state.getIn(['listUp', 'mandalData']);
        const result = prevMandalData.concat(fromJS(mandalData));
        console.log('MANDALART_UPDATE');
        console.log(result.toJS());
        return state.setIn(['listUp', 'mandalData'], result);
    },
    ...pender({
        type: MANDALART_DELETE
    })
}, initialState);