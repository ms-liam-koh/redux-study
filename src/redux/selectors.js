import {schema} from './model';
import {createSelector} from 'reselect'

export const ormSelector = state => state.orm;

export const todoLists = createSelector(
    ormSelector, 
    state => state.todoList,
)

