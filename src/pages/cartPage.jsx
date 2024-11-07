import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          {/* Display the product image */}
          <img src={item.image} alt={item.title} />
          
          <div>
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
          </div>

          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2 className="cart-total">
        Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </h2>
    </div>
  );
};

export default CartPage;
