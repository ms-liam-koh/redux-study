import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_INPUT = "mytodos/CHANGE_INPUT";
const INSERT = "mytodos/INSERT";
const TOGGLE = "mytodos/TOGGLE";
const REMOVE = "mytodos/REMOVE";



export const changeInput = (input) => ({
    type: CHANGE_INPUT,
    input
})

export const insert = (text) => ({
    type: INSERT,
    item: {
        text: text,
        check: false,
    }
})

export const toggle = (index) => ({
    type: TOGGLE,
    index
})

export const remove = (index) => ({
    type: REMOVE,
    index
})


// export const changeInput = createAction(CHANGE_INPUT, (input) => input);
// export const insert = createAction(INSERT, (text) => ({
//     id: curId++,
//     text,
//     check: false,
// }));
// export const toggle = createAction(TOGGLE, (index) => index);
// export const remove = createAction(REMOVE, (index) => index);

const initialState = {
    input: '',
    
    items: [
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
        {
            id: 3,
            text: 'redux1',
            done: true,
        },
        {
            id: 4,
            text: 'redux2',
            done: false,
        },
    ],
}

function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT: return {
            ...state,
            input: action.input.target.value,
        }
        case INSERT: {
            action.item.id = state.items.length+1;

            return {
                ...state,
                items: [...state.items, action.item] // todo 추가
            };
        }
        case TOGGLE: {
            console.log('toggle', action.index);
            return {
                ...state,
                items: state.items.map(item => {
                    return item.id === action.index ? { ...item, done: !item.done } : item // 인자로 넘어온 id와 같으면, done 반전 후 새 객체로 리턴
                })
            };
        }
        case REMOVE: {
            console.log('remove');
            return {
                ...state,
                items: state.items.filter((item) => {
                    return item.id !== action.index;
                })

            };
        }

        default: return state;
    }
}

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
//                 items: state.items.concat(action.item) // todo 추가
//             };
//         case TOGGLE:
//             return{
//                 ...state,
//                 items: state.items.map(item => {
//                     return item.id === action.id ? {...item, done: !item.done} : item // 인자로 넘어온 id와 같으면, done 반전 후 새 객체로 리턴
//                 })
//             };
//         case REMOVE:
//             return{
//                 ...state,
//                 items: state.items.filter((item) => {
//                     return item.id !== action.id;
//                 })

//             };
//         default: return state;
//     }
// }

// const todos = handleActions({
//     [CHANGE_INPUT]: (state, { payload: input }) => {
//         console.log('change input', input);
//         return{
//             ...state,
//             input: action.input,
//         };
//     },
//     [INSERT]: (state, { payload: item }) => {
//         console.log('insert', item);
//         produce(state, draft => {
//             draft.items.push(item);
//         })
//     },
//     [TOGGLE]: (state, { payload: index }) => {
//         console.log('toggle');
//         produce(state, draft => {
//             const item = draft.items.find((item) => item.index === index);
//             item.checked = !item.checked;
//         })
//     },
//     [REMOVE]: (state, { payload: index }) => {
//         console.log('remove');
//         produce(state, draft => {
//             draft.items = draft.items.filter((item) => item.index !== index);
//         })
//     }
// }, initialState)

export default todos;