import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

type GiftCardProps = {
  name: string;
  price: number;
  imageUrl: string;
  onAddToCart: () => void;
  description: string;
  disabled: boolean;
};

const GiftCard: React.FC<GiftCardProps> = ({ name, price, imageUrl, onAddToCart,description, disabled }) => {
  return (
    <motion.div
      className="gift-card border rounded-xl p-6 shadow-md bg-white text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <img src={imageUrl} alt={name} className="w-60 h-80 object-cover rounded-md mx-auto" />
      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
      
      <p className="text-sm text-gray-500 mb-4">{description}</p>

      <div className="flex flex-col justify-between items-center">
        <span className="text-lg font-bold text-gray-800">Rs. {price}</span>
        <Button
          onClick={onAddToCart}
          disabled={disabled}
          className={`mt-4 w-full flex justify-center items-center px-4 py-2 text-white rounded-sm ${
            disabled ? 'bg-pink-500 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600'
          }`}
        >
          {disabled ? 'Already Added' : 'Add to Cart'}
        </Button>
      </div>
    </motion.div>
  );
};

export default GiftCard;
