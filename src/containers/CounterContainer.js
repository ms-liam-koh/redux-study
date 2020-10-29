import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increaseAsync, decreaseAsync } from "../modules/counter";
import { useDispatch, useSelector } from "react-redux";

//Counter.js 가 리덕스의 영향을 받게 함
const CounterContainer = ({ num, increaseAsync, decreaseAsync }) => {
  return (
    <Counter 
    num={num} 
    onIncrease={increaseAsync}
    onDecrease={decreaseAsync}
    ></Counter>
  );
};

export default connect(
  (state) => ({
    num: state.counter,
  }),
  {
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);

// const mapStateToProps = state => ({
//     num: state.counter.num,
// });
// const mapDispatchToProps = dispatch => ({

// });

// export default connect(mapStateToProps, {increase, decrease})(CounterContainer);

// const CounterContainer=()=>{
//     const number=useSelector(state => state.counter.num); // useSelector : connect 없이 리덕스의 상태조회 가능
//     const dispatch = useDispatch(); // useDispatch: 컴포넌트 내부에서 dispatch 사용가능
//     return <Counter
//     num={number}
//     onIncrease = {()=>dispatch(increase())}
//     onDecrease = {()=>dispatch(decrease())}
//     ></Counter>
// }

// export default CounterContainer;
