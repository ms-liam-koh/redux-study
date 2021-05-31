import { Schema, Model, many, fk, attr, ORM } from 'redux-orm';
import { createAction, handleActions } from "redux-actions";
import {
    ORM_CREATE,
    ORM_UPDATE,
    ORM_REMOVE
} from './store';

export const ormCreate = createAction(ORM_CREATE);
export const ormUpdate = createAction(ORM_UPDATE);
export const ormRemove = createAction(ORM_REMOVE);


export class Todo extends Model {
    static reducer(state, action) {
        console.log('###### state, action', state, action)
        switch (action.type) {
            case ORM_CREATE:
                console.log(state, action.payload)
                const newTodo = action.payload;
                state.concat(newTodo);
                Todo.create(newTodo);
                break;
            case ORM_UPDATE:
                const newTodo2 = action.payload;
    
                const value = state.map((todo, index) => {
                    if (todo.id === newTodo2.id) {
                        return newTodo2;
                    } else {
                        return todo;
                    }
                })

                Todo.withId(newTodo2.id).update(newTodo2);
                break;
            case ORM_REMOVE:
                console.log(state, action)
                Todo.withId(newTodo2.id).delete();
                // return state.filter(todo => {
                //     return todo.id !== action.payload
                // })
                break;
            default: break;
        }
    }
}

Todo.modelName='Todo';
Todo.fields =  {
    id: attr(),
    title: attr(),
    content: attr(),
    like: attr(),
}

Todo.defaultProps = {
    id: 1,
    title: 'title by orm11',
    content: 'hello world by orm11',
    like: false,
}

export const orm = new ORM();
orm.register(Todo);

export default orm;

