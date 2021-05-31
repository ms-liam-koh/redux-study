import { createAction, handleActions } from "redux-actions";
import { Model, many, ORM, attr } from 'redux-orm'


//기존 redux
export const CREATE = 'ormtest/CREATE';
export const UPDATE = 'ormtest/UPDATE';
const READ = 'ormtest/READ';
export const REMOVE = 'ormtest/REMOVE';

export const ORM_CREATE = 'ormtest/ORM_CREATE';
export const ORM_UPDATE = 'ormtest/ORM_UPDATE';
export const ORM_REMOVE = 'ormtest/ORM_REMOVE';

export const create = createAction(CREATE);
export const update = createAction(UPDATE);
export const read = createAction(READ);
export const remove = createAction(REMOVE);

const initialState = [
    {
        id: 1,
        title: 'title 1',
        content: 'hello world 1',
        like: false,
    }
]

function todoList(state = initialState, action) {
    switch (action.type) {
        case CREATE:
            console.log(state, action.payload)
            const newTodo = action.payload;
            return state.concat(newTodo)
        case UPDATE:
            const newTodo2 = action.payload;

            return state.map((todo, index) => {
                if (todo.id === newTodo2.id) {
                    return newTodo2;
                } else {
                    return todo;
                }
            })
        case REMOVE:
            console.log(state, action)
            return state.filter(todo => {
                return todo.id !== action.payload
            })
        default: return state;
    }
}

export default todoList

