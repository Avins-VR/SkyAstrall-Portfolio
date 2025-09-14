import React from "react";
import { motion } from "framer-motion";
import { DraggableCardContainer, DraggableCardBody } from "./Mission";
import { GlowCard } from "../components/ui/GlowCard";

import vision1 from "../assets/vision1.jpg";
import vision2 from "../assets/vision2.jpg";
import vision3 from "../assets/vision3.jpg";
import vision4 from "../assets/vision4.jpg";

export default function Vision() {
  const visionImages = [vision1, vision2, vision3, vision4];

  const visionCardStyles = [
    { rotation: -8, initialX: 50, initialY: 30 },
    { rotation: 0, initialX: 80, initialY: 20 },
    { rotation: 8, initialX: 110, initialY: 30 },
    { rotation: -4, initialX: 60, initialY: 60 },
  ];

  return (
    <section className="flex justify-center items-center py-10 px-4">
      <GlowCard
        glowColor="purple"
        size="xl"
        className="relative w-[95%] max-w-[1400px] rounded-[20px] shadow-2xl 
          bg-gradient-to-r from-[#1f2937] to-[#111827] pb-[100px] px-[80px]"
      >
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side: Vision Text with Motion */}
          <motion.div
            className="text-white text-center md:text-left mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <h2 className="text-[40px] md:text-[40px] text-purple-400 font-bold mb-10 mt-2">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed max-w-[1000px] mx-auto md:mx-0">
              We aspire to be the global leader in AI-powered business solutions,
              driving transformation through intelligent automation, predictive
              analytics, and data-driven insights. Our vision is not only to innovate
              but to create technologies that empower organizations to grow smarter,
              faster, and more resilient.
              <br /><br />
              By making advanced tools accessible and practical for businesses of
              all sizes, we strive to remove barriers and unlock opportunities that
              inspire innovation and fuel sustainable growth. Our solutions are
              designed to anticipate challenges, provide clarity, and deliver
              meaningful impact across industries worldwide.
              <br /><br />
              Ultimately, our vision is to shape a future where technology is not
              just a tool but a catalyst for excellence—creating smarter businesses,
              stronger communities, and a more connected world driven by intelligence
              and innovation.
            </p>
          </motion.div>

          {/* Right side: Draggable Card Gallery */}
          <div className="relative w-full h-96 flex items-center ml-[100px]">
            <DraggableCardContainer className="w-full h-full">
              {visionImages.map((img, index) => (
                <DraggableCardBody
                  key={index}
                  image={img}
                  initialRotation={visionCardStyles[index]?.rotation || 0}
                  initialPosition={{
                    x: visionCardStyles[index]?.initialX || 0,
                    y: visionCardStyles[index]?.initialY || 0,
                  }}
                  custom={index} // For staggered animation
                  // Override the motion props for premium floating effect
                  animate={{
                    y: [visionCardStyles[index].initialY, visionCardStyles[index].initialY - 10, visionCardStyles[index].initialY],
                  }}
                  transition={{
                    duration: 6 + index * 0.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                />
              ))}
            </DraggableCardContainer>
          </div>
        </div>
      </GlowCard>
    </section>
  );
}
