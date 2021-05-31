import { Schema, Model, many, fk, attr, ORM } from 'redux-orm';
import { createAction, handleActions } from "redux-actions";
import {
    CLASS_CREATE,
    CLASS_UPDATE,
    CLASS_DELETE,
    STUDENT_CREATE,
    STUDENT_UPDATE,
    STUDENT_DELETE
} from './actionTypes';

export class ClassModel extends Model {
    static reducer(state, action) {
        // const _payload = action.paylaod131212
        console.log(action, state)
        switch (action.type) {
            case CLASS_CREATE:
                ClassModel.create(action.payload);
                break;
            case CLASS_UPDATE:
                ClassModel.withId(action.payload.id).update(action.payload);
                break;
            case CLASS_DELETE:
                ClassModel.withId(action.payload.id).delete();
                break;
            default: break;
        }
    }
}

export class StudentModel extends Model {
    static reducer(state, action) {
        // const _payload = action.paylaod
        switch (action.type) {
            case STUDENT_CREATE:
                StudentModel.create(action.payload);
                break;
            case STUDENT_UPDATE:
                StudentModel.withId(action.payload.id).update(action.payload);
                break;
            case STUDENT_DELETE:
                StudentModel.withId(action.payload.id).delete();
                break;
            default: break;
        }
    }
}

ClassModel.modelName = 'ClassModel';
ClassModel.fields = {
    id: attr(),
    name: attr(),
}
//교실 키 외래키로 지정
StudentModel.modelName = 'StudentModel';
StudentModel.fields = {
    id: attr(),
    name: attr(),
    classId: fk({ to: 'ClassModel', as: 'classModel', relatedName: 'id' })
}

export const orm = new ORM();
orm.register(ClassModel, StudentModel);

export default orm;