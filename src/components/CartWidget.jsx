
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Usamos Font Awesome para el ícono

const CartWidget = () => {
  const cartItems = 3; // Número hardcodeado de ítems

  return (
    <div style={{ position: 'relative' }}>
      <FaShoppingCart size={24} />
      <span 
        style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          backgroundColor: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '5px 10px',
          fontSize: '12px',
        }}>
        {cartItems}
      </span>
    </div>
  );
};

export default CartWidget;
