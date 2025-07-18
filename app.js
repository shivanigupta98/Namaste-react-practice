// app.js
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
function UserProfile({name, age, location}){
return(
  <div className="user-profile">
  <h3>Name: {name}</h3>
  <h3>Age: {age}</h3>
  <h3>Location: {location}</h3>
  </div>
)
}
function App(){
  return(
    <main>
<Welcome name ="Shivani"/>
<UserProfile name="Shivani" age="27" location="Gwalior"/>
</main>
  )
}
ReactDOM.render(<App  />, document.getElementById("root"));
