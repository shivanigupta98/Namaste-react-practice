/*
 Exercise: Build a Counter Component
Goal:
Create a button that increases the count every time it's clicked.
*/

const { useState } = React;

function Counter(){
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Increase Count</button>
    </div>
  )
}


function App() {
  return (
    <main>
<h1>Counter App</h1>
<Counter/>
    </main>

  )
}
ReactDOM.render(<App />, document.getElementById("root"));
