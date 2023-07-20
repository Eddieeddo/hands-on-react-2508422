import { useState } from "react";

export default () => {
  //Track state of the a variable
  const [count, setCount] = useState(0);
  return (
    <button className="outline" onClick={() => setCount(count + 1)}>
      {
        // Using IIFE
        // (() => {
        //   if (count == 0){
        //     return "Click to support"
        //   } else {
        //     return `Supported ${count} times`
        //   }
        // })()

        //OR Ternary (preferred, cleaner code)
        count === 0 ? "Click to support them!" : `Supported ${count} times`
      }
    </button>
  )
  
}
