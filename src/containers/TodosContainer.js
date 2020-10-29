import React, { useCallback } from "react";
import Todos from "../components/Todo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import { useSelector, useDispatch } from "react-redux";

//react-redux 사용

// const TodosContainer = () => {
//   const { input, todos } = useSelector(({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }));

//   const dispatch = useDispatch();
//   const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [
//     dispatch,
//   ]);
//   const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
//   const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
//   const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onChangeInput={onChangeInput}
//       onInsert={onInsert}
//       onToggle={onToggle}
//       onRemove={onRemove}
//     ></Todos>
//   );
// };

// export default TodosContainer;

const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove
}) => {

    return <Todos
    input={input}
    todos={todos}
    onChangeInput={changeInput}
    onInsert={insert}
    onToggle={toggle}
    onRemove={remove}
    ></Todos>
}

export default connect(
    //리덕스의 상태를 props에 전달
    ({todos}) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    //리덕스의 액션들을 props에 전달
    {
        changeInput,
        insert,
        toggle,
        remove,
    }
)(TodosContainer);
