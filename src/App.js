import React from 'react';
import logo from './logo.svg';
import CounterContainer from './containers/CounterContainer';
import './App.css';
import TodosContainer from './containers/TodosContainer';
import MyTodo from './containers/MyTodo';


function App() {
  return (
    <div>
      <MyTodo></MyTodo>
      {/* <CounterContainer num={0}></CounterContainer>
      <hr></hr>
      <TodosContainer></TodosContainer> */}
    </div>
  );
}

export default App;
