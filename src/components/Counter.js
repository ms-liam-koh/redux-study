import React from 'react';

const Counter = ({ num, onIncrease, onDecrease }) => {
    return(
        <div>
            <h1>{num}</h1>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter;