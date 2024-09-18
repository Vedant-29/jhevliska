"use client";

import React, { useState, useEffect } from "react";
import GiftCard from "./gift-card";
import Popup from "./popup"; // Popup component for Rs. 6000 budget upgrade
import { useCart } from "@/context/cartContext";
import { motion } from "framer-motion"; // For animations
import { Button } from "./ui/button";
import Link from "next/link";

const giftCards: GiftCard[] = [
  {
    id: 1,
    name: "Fitted T-shirt",
    price: 399,
    description: "H&M - Burgundy",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fab%2F92%2Fab92ce6abc6f9295367546c727962070e3d0b345.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_basics_tops_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 2,
    name: "Fitted T-shirt",
    price: 399,
    description: "H&M - Dark Grey",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F52%2F22%2F5222f35689a5d4d13389c6c37728ee744e3b798d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 3,
    name: "Bouclé blouse",
    description: "H&M - White",
    price: 1899,
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F65%2F97%2F6597ae215ea1ab7e3681a5fda8acc98b32a1a6b4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 100,
    name: "Long-sleeved jersey top",
    price: 699,
    description: "H&M - Black",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F84%2Ff6%2F84f638c69f62de4bf16b12b96f189b2672627760.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 81,
    name: "Long-sleeved jersey top",
    price: 699,
    description: "H&M - Brown",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F66%2Fd5%2F66d58cc53682d8f7cdd57e3812b8fc92cf7b0cd0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 5,
    name: "Fine-knit polo shirt",
    price: 1299,
    description: "H&M - Cream",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc1%2F6a%2Fc16ad3532ccb2a038685ada65a4d18fc3ff6fa03.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 6,
    name: "Gift Card 6",
    price: 1299,
    description: "H&M - Navy blue/SoHo",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd3%2Feb%2Fd3eb142b0eb51fd2a98737dc9ba924cc28753346.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 7,
    name: "Sweatshirt",
    price: 799,
    description: "H&M - Light grey marl",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb6%2F06%2Fb60693d461debcc37f5295e133c031e8f0039db6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 8,
    name: "Text-motif sweatshirt",
    price: 1499,
    description: "H&M - White/Paris",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F36%2F98%2F369871df582ff7a47fd6ba2eadd8584253ffa2e6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 9,
    name: "Cropped zip-through hoodie",
    price: 1399,
    description: "H&M - Burgundy",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F52%2Fb2%2F52b2ccadd637d3414e42186f5fd0646b1749f078.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 10,
    name: "Sweatshirt",
    price: 1299,
    description: "H&M - Cream/Le Marais",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F1f%2F0a%2F1f0a063416ea75ef914eab1f2588061d590383b5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_hoodiesswetshirts_sweatshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 11,
    name: "Oversized sweatshirt",
    price: 1499,
    description: "H&M - Dark red",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F04%2F9e%2F049e5e92a12ad9b9edfcb924714a3c63ff647a63.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_basics_tops_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 12,
    name: "V-neck sweatshirt",
    price: 1999,
    description: "H&M - Cream/Beverly Hills",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0d%2Ff8%2F0df8f531aeae0d0eaba3265099fcb7f23e0a0c08.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 13,
    name: "Text-motif sweatshirt",
    price: 1499,
    description: "H&M - Mole/Self-Care Club",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb8%2Fe3%2Fb8e37da1d615e50fe5c0ada16d2edfd89789c7a5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 14,
    name: "Motif-detail sweatshirt",
    price: 1899,
    description: "H&M - White/The Hamptons",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F71%2F69%2F71699d0c6832ce336a8b024f696c7708234dc825.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 15,
    name: "Cropped strappy top",
    price: 399,
    description: "H&M - Khaki green",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F86%2Fc9%2F86c92b48d9772d1da4d317c37c6e7c3fdfc1fca1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_basics_tops_vests%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 16,
    name: "Printed T-shirt",
    price: 499,
    description: "H&M - Dark grey/On the Road Again",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F7f%2F11%2F7f111b0cf62afcf1a35a1129ff14301e1de3b408.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 17,
    name: "Picot-trimmed cotton top",
    price: 999,
    description: "H&M - Light beige/Floral",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F30%2F79%2F307928a66199c326d175ad78fa8412f4a2c05b1e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 18,
    name: "Loose-fit polo shirt",
    price: 1499,
    description: "H&M - White/Navy blue striped",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdf%2F3a%2Fdf3a99c2e06bb3a2bc3341d13f7b65641c622fb4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_tops_longsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
  },
  {
    id: 29,
    name: "Loose-fit polo shirt",
    price: 1499,
    description: "H&M - Burgundy",
    imageUrl:
      "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0c%2F5e%2F0c5e1e617ed1c3d03fba03945c1f53243b4dede5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
  },
  {
    id: 21,
    name: "Bombay Paisley Red Ikat Patterned Tiered Cotton Dress",
    price: 1499,
    description: "Westside",
    imageUrl:
      "https://www.westside.com/cdn/shop/files/300978709RED_3.jpg?v=1717766678&width=493",
  },
  {
    id: 22,
    name: "Bombay Paisley Off-White Paisley A-line Dress",
    price: 1299,
    description: "Westside",
    imageUrl:
      "https://www.westside.com/cdn/shop/files/300978701OFFWHITE_3.jpg?v=1715242916&width=493",
  },
  {
    id: 23,
    name:"Bombay Paisley Off-White Floral Printed A-Line Dress",
    price: 1499,
    description: "Westside",
    imageUrl:
      "https://www.westside.com/cdn/shop/files/300979502WHITE_3.jpg?v=1715242850&width=493",
  },
  {
    id: 24,
    name: "Bombay Paisley White Striped Tiered Cotton Dress",
    price: 1699,
    description: "Westside",
    imageUrl:
      "https://www.westside.com/cdn/shop/files/300978712WHITE_1.jpg?v=1717766678&width=493",
  },
  {
    id: 25,
    name: "Bombay Paisley Off-White Printed Tiered Cotton Blend Dress",
    price: 1499,
    description: "Westside",
    imageUrl:
      "https://www.westside.com/cdn/shop/files/300992262OFFWHITE_1.jpg?v=1725619814&width=493",
  },
  {
    id: 26,
    name: "Bombay Paisley Peach Printed Tiered Dress",
    price: 1499,
    description: "Westside",
    imageUrl:
      "https://www.westside.com/cdn/shop/files/300977864PEACH_1.jpg?v=1715847085&width=493",
  },
  {
    id: 27,
    name: "Bombay Paisley Off-White Floral Design Empire-Line Dress",
    price: 1299,
    description: "Westside",
    imageUrl:
      "https://www.westside.com/cdn/shop/files/300978716OFFWHITE_1.jpg?v=1715848176&width=493",
  },
  {
    id: 28,
    name: "Bombay Paisley Blue Printed Tiered Dress",
    price: 1499,
    description: "Westside",
    imageUrl:
      "https://www.westside.com/cdn/shop/files/300977863BLUE_1.jpg?v=1715242245&width=493",
  },
  {
    id: 29,
    name: "Bombay Paisley Off-White Floral Printed A-Line Dress",
    price: 1499,
    description: "Westside",
    imageUrl:
      "https://www.westside.com/cdn/shop/files/300979502WHITE_1.jpg?v=1715242849&width=493",
  },
  {
    id: 30,
    name: "Bombay Paisley Dark Blue Paisley Tiered Cotton Dress",
    price: 1699,
    description: "Westside",
    imageUrl:
      "https://www.westside.com/cdn/shop/files/300982618DEEPBLUE_1.jpg?v=1718882737&width=493",
  },
  {
    id: 31,
    name: "Bombay Paisley Rust Embroidered Tiered Cotton Dress",
    price: 1699,
    description: "Westside",
    imageUrl:
      "https://www.westside.com/cdn/shop/files/300979511RUST_1.jpg?v=1716469632&width=493",
  },
  {
    id: 32,
    name: "Bombay Paisley Off-White Floral Design A-Line Cotton Dress",
    price: 1499,
    description: "Westside",
    imageUrl:
      "https://www.westside.com/cdn/shop/files/300978917OLIVE_1.jpg?v=1716469623&width=493",
  }, 
  {
    id: 33,
    name: "Bombay Paisley Orange Floral Design Tiered Cotton Dress",
    price: 1499,
    description: "Westside",
    imageUrl:
      "https://www.westside.com/cdn/shop/files/300979506RUST_1.jpg?v=1716469632&width=493",
  }
];


