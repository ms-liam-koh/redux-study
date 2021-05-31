//root reducer

import {combineReducers} from 'redux';
import {createReducer, defaultUpdater} from 'redux-orm';
import todoList from './store';
import {orm} from './model';
// import { all } from 'redux-saga/effects';

const reducer = createReducer(orm);

const rootReducer = combineReducers({
   orm: reducer,
   todoList
})

export default rootReducer;