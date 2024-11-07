import { useCart } from '../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cart } = useCart();

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <h2 className="checkout-total">
        Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </h2>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default CheckoutPage;
