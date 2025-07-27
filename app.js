/*
Celsius-Fahrenheit scale
*/

const { useState } = React;

function TemperatureConverter() {
  const [ temp, setTemp ] = useState("");
  const [ scale, setScale ] = useState('C');

  return(
    <div>
    <CelsiusInput temp={scale === 'C' ? temp : toCelsius(temp)} onTempChange={(value) => {
        setTemp(value);
        setScale('C');
      }} />
      <FahrenheitInput temp={scale === 'F' ? temp : toFahrenheit(temp)}
        onTempChange={(value) => {
          setTemp(value);
          setScale('F');
        }}
      />
      </div>
  )
}

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }


function CelsiusInput({temp, onTempChange}) {
  return(
    <div>
      <label>Celsius: </label>
      <input 
      type="number"
      value={temp}
      onChange={(e)=>{onTempChange(e.target.value)}} 
      ></input>
    </div>
  )

}

function FahrenheitInput({temp, onTempChange}) {
return(
    <div>
      <label>Fahrenheit: </label>
      <input 
      type="number"
      value={temp}
      onChange={(e)=>{onTempChange(e.target.value)}} 
      ></input>
    </div>
  )
}

function App() {
  return (
    <div><TemperatureConverter/></div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
