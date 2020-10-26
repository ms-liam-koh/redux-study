import React from 'react';
import logo from './logo.svg';
import CounterContainer from './containers/CounterContainer';
import './App.css';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer num={0}></CounterContainer>
      <hr></hr>
      <TodosContainer></TodosContainer>
    </div>
  );
}

export default App;
