import { createAction } from 'redux-actions';
import {
    CLASS_CREATE,
    CLASS_UPDATE,
    CLASS_DELETE,
    STUDENT_CREATE,
    STUDENT_UPDATE,
    STUDENT_DELETE
} from './actionTypes';

export const classCreate = createAction(CLASS_CREATE, payload => payload);
export const classUpdate = createAction(CLASS_UPDATE, payload => payload);
export const classDelete = createAction(CLASS_DELETE, payload => payload);

export const studentCreate = createAction(STUDENT_CREATE, payload => payload);
export const studentUpdate = createAction(STUDENT_UPDATE, payload => payload);
export const studentDelete = createAction(STUDENT_DELETE, payload => payload);