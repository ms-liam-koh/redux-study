import { orm } from './model';
import { createSelector } from 'reselect'
import {createReducer, defaultUpdater} from 'redux-orm';

export const ormSelector = state => {
    const emptyDBState = orm.getEmptyState();//빈 db 상태
    const session = orm.session(emptyDBState);//session 활성화

    const reducer = createReducer(orm);

    //1개 삽입
    console.log('orm session', session.Todo.create({
        id: 1,
        title: 'title by orm',
        content: 'hello world by orm',
        like: false,
    }))

    console.log('results', session.Todo.all().toModelArray().map(todo => {
        return {
            ...todo._fields
        }
        
    }))

    console.log('reducer', reducer())

    return [
        {
            id: 1,
            title: 'title by orm',
            content: 'hello world by orm',
            like: false,
        }
    ];
};
// export const todoLists = () => {
//     ormSelector();
// }

export const todoLists = createSelector(
    ormSelector,
    todoState => {
        return todoState
    }
)