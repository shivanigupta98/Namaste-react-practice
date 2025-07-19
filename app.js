function StatusMessage({ isLoggedIn }) {
  return (
    <h3>{isLoggedIn ? "Welcome Back" : "Please Login"}</h3>
  )
}

function App() {
  return (
    <main>
      <StatusMessage isLoggedIn={false} />
    </main>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