interface GiftCard {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const GiftCardList = () => {
  const { cart, total, addToCart } = useCart(); // Access cart context
  const [visibleGiftCards, setVisibleGiftCards] = useState<GiftCard[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [budget, setBudget] = useState(5000);
  const [shownCardIds, setShownCardIds] = useState<number[]>([]); // Track shown card IDs
  const [timer, setTimer] = useState(3);

  const getRandomGiftCards = () => {
    const availableCards = giftCards.filter(
      (card) =>
        !cart.some((c) => c.id === card.id) && !shownCardIds.includes(card.id)
    ); // Exclude added and shown cards

    if (availableCards.length === 0) return [];

    const newCards = availableCards.sort(() => 0.5 - Math.random()).slice(0, 3);
    return newCards;
  };

  const updateGiftCards = () => {
    const randomGiftCards = getRandomGiftCards();
    setVisibleGiftCards(randomGiftCards);
    setShownCardIds((prev) => [
      ...prev,
      ...randomGiftCards.map((card) => card.id),
    ]);
    setTimer(3); // Reset the timer
  };

  useEffect(() => {
    updateGiftCards(); // Initialize with first set of gift cards

    // Timer countdown
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          // Time's up, get new cards
          updateGiftCards();
          return 3;
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval); // Clear interval on cleanup
    };
  }, [cart]); // Only depends on cart changes

