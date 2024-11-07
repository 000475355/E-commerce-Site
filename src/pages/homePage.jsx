import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <Link to={`/product/${product.id}`} className="view-details-button">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
