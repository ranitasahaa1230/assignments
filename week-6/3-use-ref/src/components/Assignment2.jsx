import React, { useState, useCallback } from 'react';
import { useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [count, setCount] = useState(0);
    const inputText=useRef(0);

    const handleReRender = () => {
        // Update state to force re-render
        setCount(count+1);
    };

    inputText.current=inputText.current+1;//1time for setcount, 1 time for useref

    return (
        <div>
            <p>This component has rendered {inputText.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};