  useEffect(() => {
    if (total >= budget && !showPopup && budget === 5000) {
      setShowPopup(true);
    }
  }, [total]);

  const handleCorrectAnswer = () => {
    setBudget(6000); // Increase budget to Rs. 6000
    setShowPopup(false); // Close the popup
  };

  return (
    <div className="p-1 flex flex-col items-center">
      <Link href="/cart">
        <Button className="bg-pink-500 text-white px-4 rounded hover:bg-pink-600 mb-4">
          View Cart
        </Button>
      </Link>
      <h2 className="text-xl font-bold mb-2">
        Total: Rs. {total} / {budget}
      </h2>

      {/* Timer */}
      {visibleGiftCards.length > 0 && (
        <div className="text-gray-600 mb-4">
          Cards will disappear in: <span className="font-bold">{timer}s</span>
        </div>
      )}

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 h-4 rounded mb-4">
        <div
          className={`h-4 rounded transition-all duration-300 ${total >= budget
              ? "bg-red-500"
              : total >= budget * 0.8
                ? "bg-orange-500"
                : "bg-green-500"
            }`}
          style={{ width: `${(total / budget) * 100}%` }}
        />
      </div>

      {/* Popup for Rs. 6000 budget */}
      {showPopup && <Popup onCorrectAnswer={handleCorrectAnswer} />}

      {/* Gift Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleGiftCards.length > 0 ? (
          visibleGiftCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <GiftCard
                name={card.name}
                price={card.price}
                imageUrl={card.imageUrl}
                onAddToCart={() => addToCart(card)}
                description={card.description}
                disabled={cart.some((c) => c.id === card.id)}
              />
            </motion.div>
          ))
        ) : (
          <div className="flex justify-center items-center mt-8 text-gray-600">
            No more gift cards available
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftCardList;
