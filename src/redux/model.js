import { Schema, Model, many, fk, attr } from 'redux-orm';
import {
    CREATE_TODO,
    MARK_DONE,
    DELETE_TODO,
    ADD_TAG_TO_TODO,
    REMOVE_TAG_FROM_TODO,
} from './actionTypes';

export class Todo extends Model {
    static reducer(state, action) {
        switch (action.type) {
            case CREATE:
                console.log(state, action.payload)
                const newTodo = action.payload;
                state.concat(newTodo);
                Todo.create(newTodo);
                break;
            case UPDATE:
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
            case REMOVE:
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
    title: 'title 1',
    content: 'hello world 1',
    like: false,
}

export const schema = new Schema();
schema.register(Todo);

export default schema;

