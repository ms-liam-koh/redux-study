import React from 'react';
import logo from './logo.svg';
import CounterContainer from './containers/CounterContainer';
import './App.css';
import TodosContainer from './containers/TodosContainer';
import SampleContainer from './containers/SampleContainer';
import HooksTodo from './components/HooksTodo';

function App() {
  return (
    <div>
      {/* <SampleContainer></SampleContainer> */}
      <HooksTodo></HooksTodo>
      {/* <CounterContainer></CounterContainer> */}
      <hr></hr>
      {/* <TodosContainer></TodosContainer> */}
    </div>
  );
}

export default App;
