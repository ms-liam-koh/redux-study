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
      {/* <CounterContainer></CounterContainer> */}
      <hr></hr>
      {/* <TodosContainer></TodosContainer> */}
    </div>
  );
}

export default App;
