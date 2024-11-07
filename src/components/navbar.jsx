import  { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">Twist Cart</div>

      <form onSubmit={handleSearchSubmit} className="navbar-search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      <div className="navbar-buttons">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
