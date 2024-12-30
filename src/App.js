import './App.css';
import React from'react';

function App() {
  const [count, setCount] = React.useState(0);

  let stock = 10;
  
  function Increment(){
    if (count < stock){
      setCount(count + 1);
    }
  }

  function Decrement(){
    if (count > 0){
      setCount(count - 1);
    }
  }
  return (
   <>
     <button onClick={Decrement}>-</button>
     <p>{count}</p>
     <button onClick={Increment}>+</button>
   </>
  );
}

export default App;
