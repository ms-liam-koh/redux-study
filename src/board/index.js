import { combineReducers } from 'redux';
import { createReducer, defaultUpdater } from 'redux-orm';
import orm, { ClassModel, counter, ormReducer } from './models';
import undoable from 'redux-undo';

const rootReducer = combineReducers({
    // orm: createReducer(orm),
    counter,
    orm: ormReducer
})

export default rootReducer;