import React, { useRef } from "react";
import { motion } from "framer-motion";

export function DraggableCardContainer({ children, className = "" }) {
  const constraintsRef = useRef(null);

  return (
    <div
      ref={constraintsRef}
      className={`relative w-full h-full ${className}`}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { constraintsRef })
      )}
    </div>
  );
}

export function DraggableCardBody({ children, className = "", constraintsRef }) {
  return (
    <motion.div
      drag
      dragElastic={0.5}
      dragConstraints={constraintsRef}
      whileTap={{ scale: 0.95 }}
      className={`absolute flex flex-col items-center rounded-2xl bg-white/30 shadow-lg backdrop-blur-md cursor-grab active:cursor-grabbing p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}
