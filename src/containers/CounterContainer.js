import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increase, decrease } from '../modules/counter';

//Counter.js 가 리덕스의 영향을 받게 함
const CounterContainer = ({ num, increase, decrease }) => {
    
    return <Counter
    num={num}
    onIncrease={increase}
    onDecrease={decrease}
    ></Counter>
}

const mapStateToProps = state => ({
    num: state.counter.num,
});
const mapDispatchToProps = dispatch => ({
   
});


export default connect(mapStateToProps, {increase, decrease})(CounterContainer);