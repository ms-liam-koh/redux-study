import React, { useEffect } from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      ></input>
      <span
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
      >{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  };

  const onChange = (e) => {
    onChangeInput(e.target.value);
  };

  useEffect(()=>{
    console.log(input, todos, onInsert)
  },[])

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange}></input>
        <button type="submit">등록</button>
      </form>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default Todos;
