import { Map, List, fromJS } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import * as MandalArtAPI from 'lib/api/mandalart';
import { pender } from 'redux-pender';

const CHANGE_GOAL = 'mandalart/CHANGE_GOAL'; // 최종 목표 입력
const CHANGE_PLANS = 'mandalart/CHAGNE_PLANS'; // 세부 목표 입력
const INITIALIZE_FORM = 'mandalart/INITIALIZE_FORM'; // form 초기화
const MANDALART_WRITE = 'mandalart/MANDALART_WRITE'; // madnalart 쓰기
const MANDALART_GET = 'mandalart/MANDALART_GET'; // mandalart 불러오기
const MANDALART_SET = 'mandalart/MANDALART_SET'; // mandalart state 저장
const INITIALIZE_MANDALDATA = 'mandalart/INITIALIZE_MANDALDATA'; // mandalData 초기화

// Action Create
export const changeGoal = createAction(CHANGE_GOAL);
export const changePlans = createAction(CHANGE_PLANS);
export const initializeForm = createAction(INITIALIZE_FORM);
export const mandalartWrite = createAction(MANDALART_WRITE, MandalArtAPI.mandalartWrite);
export const mandalartGet = createAction(MANDALART_GET, MandalArtAPI.mandalartGet);
export const mandalartSet = createAction(MANDALART_SET);
export const initializeMandalData = createAction(INITIALIZE_MANDALDATA);

const initialState = Map({
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
    }),
    mandalData: List()
});

export default handleActions({
    [CHANGE_GOAL]: (state, action) => {
        const { name, value } = action.payload;
        return state.set(name, value);
    },
    [CHANGE_PLANS]: (state, action) => {
        const { name, value } = action.payload;
        return state.setIn(['plans', name], value);
    },
    [INITIALIZE_FORM]: () => {
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
        return state.set('mandalData', fromJS(mandalData));
    },
    [INITIALIZE_MANDALDATA]: () => {
        return initialState;
    }
}, initialState);