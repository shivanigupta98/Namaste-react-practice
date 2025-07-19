/*
 Problem Statement:
Create a Counter component with:

A number displayed on screen

A + button to increment

A - button to decrement

You’ll use:

useState to track the count

onClick to trigger events
*/

const { useState } = React;

function Counter(){
  const [counter,setCounter] = useState(0);

  function incrementHandler(){
    setCounter(counter+1);
  }
  function decrementCounter(){
    setCounter(counter-1);
  }
  return(
    <div>
      <h3>Current count: {counter}</h3>
    <button onClick={incrementHandler}>Increment</button>
    <button onClick={decrementCounter}>Decrement</button>
    </div>
  )
}

function App() {
  return (
    <main>
<Counter/>
    </main>

  )
}
ReactDOM.render(<App />, document.getElementById("root"));
