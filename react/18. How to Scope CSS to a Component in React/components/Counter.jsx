import { useState } from "react";
import styles from './Counter.module.css'


export default function Counter({counterName, children}) {
  console.log(children);
    const [count, setCount] = useState(0)
    console.log(styles);

  return (
    <div style={{textAlign:'center'}}>
     <h1 className={styles.textXl}>{count}</h1>
     <h1>{counterName}</h1>
      <button className={styles.button} onClick={()=>{
        setCount(count +1)
      }}>Increase Count</button>

      {
        children
      }
    </div>
  );
}