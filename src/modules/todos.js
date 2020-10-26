import produce from "immer";
import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";



//createAction(type, payloads)
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
    input: '',
    todos:[
        {
            id: 1,
            text: 'redux1',
            done: true,
        },
        {
            id: 2,
            text: 'redux2',
            done: false,
        },
    ]
};

const todos = handleActions({
  [CHANGE_INPUT]: (state, { payload: input }) => {
    produce(state, (draft) => {
      draft.input = input;
    });
  },
  [INSERT]: (state, { payload: todo }) => {
    produce(state, (draft) => {
      draft.todos.push(todo);
    });
  },
  [TOGGLE]: (state, { payload: id }) => {
    produce(state, (draft) => {
      const todo = draft.todos.find((todo) => todo.id === id);
      todo.done = !todo.done;
    });
  },
  [REMOVE]: (state, { payload: id }) => {
    produce(state, (draft) => {
      const index = draft.todos.findIndex((todo) => todo.id === id);
      draft.todos.splice(index, 1);
    });
  },
}, initialState);

//original actions
// export const changeInput = input => ({
//     type: CHANGE_INPUT,
//     input
// });

// export const insert = text => ({
//     type: INSERT,
//     todo: {
//         id: id++,
//         text,
//         done: false,
//     }
// });

// export const toggle = id => ({
//     type: TOGGLE,
//     id
// });

// export const remove = id => ({
//     type: REMOVE,
//     id
// });



// 오리지널 리듀서
// function todos(state = initialState, action) {
//     switch(action.type) {
//         case CHANGE_INPUT:
//             return{
//                 ...state,
//                 input: action.input,
//             };
//         case INSERT:
//             return{
//                 ...state,
//                 todos: state.todos.concat(action.todo) // todo 추가
//             };
//         case TOGGLE:
//             return{
//                 ...state,
//                 todos: state.todos.map(todo => {
//                     return todo.id === action.id ? {...todo, done: !todo.done} : todo // 인자로 넘어온 id와 같으면, done 반전 후 새 객체로 리턴
//                 })
//             };
//         case REMOVE:
//             return{
//                 ...state,
//                 todos: state.todos.filter((todo) => {
//                     return todo.id !== action.id;
//                 })

//             };
//         default: return state;
//     }
// }

export default todos;
