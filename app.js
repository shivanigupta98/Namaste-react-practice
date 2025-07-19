// Build a Notification component

// Shows different messages based on type prop (success, error, warning)

function Notification({type}){
const messages={
  success:"Successful message",
  error:"Error message",
  warning:"Warning message"
}
const message = messages[type] || "Default notification";
const className = messages[type] ? type : 'default';
return(
  <div className={className}>{message}</div>
)
}

function App() {
  return (
    <main>
      <Notification type="success"/>
      <Notification type="error"/>
      <Notification type="warning"/>
    </main>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
