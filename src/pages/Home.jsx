import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import nikeImage from "../assets/nike.jpg";
import trendsImage from "../assets/trends.jpg";
import airImage from "../assets/air.jpg";
import jordanImage from "../assets/jordan.jpg";
import fastrackImage from "../assets/fastrack.jpg";
import rolexImage from "../assets/rolex.jpg";

function Home({ addToCart, searchTerm }) {

  const products = [
    { image: nikeImage, name: "Nike Air", price: "$88" },
    { image: trendsImage, name: "Trends Comfort", price: "$76" },
    { image: airImage, name: "Air One", price: "$99" },
    { image: jordanImage, name: "Jordan", price: "$86" },
    { image: fastrackImage, name: "Fastrack Black", price: "$166" },
    { image: rolexImage, name: "Rolex Moon", price: "$899" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page">

      <Hero />

      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <h2>Welcome to My E-Commerce Web</h2>
        <p style={{ color: "#666" }}>Explore amazing premium products</p>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            addToCart={() => addToCart(product)}
          />
        ))}
      </div>

      <Categories />
      <Footer />

    </div>
  );
}

export default Home;