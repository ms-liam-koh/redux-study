import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../../modules/mytodo';
import myTodoReducer from '../../modules/mytodo';
import { isMetaProperty } from "typescript";

const MyTodo = (props) => {

    const { changeInput, insert, toggle, remove, input, items } = props;

    const [text, setText] = useState('');

    useEffect(() => {
        console.log(input, items);
    }, [items])

    const onInsert = (text) => {
        insert(text);
    }

    const onRemove = (index) => {
        remove(index);
    }

    const onToggle = (index) => {
        toggle(index)
    }

    return (
        <div>
            input value :
            <input type="text" value={input} onChange={changeInput}></input>
            <button onClick={()=>onInsert(input)}>add</button>
            <hr></hr>
            <div>
                {items.map((item) => {
                    return (
                        <div key={item.id}>
                            <div>{item.id}</div>
                            <div style={{textDecoration: item.done ? 'line-through' : 'none'}}>{item.text}</div>
                            <div>{item.done}</div>
                            <button onClick={()=>onRemove(item.id)}>delete</button>
                            <input type="checkbox" 
                            onClick={()=>onToggle(item.id)}
                            
                            ></input>
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
}),{
    changeInput,
    insert,
    toggle,
    remove
})(MyTodo);