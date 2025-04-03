import React from 'react';
import  ProductDisplay from './ProductDisplay';
import './products.css';
 //import CartPage from './CartPage';
 import CartIcon from './CartIcon';


const LoginHome = () => {
  
 //const [showCart, setShowCart] = useState(false);
  return (
      <div>
        <CartIcon /> 
          <ProductDisplay/>
        {/* {showCart && <CartPage />} */}

      </div>
  );
};

export default LoginHome;