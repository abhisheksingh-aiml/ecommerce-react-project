function Cart({ cartItems }) {
return ( <div> <h1>Your Cart</h1>


  {cartItems.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    cartItems.map((item, index) => (
      <div key={index}>
        <img src={item.image} alt={item.name} width="100" />

        <h3>{item.name}</h3>

        <p>{item.price}</p>
      </div>
    ))
  )}
</div>


);
}

export default Cart;
