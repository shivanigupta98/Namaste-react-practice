/*
Build a Layout component

Reusable layout with a header, content, and footer area

Accepts children for the content slot
*/

function Layout({ children }) {
  return (
    <div style={{ border: '2px solid #ddd', borderRadius: '8px', padding: '16px', margin: '16px' }}>
      <header style={{ backgroundColor: '#eee', padding: '10px' }}>
        <h2>Site Header</h2>
      </header>

      <main style={{ padding: '10px' }}>
        {children}
      </main>

      <footer style={{ backgroundColor: '#eee', padding: '10px', marginTop: '16px' }}>
        <p>&copy; 2025 My Website</p>
      </footer>
    </div>
  );
}


function App() {
  return (
   <Layout>
      <h3>Welcome to the Homepage!</h3>
      <p>This is the main content area.</p>
    </Layout>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
