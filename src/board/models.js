import { Schema, Model, many, fk, attr, ORM, createReducer } from "redux-orm";
import { createAction, handleActions } from "redux-actions";
import {
  CLASS_CREATE,
  CLASS_UPDATE,
  CLASS_DELETE,
  STUDENT_CREATE,
  STUDENT_UPDATE,
  STUDENT_DELETE,
  COUNT_PLUS,
  COUNT_MINUS,
} from "./actionTypes";
import undoable from "redux-undo";

export class ClassModel extends Model {
  static reducer(action, _ClassModel, session) {
    // console.log('###### reducer-class', action)/
    console.log(session.ClassModel.all().toRefArray());
    switch (action.type) {
      case CLASS_CREATE:
        _ClassModel.create(action.payload);
        break;
      case CLASS_UPDATE:
        console.log("###ccreate res", action.payload);
        _ClassModel.withId(action.payload.class_id).update(action.payload);
        break;
      case CLASS_DELETE:
        _ClassModel.withId(action.payload).delete();
        break;
      default:
        break;
    }
  }
}

export class StudentModel extends Model {
  static reducer(action, _StudentModel, session) {
    // console.log('###### reducer-student', state, action)
    switch (action.type) {
      case STUDENT_CREATE:
        _StudentModel.create(action.payload);
        break;
      case STUDENT_UPDATE:
        _StudentModel.withId(action.payload.student_id).update(action.payload);
        break;
      case STUDENT_DELETE:
        _StudentModel.withId(action.payload).delete();
        break;
      default:
        break;
    }
  }
}

ClassModel.modelName = "ClassModel";
ClassModel.fields = {
  class_id: attr(),
  name: attr(),
};
//교실 키 외래키로 지정
StudentModel.modelName = "StudentModel";
StudentModel.fields = {
  student_id: attr(),
  name: attr(),
  student_class_id: fk({
    to: "ClassModel", // 참조할 테이블
    as: "classModel", // 참조할 테이블 명칭
    relatedName: "student_class_id", //필드명이랑 겹치면 안됨
  }),
};

ClassModel.defaultProps = {
  class_id: 0,
  name: "",
};

StudentModel.defaultProps = {
  student_id: 0,
  name: "",
  student_class_id: 0,
};

const orm = new ORM({
  stateSelector: (state) => state.orm,
});
orm.register(ClassModel, StudentModel);

export const ormReducer = undoable(createReducer(orm));

//counter reducer

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_PLUS: {
      return {
        value: state.value + 1,
      };
    }
    case COUNT_MINUS: {
      return {
        value: state.value - 1,
      };
    }
    default: return state;
  }
};

export const counter = undoable(counterReducer);
console.log('orm reducer', undoable(ormReducer))
console.log('my reducer', undoable(counterReducer))
export default orm;
