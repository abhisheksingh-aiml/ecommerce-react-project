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

function Home({ addToCart }) {
return (
<> <Hero />


  <div>
    <h2>Welcome to My E-Commerce Web</h2>
    <p>Explore amazing products here</p>
  </div>

  <div className="product-grid">
    <ProductCard
      image={nikeImage}
      name="Nike Air"
      price="$88"
      addToCart={() =>
        addToCart({
          image: nikeImage,
          name: "Nike Air",
          price: "$88",
        })
      }
    />

    <ProductCard
      image={trendsImage}
      name="Trends Comfort"
      price="$76"
      addToCart={() =>
        addToCart({
          image: trendsImage,
          name: "Trends Comfort",
          price: "$76",
        })
      }
    />

    <ProductCard
      image={airImage}
      name="Air One"
      price="$99"
      addToCart={() =>
        addToCart({
          image: airImage,
          name: "Air One",
          price: "$99",
        })
      }
    />

    <ProductCard
      image={jordanImage}
      name="Jordan"
      price="$86"
      addToCart={() =>
        addToCart({
          image: jordanImage,
          name: "Jordan",
          price: "$86",
        })
      }
    />

    <ProductCard
      image={fastrackImage}
      name="Fastrack Black"
      price="$166"
      addToCart={() =>
        addToCart({
          image: fastrackImage,
          name: "Fastrack Black",
          price: "$166",
        })
      }
    />

    <ProductCard
      image={rolexImage}
      name="Rolex Moon"
      price="$899"
      addToCart={() =>
        addToCart({
          image: rolexImage,
          name: "Rolex Moon",
          price: "$899",
        })
      }
    />
  </div>

  <Categories />

  <Footer />
</>


);
}

export default Home;
