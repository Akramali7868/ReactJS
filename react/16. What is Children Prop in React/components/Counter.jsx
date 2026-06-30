import { useState } from "react";


export default function Counter({counterName, children}) {
  console.log(children);
    const [count, setCount] = useState(0)

  return (
    <div style={{textAlign:'center'}}>
     <h1>{count}</h1>
     <h1>{counterName}</h1>
      <button onClick={()=>{
        setCount(count +1)
      }}>Increase Count</button>

      {
        children
      }
    </div>
  );
}