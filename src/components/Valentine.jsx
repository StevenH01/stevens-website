import React, { useState } from "react";

const ValentineWithRose = () => {
  const [yesSize, setYesSize] = useState(1); // State for Yes button size
  const [showRose, setShowRose] = useState(false); // State to trigger the rose animation
  const [questionText, setQuestionText] = useState("Will you be my valentine?"); // Initial question text

  const textOptions = [
    "Are you sure?",
    "Why not???????????????",
    "Do you not love me???",
    "Maybe try clicking Yes instead!",
    "There might be a surprise if you hit yes!",
  ];

  const handleYesClick = () => {
    setShowRose(true); // Show the blooming rose
  };

  const handleNoClick = () => {
    setYesSize(yesSize + 0.2); // Increment the size of the Yes button
    // Randomize the question text
    const randomText = textOptions[Math.floor(Math.random() * textOptions.length)];
    setQuestionText(randomText);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200 p-4">
      {/* Initial View */}
      {!showRose && (
        <>
          <div className="mb-8">
            <img
              src="https://media.tenor.com/ZJ0t7DP3FjMAAAAi/milk-and-mocha-gif-mocha-makeing-love.gif"
              alt="Funny GIF"
              className="w-72 h-72 object-contain rounded-lg shadow-lg"
            />
          </div>
          <h1 className="text-2xl font-bold text-center mb-6">{questionText}</h1>
          <div className="flex gap-4">
            <button
              onClick={handleYesClick}
              className="transition-all duration-300 text-white font-bold py-2 px-4 rounded-full bg-green-500 hover:bg-green-600"
              style={{
                transform: `scale(${yesSize})`, // Dynamically scale the Yes button
              }}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="text-white font-bold py-2 px-4 rounded-full bg-red-500 hover:bg-red-600"
            >
              No
            </button>
          </div>
        </>
      )}

      {/* Rose Animation with Text */}
      {showRose && (
        <div className="flex flex-col items-center justify-center h-full">
          {/* Rose Animation */}
          <div className="relative w-32 h-64 mb-4">
            {/* Stem */}
            <div className="absolute w-1 bg-green-600 left-1/2 -translate-x-1/2 bottom-0 animate-grow-stem"></div>

            {/* Petals */}
            <div className="absolute w-12 h-12 bg-red-500 rounded-full top-1/4 left-1/2 -translate-x-1/2 opacity-0 animate-bloom-petal"></div>
            <div className="absolute w-6 h-6 bg-green-600 rounded-full top-[75%] left-[32%] opacity-0 animate-bloom-petal delay-50"></div>
            <div className="absolute w-8 h-8 bg-green-600 rounded-full top-[50%] left-[50%] opacity-0 animate-bloom-petal delay-100"></div>
            <div className="absolute w-10 h-10 bg-red-400 rounded-full top-[22%] left-[30%] opacity-0 animate-bloom-petal delay-150"></div>
            <div className="absolute w-10 h-10 bg-red-600 rounded-full top-[22%] left-[50%] opacity-0 animate-bloom-petal delay-300"></div>
            <div className="absolute w-8 h-8 bg-red-500 rounded-full top-[18%] left-[30%] opacity-0 animate-bloom-petal delay-450"></div>
            <div className="absolute w-8 h-8 bg-red-400 rounded-full top-[18%] left-[40%] opacity-0 animate-bloom-petal delay-600"></div>
          </div>

          {/* Valentine Text */}
          <h1 className="text-3xl text-center font-bold mt-6">
            🌹 You Are My Valentine! 🌹
          </h1>
        </div>
      )}
    </div>
  );
};

export default ValentineWithRose;
