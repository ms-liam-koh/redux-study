import orm from "./models";
import { createReducer, defaultUpdater, createSelector } from "redux-orm";
import { ClassModel, StudentModel } from "./models";

//selector 안되는 문제 해결해야할듯
export const classListSelector = createSelector(orm, (session) => {
  
  return []
});

export const studentListSelector = createSelector(orm, (session) => {
  return []
});
