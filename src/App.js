import React from 'react';
import logo from './logo.svg';
import CounterContainer from './containers/CounterContainer';
import './App.css';
import TodosContainer from './containers/TodosContainer';
import SampleContainer from './containers/SampleContainer';


function App() {
  return (
    <div>
      <SampleContainer></SampleContainer>
      <hr></hr>
      <CounterContainer></CounterContainer>
      {/* <TodosContainer></TodosContainer> */}
    </div>
  );
}

export default App;
