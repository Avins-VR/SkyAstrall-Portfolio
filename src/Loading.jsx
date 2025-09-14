import React, { useEffect, useState } from "react";
import bgVideo from "./assets/loading bg.mp4";

const Loading= ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starArray = Array.from({ length: 40 }, () => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 3 + 1,
    }));
    setStars(starArray);

    let interval;
    let startTime = Date.now();

    interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / 5000) * 100, 100);
      setProgress(Math.floor(percentage));

      if (percentage >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onFinish(); 
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black flex items-center justify-center text-white">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      {/* Stars */}
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        ></span>
      ))}

      {/* Corner Accents */}
      <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-purple-500"></div>
      <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-purple-500"></div>
      <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-purple-500"></div>
      <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-purple-500"></div>

      {/* Loader Content */}
      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Loading Portfolio
        </h1>
        <p className="mt-5 tracking-widest text-gray-300">
          CRAFTING DIGITAL EXPERIENCE
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mt-6">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-2 bg-gradient-to-r from-purple-500 to-blue-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm mt-2 text-gray-400">
            <span>Initializing...</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-300"></span>
        </div>

        <p className="mt-3 text-sm text-gray-400">Loading assets...</p>
      </div>
    </div>
  );
};

export default Loading;
