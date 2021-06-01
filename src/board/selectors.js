import orm from './models';
import { createReducer, defaultUpdater, createSelector as ormCreateSelector } from 'redux-orm';
import { createSelector } from 'reselect';

export function ormSelector(state) {
    return state.orm;
};

export const classListSelector = createSelector(
    ormSelector,
    ormCreateSelector(orm, session => {
        return session.ClassModel.all().toRefArray()
    })
)