
function ProductList({ products }) {
  return (
    <div>
      {products.map((product, index) => (
        <ProductItem name={product.name} price={product.price} key={index} />
      ))}
    </div>
  )
}

function ProductItem({ name, price }) {
  return (
    <div className="product">
      <h3>Name of the product: {name}</h3>
      <h3>Price of the product: {price}</h3>
    </div>
  )
}
function App() {
  return (
    <main>
      <ProductList products={[{ name: "Shoes", price: 100 }, { name: "Bag", price: 50 }]} />
    </main>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
