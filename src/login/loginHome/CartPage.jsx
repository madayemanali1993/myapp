// src/CartPage.jsx
import React, { useEffect, useState } from 'react';
import { getCartFromLocalStorage } from './localStorage';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = getCartFromLocalStorage();
    setCartItems(storedCart);
  }, []);

  const handleRemoveFromCart = (productToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== productToRemove.id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} 
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;