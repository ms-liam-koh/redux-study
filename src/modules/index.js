import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';
import sample from './sample';

const rootReducer = combineReducers({
    counter, 
    sample
})

export default rootReducer;