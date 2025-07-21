/*
Goal
Create a React component that:

Uses useEffect to fetch data from JSONPlaceholder

Stores data using useState

Displays the fetched data

Handles loading state
*/

const { useState, useEffect } = React;

function PostList(){
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res=>res.json())
  .then((data)=>{
    setPosts(data);
    setLoading(false);
  })
  .catch((error=>{
    console.error("Error while fetching posts",error);
    setLoading(false);
  }))
},[]);

if(loading){
  return <h2>Posts Loading....</h2>;
}

return(
  <div>
    <h2>Post from API</h2>
    <ul>
      {posts.slice(0,10).map((post)=>(
        <li key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  </div>
)

}

ReactDOM.render(<PostList />, document.getElementById("root"));
