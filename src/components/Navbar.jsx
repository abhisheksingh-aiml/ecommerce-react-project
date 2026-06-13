function Navbar() {
    return(
        <nav className="navbar">
            <h1 className="logo">Cartify</h1>

            <input
               type="text"
               placeholder="Search products..."
               className="Search-bar"
            />

            <ul className="nav-links">
                <li>Home</li>
                <li>Product</li>
                <li>Cart</li>
                <li>About</li>
            </ul>
        </nav>
    );
}

export default Navbar;