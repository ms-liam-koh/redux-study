import React from 'react';
import Todos from '../components/Todo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';

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