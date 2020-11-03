import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

//액션 리턴
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//클릭 이벤트가 payload 안으로 들어가지 않게 undefined를 두번째 파라미터로 추가
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  //takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리
  // yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield throttle(500, INCREASE_ASYNC, increaseSaga);
  //기존에 진행중이던 작업이 있으면 취소 후 가장 마지막으로 실행된 작업만 수행-debouncing과 유사
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}




// //redux-thun=k 적용
// export const increaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(increase());
//   }, 1000);
// };

// export const decreaseAsync = () => (dispatch) => {
//   setTimeout(() => {
//     dispatch(decrease());
//   }, 1000);
// };

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
