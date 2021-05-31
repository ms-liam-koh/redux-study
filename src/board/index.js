import { combineReducers } from 'redux';
import { createReducer, defaultUpdater } from 'redux-orm';
import { orm } from './models';

const rootReducer = combineReducers({
    orm: createReducer(orm)
})

export default rootReducer;