import React, { useState } from 'react'
import classes from './Counter.module.scss'

export const Counter = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <div>Count: {count}</div>
      <button className={classes.btn} onClick={() => setCount(count+1)}>increase</button>
    </div>
  )
}
