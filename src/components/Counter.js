import React, { useEffect } from 'react';

const Counter = ({ onIncrease, onDecrease, num }) => {


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