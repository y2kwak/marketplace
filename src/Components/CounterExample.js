import React, {useState} from 'react'

function CounterExample() {
    // setting constant var named 'count' set by function 'setCount'
    const [count, setCount] = useState(0) // 0 is the starting value, the same as console.log(useState(0))
        
    return(
        
        <div>
            <h1>
                {count}
            </h1>
            <h1 onClick = {() => setCount(count + 1)}> 
                Plus
            </h1>
            <h1 onClick = {() => setCount(count - 1)}> 
                Minus
            </h1>
        </div>
    )
}

export default CounterExample