import { Link } from "react-router-dom";

function Navbar({ cartCount, searchTerm, setSearchTerm }) {
return ( <nav className="navbar"> <h1 className="logo">Cartify</h1>


  <input
    type="text"
    placeholder="Search products..."
    className="search-bar"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <ul className="nav-links">
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/products">Products</Link>
    </li>

    <li>
      <Link to="/cart">
        Cart ({cartCount})
      </Link>
    </li>

    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
</nav>


);
}

export default Navbar;
