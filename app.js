/*
 Requirements:
Show an input field to type a name.

As the user types, display:

"Hello, [name]"
(e.g., if the user types Shivani, it shows Hello, Shivani)

If the input is empty, show a default message:

"Please enter your name"
*/

const { useState } = React;

function Form(){
  const [name, setName]=useState('');
  return(
    <div>
      <h3>{name.trim()===''?"Please enter your name":"Hello "+name}</h3>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
    </div>
  )
}

function App() {
  return (
    <main>
 <Form/>
    </main>

  )
}
ReactDOM.render(<App />, document.getElementById("root"));
