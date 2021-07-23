import { createAction } from "redux-actions";
import { ActionCreators } from "redux-undo";
import {
  CLASS_CREATE,
  CLASS_UPDATE,
  CLASS_DELETE,
  STUDENT_CREATE,
  STUDENT_UPDATE,
  STUDENT_DELETE,
  CLASS_UNDO,
  STUDENT_UNDO,
  COUNT_PLUS,
  COUNT_MINUS,
} from "./actionTypes";

export const classCreate = createAction(CLASS_CREATE);
export const classUpdate = createAction(CLASS_UPDATE);
export const classDelete = createAction(CLASS_DELETE);

export const studentCreate = createAction(STUDENT_CREATE);
export const studentUpdate = createAction(STUDENT_UPDATE);
export const studentDelete = createAction(STUDENT_DELETE);

export const countPlus = createAction(COUNT_PLUS);
export const countMinus = createAction(COUNT_MINUS);