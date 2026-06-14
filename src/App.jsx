import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <Categories />
      <Footer />
    </>
  );
}

export default App;