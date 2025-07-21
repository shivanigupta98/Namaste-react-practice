const { useState, useEffect } = React;

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    }

    // Add the event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty array = run once when mounted

  return (
    <div style={{ padding: "20px" }}>
      <h2>Mouse Tracker</h2>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
    </div>
  );
}

ReactDOM.render(<MouseTracker />, document.getElementById("root"));
