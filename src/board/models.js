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
        console.log('###### reducer-class', action)
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
        console.log('###### reducer-student', state, action)
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
    class_id: attr(),
    name: attr(),
}
//교실 키 외래키로 지정
StudentModel.modelName = 'StudentModel';
StudentModel.fields = {
    student_id: attr(),
    name: attr(),
    student_class_id: fk({
        to: 'ClassModel', // 참조할 테이블
        as: 'classModel', // 참조할 테이블 명칭
        relatedName: 'student_class_id' //필드명이랑 겹치면 안됨
    })
}

ClassModel.defaultProps = {
    class_id: 0,
    name: ''
}

StudentModel.defaultProps = {
    student_id: 0,
    name: '',
    student_class_id: 0,
}

const orm = new ORM({
    stateSelector: state => state.orm
});
orm.register(ClassModel, StudentModel);

export default orm;