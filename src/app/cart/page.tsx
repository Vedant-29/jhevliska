"use client"

import { useCart } from '@/context/cartContext';
import { useRouter } from 'next/navigation';
import { AiOutlineClose } from 'react-icons/ai';


interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const CartPage = () => {
  const { cart, total, removeFromCart } = useCart();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-pink-50 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty</p>
      ) : (
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4">
          <div className="space-y-4">
            {cart.map((item: CartItem, index: number) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">Rs. {item.price}</p>
                  </div>
                </div>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 transition-colors"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-300 mt-6 pt-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Total: Rs. {total}</h2>
          </div>
        </div>
      )}
      <button
        className="mt-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        onClick={() => router.push("/selection")}
      >
        <AiOutlineClose size={24} className="mr-2" />
        Continue Shopping
      </button>
    </div>
  );
};

export default CartPage;