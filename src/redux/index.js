//root reducer

import {combineReducers} from 'redux';
import todoList from './store';
// import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
   todoList
})

export default rootReducer;