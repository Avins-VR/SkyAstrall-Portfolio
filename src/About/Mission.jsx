import React, { useRef } from "react";
import { motion } from "framer-motion";
import { GlowCard } from "../components/ui/GlowCard";

import motion1 from "../assets/mission1.jpg";
import motion2 from "../assets/mission2.jpg";
import motion3 from "../assets/mission3.jpg";
import motion4 from "../assets/mission4.jpg";

// Draggable container with motion
export function DraggableCardContainer({ children, className = "" }) {
  const constraintsRef = useRef(null);

  return (
    <div ref={constraintsRef} className={`relative w-full h-full ${className}`}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { constraintsRef, custom: index })
      )}
    </div>
  );
}

// Draggable card with premium motion
export function DraggableCardBody({
  children,
  className = "",
  constraintsRef,
  image,
  initialRotation,
  initialPosition,
  custom,
}) {
  return (
    <motion.div
      drag
      dragElastic={0.5}
      dragConstraints={constraintsRef}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50, rotate: initialRotation }}
      animate={{ opacity: 1, y: 0, rotate: initialRotation }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: custom * 0.2,
      }}
      whileHover={{ scale: 1.05, boxShadow: "0px 25px 50px rgba(0,0,0,0.5)" }}
      className={`absolute w-[280px] h-[390px] rounded-xl shadow-2xl cursor-grab active:cursor-grabbing bg-black p-1 ${className}`}
      style={{ x: initialPosition.x, y: initialPosition.y }}
    >
      <div
        className="w-full h-full rounded-lg border border-gray-200"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function Mission() {
  const missionImages = [motion1, motion2, motion3, motion4];

  const cardStyles = [
    { rotation: -8, initialX: 50, initialY: 30 },
    { rotation: 0, initialX: 80, initialY: 20 },
    { rotation: 8, initialX: 110, initialY: 30 },
    { rotation: -4, initialX: 60, initialY: 60 },
  ];

  return (
    <section className="flex justify-center items-center py-10 px-4">
      <GlowCard
        glowColor="blue"
        size="xl"
        className="relative w-[95%] max-w-[1400px] rounded-[20px] shadow-2xl bg-gradient-to-r from-[#1f2937] to-[#111827] pt-[40px] pb-[120px] px-[80px]"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Draggable Image Gallery */}
          <div className="relative w-full h-96 flex items-center">
            <DraggableCardContainer className="w-full h-full">
              {missionImages.map((img, index) => (
                <DraggableCardBody
                  key={index}
                  image={img}
                  initialRotation={cardStyles[index]?.rotation || 0}
                  initialPosition={{
                    x: cardStyles[index]?.initialX || 0,
                    y: cardStyles[index]?.initialY || 0,
                  }}
                />
              ))}
            </DraggableCardContainer>
          </div>

          {/* Right side: Our Mission Text with motion */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <h2 className="text-[40px] md:text-[40px] text-purple-400 font-bold mb-10 mt-14">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-[1000px] mx-auto md:mx-0">
              We exist to empower businesses by delivering intelligent, secure,
              and infinitely scalable software solutions that harness the
              transformative potential of Artificial Intelligence, Cloud
              Computing, and Automation.
              <br />
              <br />
              Our purpose is to simplify technology—breaking down barriers and
              making advanced tools accessible, affordable, and practical for
              organizations of every size, from startups to enterprises.
              <br />
              <br />
              We are driven by a relentless passion to innovate, inspire, and
              impact industries worldwide, ensuring that technology doesn’t just
              solve problems but creates opportunities, accelerates growth, and
              shapes a smarter, more connected future.
            </p>
          </motion.div>
        </div>
      </GlowCard>
    </section>
  );
}
