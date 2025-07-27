/*
Feedbback form
*/

const { useState } = React;

function FeedbackForm({ }) {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  function SubmitHandler(e) {
      e.preventDefault();
    console.log("Name " + name + ", Feedback: " + feedback);
    setName("");
    setFeedback("");
   
  }
 

  return (
    <main>
      <form onSubmit={SubmitHandler}>
        <p>Name:</p>
        <input id="name" type="text"value={name} onChange={(e) => { setName(e.target.value) }}></input>
        <br />
        <p>Feedback:</p>
        <textarea id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
        <br />
        <button disabled={name === "" || feedback === ""}>Submit</button>
      </form>
    </main>
  )
}
function App() {
  return (
    <div><FeedbackForm /></div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
