import React, { useEffect, useState, useCallback } from 'react';
import useInputs from '../hooks/useInputs';

const HooksTodo = () => {
    const [count, setCount] = useState(0);
    const [val, setVal] = useState('');

    //useEffect: 렌더링 이후에 호출
    useEffect(() => {
        document.title = `${count} clicked`;

        //재렌더링 직전에 호출되는 cleanup 
        return function cleanup() {
            console.log('cleanup');
        }
    })

    useEffect(() => {
        console.log('count change detected');
    }, [count])

    const onChange = useCallback(e => {
        const { value } = e.target;
        setVal(value);
    })




    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>

            <hr></hr>
            <input type="text" onChange={onChange} value={val}></input>
            {val}
            <HooksChild
            name1={'myname1'}
            name2={'myname2'}
            name3={'myname3'}
            >
                <div>
                    <h3>this is children</h3>
                </div>
            </HooksChild>
        </div>
    )
}
//props 전달
const HooksChild = ({ name1, name2, name3, children }) => {
    return (
        <div>
            <div>{name1}</div>
            <div>{name2}</div>
            <div>{name3}</div>
            {children}
        </div>
    )
}




export default HooksTodo;