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
        switch (action.type) {
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

