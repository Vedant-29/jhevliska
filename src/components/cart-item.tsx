import React from 'react';

type CartItemProps = {
  name: string;
  price: number;
  onRemoveFromCart: () => void;
};

const CartItem: React.FC<CartItemProps> = ({ name, price, onRemoveFromCart }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      <div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p>Price: Rs. {price}</p>
      </div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={onRemoveFromCart}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
