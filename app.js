/*
Goal:
Create a React component that displays a timer that:

Starts counting automatically when the component mounts.

Increases the count by 1 every second (1000ms).

Provides a button to stop the timer.

🔧 Requirements:
Use useState to manage the seconds counter.

Use useEffect to start the timer using setInterval when the component mounts.

Add a "Stop Timer" button that clears the interval when clicked.

Optional bonus: Add a "Reset" button that sets seconds back to 0 and restarts the timer.
*/

const { useState, useEffect } = React;

function Timer() {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    setIntervalId(id);
    return () => clearInterval(id)
  }, []);

  function stopTimer() {
    clearInterval(intervalId);
  }
  function resetTimer() {
    clearInterval(intervalId);
    setTimer(0);
    const id = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000)
    setIntervalId(id);
  }
  return (
    <div>
      <p>Timer: {timer} seconds</p>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={resetTimer}>Reset Button</button>
    </div>
  )
}

ReactDOM.render(<Timer />, document.getElementById("root"));
