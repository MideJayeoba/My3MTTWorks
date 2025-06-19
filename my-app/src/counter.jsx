import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleBelowZero = () => {
        if (count <= 0) {
            alert("Count cannot be less than zero!");
            setCount(0);
        }}
    return (
        <div style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: '#f9f9f9', widows: '300px', margin: '20px auto' }}>
            <h1 style={{ width: '20px' }}>Counter</h1>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={{handleBelowZero}}></button>
        </div>
    )
}