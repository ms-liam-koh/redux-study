import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

const initialState = {
    curId: 0,
    input: '',
    items: [],
}

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
export const insert = createAction(INSERT, (text) => ({
    id: initialState.curId++,
    text,
    check: false,
}));
export const toggle = createAction(TOGGLE, (index) => index);
export const remove = createAction(REMOVE, (index) => index);



const myTodoReducer = handleActions({
    [CHANGE_INPUT]: (state, { payload: input }) => {
        produce(state, draft => {
            draft.input = input;
        })
    },
    [INSERT]: (state, { payload: item }) => {
        produce(state, draft => {
            draft.items.push(item);
        })
    },
    [TOGGLE]: (state, { payload: index }) => {
        produce(state, draft => {
            const item = draft.items.find((item) => item.index === index);
            item.checked = !item.checked;
        })
    },
    [REMOVE]: (state, { payload: index }) => {
        produce(state, draft => {
            draft.items = draft.items.filter((item) => item.index !== index);
        })
    }
}, initialState)

export default myTodoReducer;