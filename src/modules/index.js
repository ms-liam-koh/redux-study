import {combineReducers} from 'redux';
import counter, {counterSaga} from './counter';
import todos from './todos';
import sample from './sample';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    counter, 
    sample
})

export function* rootSaga() {
    yield all([counterSaga()]);
}

export default rootReducer;