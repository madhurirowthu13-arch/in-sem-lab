
function Products() {
  const products = [
    {id: 1, name: "Smartphone", price: "699", icon:""},
    {id: 2, name: "Laptop", price: "999", icon:""},
    {id: 3, name: "Headphones", price: "199", icon:""},
    {id: 4, name: "Smartwatch", price: "299", icon:""},
    {id: 5, name: "Camera", price: "499", icon:""},
    {id: 6, name: "Tablet", price: "399", icon:""},
  ];   
  return (
    <section classname="products">
        {products.map((product) => (
            <div className="product-card" key={product.id}>
            <div className="product-icon">{product.icon}</div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>ADD TO CART</button>
        </div>
        ))}
    </section>
  );
}export default Products;