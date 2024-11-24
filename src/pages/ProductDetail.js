import React, { useState } from 'react';
import '../styles/ProductsDetail.css'; // Custom styles
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1); }

    

  return (
    <>
    <Navbar />
    <div className="product-detail-container">
      {/* Image Gallery */}
      <div className="image-gallery">
        <img src="https://via.placeholder.com/300" alt="Main Product" className="main-image" />
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h2>VOLCAN AZUL GESHA</h2>
        <p className="price">$33</p>
        <p>
        Apricot. Jasmine. | Costa Rica, allowing you to drink from any angle, 360 degrees. 
          This tumbler keeps cold drinks cold and hot drinks hot for an impressively long time. Please enjoy it outdoors or at home. BPA-free.
        </p>
        <div className="product-actions">
        <div className="quantity-control">
          <button onClick={handleDecrement} className="btn-decrement">-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement} className="btn-increment">+</button>
        </div>
        <button className="add-to-cart-btn" >Add to Cart</button>
      </div>
      </div>
    </div>

    <Footer />
    </>
  );
}

export default ProductDetail;
