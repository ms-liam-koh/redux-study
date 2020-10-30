import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';
import mytodo from './mytodo';

const rootReducer = combineReducers({
    counter, 
    // todos,
    mytodo,
})

export default rootReducer;