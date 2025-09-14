import React from "react";

const colors = ["#ffffff", "#FFD700", "#00FFFF", "#FF69B4", "#ADFF2F"]; 

function Stars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(550)].map((_, i) => {
        const size = Math.random() * 2 + 3; // 2-4px
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const moveX = Math.random() * 100 - 50; 
        const moveY = Math.random() * 100 - 50; 

        // Faster movement → reduce duration range
        const duration = Math.random() * 2 + 1.5; // 0.5–1.5s

        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <span
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              backgroundColor: color,
              animationDuration: `${duration}s`,
              animationDelay: `${Math.random() * 2}s`, // less delay so stars move more often
              animationName: `twinkle, move`,
              animationTimingFunction: `ease-in-out, linear`,
              animationIterationCount: `infinite, infinite`,
              transform: `translate(0, 0)`,
              "--move-x": `${moveX}px`,
              "--move-y": `${moveY}px`,
            }}
          />
        );
      })}
    </div>
  );
}

export default Stars;
