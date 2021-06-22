import React from 'react';
import logo from './logo.svg';
import CounterContainer from './containers/CounterContainer';
import './App.css';
import TodosContainer from './containers/TodosContainer';
import SampleContainer from './containers/SampleContainer';
import Rendering from './containers/rendering/Rendering';


function App() {
  return (
    <div>
      {/* <SampleContainer></SampleContainer>
      <hr></hr>
      <CounterContainer></CounterContainer> */}
      <Rendering></Rendering>
    </div>
  );
}

export default App;
