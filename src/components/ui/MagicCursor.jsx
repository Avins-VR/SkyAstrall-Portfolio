"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MagicCursor() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setParticles((prev) => [...prev.slice(-20), newParticle]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 9999 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute w-3 h-3 rounded-full bg-[#00b6e8]"
          style={{ left: p.x, top: p.y }}
        />
      ))}
    </div>
  );
}