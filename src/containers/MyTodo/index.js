import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../../modules/mytodo';
import myTodoReducer from '../../modules/mytodo';
import { isMetaProperty } from "typescript";

const MyTodo = ({ changeInput, insert, toggle, remove, input, items }) => {

    const [val, setVal] = useState('val');

    useEffect(() => {
        console.log(input, items);
    }, [items])

    return (
        <div>
            input value :
            <input type="text" value={input} onChange={changeInput}></input>
            <button onClick={insert}>add</button>
            <hr></hr>
            <div>
                {items.map((item) => {
                    return (
                        <div key={item.id}>
                            <div>{item.id}</div>
                            <div>{item.text}</div>
                            <div>{item.done}</div>
                            <button onClick={remove}>delete</button>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}


const mapDispatchToProps = dispatch => ({
    changeInput: (input) => dispatch(changeInput(input.target.value)),
    insert: (text) => dispatch(insert(text)),
    toggle: (index) => dispatch(toggle(index)),
    remove: (index) => dispatch(remove(index)),
});
//mytodo : rootReducer에 넣은 이름으로 사용
export default connect(({ mytodo }) => ({
    items: mytodo.items,
    input: mytodo.input
}),mapDispatchToProps)(MyTodo);