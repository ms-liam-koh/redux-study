import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../../modules/mytodo';
import myTodoReducer from '../../modules/todos';
import todos from "../../modules/todos";

const MyTodo = ({ changeInput, insert, toggle, remove, input, items }) => {

    const [val, setVal] = useState('val');

    useEffect(() => {
        console.log(changeInput, insert, input, items);
    }, [])



    return (
        <div>
         
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.items,
    input: state.input
});

const mapDispatchToProps = dispatch => ({
    changeInput: (input) => dispatch(input),
    insert: (text) => dispatch(text),
    toggle: (index) => dispatch(index),
    remove: (index) => dispatch(index),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyTodo);