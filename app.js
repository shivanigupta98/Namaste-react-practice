const cards = [
  { title: "Movie", description: "bollywood", buttontext: "Play" },
  { title: "News", description: "regional", buttontext: "Play" },
  { title: "Songs", description: "bollywood", buttontext: "Resume" }
];


function Card({title,description,buttontext}){
return(
  <div className="card">
  <h3>{title}</h3>
  <p>{description}</p>
  <button>{buttontext}</button>
  </div>
)
}
function App(){
  return(
    <main>
      {cards.map((card,index)=>(
        <Card 
        key={index}
        title={card.title}
        description={card.description}
        buttontext={card.buttontext}
        />
      ))}
      {/* <Card title="Movie"description="bollywood" buttontext="Play"/>
      <Card title="News"description="regional" buttontext="Play"/>
      <Card title="Songs"description="bollywood" buttontext="Resume"/> */}
</main>
  )
}
ReactDOM.render(<App  />, document.getElementById("root"));
