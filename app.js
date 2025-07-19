/*
Create a Container component

Takes children inside a styled box

Wrap any content with it like:
<Container>
  <p>This is inside the container</p>
</Container>
*/

function Container({children}){
  return(
    <div style = {{
      border: '2px solid #ccc',
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      margin: '16px 0'
    }}>{children}
    </div>
  )
}

function App() {
  return (
    <main>
   <Container>
    <h2>This is the container</h2>
    <p>Welcome</p>
   </Container>
   <Container>
    <button>Click me</button>
   </Container>
    </main>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
