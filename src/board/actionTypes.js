import { createAction, handleActions } from "redux-actions";
import { Model, many, ORM, attr } from 'redux-orm'

//교실 학생 관계 테이블 생성
//교실 : 반이름, 선생님, 학생들
//학생 : 이름, 선생님,  
export const CLASS_CREATE = '@orm/CLASS_CREATE';
export const CLASS_UPDATE = '@orm/CLASS_UPDATE';
export const CLASS_DELETE = '@orm/CLASS_DELETE';

export const STUDENT_CREATE = '@orm/STUDENT_CREATE';
export const STUDENT_UPDATE = '@orm/STUDENT_UPDATE';
export const STUDENT_DELETE = '@orm/STUDENT_DELETE';

