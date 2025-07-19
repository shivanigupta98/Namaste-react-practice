/*
Exercise: Toggle Component
Goal:
Clicking the button should toggle between: on <-> off
*/

const { useState } = React;

function Toggle(){
const [isOn, setIsOn] = useState(true);
function handleToggle(){
 setIsOn(!isOn);
}
  return(
   <div>
    <h2>{isOn? "On":"Off"}</h2>
    <button onClick={handleToggle}>Toggle</button>
   </div>
  )
}


function App() {
  return (
    <main>
<h1>Toggle App</h1>
<Toggle/>
    </main>

  )
}
ReactDOM.render(<App />, document.getElementById("root"));
