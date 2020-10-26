import { createAction, handleActions } from "redux-actions";
//액션명 생성
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션 리턴
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//초기 상태값
const initialState = {
  num: 0,
};

//리듀서 함수 : 액션 발생 시 그에 맞는 로직 처리
// function counter(state = initialState, action) {
//     switch(action.type){
//         case INCREASE: return { num: state.num+1 };
//         case DECREASE: return { num: state.num-1 };
//         default: return state;
//     }
// }
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }), // handleAction 적용
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
