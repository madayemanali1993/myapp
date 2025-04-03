
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getCartFromLocalStorage, setCartToLocalStorage } from './localStorage';

const products = [
    {
      id: 1,
      name: "Fern",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    },
    {
      id: 2,
      name: "Mushrooms",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    },
    {
      id: 3,
      name: "Tomato basil",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    },
    {
        id: 4,
        name: "Coffee",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      },
      {
        id: 5,
        name: "Fern",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      },
      {
        id: 6,
        name: "Mushrooms",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      }, 
    // Add more products as needed
  ];
  


// const ProductDisplay = () => {
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.name} has been added to your cart!`);
//   };

//   const handleRemoveFromCart = (productToRemove) => {
//     setCart((prevCart) => prevCart.filter(product => product.id !== productToRemove.id));
//     alert(`${productToRemove.name} has been removed from your cart!`);
//   };

//   return (
//     <div className="product-display">
//       <h1>Product List</h1>
//       <div className="product-grid">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             onAddToCart={handleAddToCart}
//           />
//         ))}
//       </div>
//       <Box border={'solid 1px green'}>
//         <h2>Cart<ShoppingCartIcon/></h2>
//         <ul>
//           {cart.map((item) => (
//             <li key={item.id}>
//               {item.name} 
//               <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//         </Box>
//       </div>
 
//   );
// };




const ProductDisplay = () => {
  const [cart, setCart] = useState([]);

  // Load cart from local storage when the component mounts
  useEffect(() => {
    const storedCart = getCartFromLocalStorage();
    setCart(storedCart);
  }, []);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setCartToLocalStorage(updatedCart);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="product-display">
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;