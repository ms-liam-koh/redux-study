import React from "react";
import logo from "./logo.svg";
import CounterContainer from "./containers/CounterContainer";
import "./App.css";
import TodosContainer from "./containers/TodosContainer";
import SampleContainer from "./containers/SampleContainer";
import Comments from "./hoc/Comments";
import Post from "./hoc/Post";
function App() {
  return (
    <div>
      <h3>post</h3>
      <Post></Post>
      <h3>comments</h3>
      <Comments></Comments>
    </div>
  );
}

export default App;
