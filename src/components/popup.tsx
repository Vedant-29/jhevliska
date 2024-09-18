import React, { useState } from "react";

const Popup = ({ onCorrectAnswer }: { onCorrectAnswer: () => void }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.toLowerCase() === "correct answer") {
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
          <label className="block mb-2">What’s your favorite color?</label>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border px-4 py-2 rounded w-full mb-4"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
