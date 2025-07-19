/*
Goal:
Build a ThemeToggle component that:

Shows current theme: Light Mode or Dark Mode

Button toggles between the two themes

Text and background color should change based on the theme
*/

const { useState } = React;

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  function handleClick() {
    setIsDarkMode(!isDarkMode);
  }
  const themeStyles = {
    backgroundColor: isDarkMode ? "black" : "white",
    color: isDarkMode ? "white" : "black",
    padding: "20px",
    height:"100vh"
  }
  return (
    <div style={themeStyles} >
      <h2>{isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={handleClick}>Switch to {isDarkMode ? "Light Mode" : "Dark Mode"} </button>
    </div>
  )
}


function App() {
  return (
    <main>
      <h1>Toggle App</h1>
      <ThemeToggle />
    </main>

  )
}
ReactDOM.render(<App />, document.getElementById("root"));
