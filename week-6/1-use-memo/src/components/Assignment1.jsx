import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expensiveValue= useMemo(()=>{
        let expensiveValues = 1;
            for(let i=1;i<=input;i++){
                expensiveValues*=i;
                console.log(expensiveValues,"input", input)
            }
            return expensiveValues;
    },[input]); 

    // Your solution ends here

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <h1>hllo</h1>
            <h1>hllo</h1>
            <h1>hllo</h1>
            <h1>hllo</h1>

            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}