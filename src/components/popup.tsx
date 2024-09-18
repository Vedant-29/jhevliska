import React, { useState } from "react";
import { Button } from "./ui/button";

const Popup = ({ onCorrectAnswer }: { onCorrectAnswer: () => void }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.toLowerCase() === "8669269811") {
      onCorrectAnswer();
    } else {
      alert("Wrong answer! Try again.");
    }
  };

  return (
    <div className="fixed z-10 inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Answer to increase your budget by Rs. 1000!</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Vedu cha Phone Number kay ashto</label>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border px-4 py-2 rounded w-full mb-4"
          />
           <Button
            className="bg-pink-500 hover:bg-pink-600 transform hover:-translate-y-1 transition duration-300 w-full mt-2"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
