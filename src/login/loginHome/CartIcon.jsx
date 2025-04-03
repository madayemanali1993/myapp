// src/CartIcon.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  return (
    <Link to="/cart" className="cart-icon">
      🛒
    </Link>
  );
};

export default CartIcon;