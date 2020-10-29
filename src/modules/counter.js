import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션 리턴
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//redux-thun=k 적용
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

//초기 상태값
const initialState = 0;

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
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
