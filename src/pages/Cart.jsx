function Cart({ cartItems, removeFromCart }) {
return ( <div className="cart-page"> <h1>Your Cart</h1>


  {cartItems.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    cartItems.map((item, index) => (
      <div className="cart-item" key={index}>
        <img src={item.image} alt={item.name} />

        <div className="cart-details">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>

        <button onClick={() => removeFromCart(index)}>
          Remove
        </button>
      </div>
    ))
  )}
</div>


);
}

export default Cart;
