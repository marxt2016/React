import React, { useState } from 'react'
export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h3>{count}</h3>
            <button className="Message-button" onClick={handleClick}>Increase Counter</button>
        </div>
    )
}
