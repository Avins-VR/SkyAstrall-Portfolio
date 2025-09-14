import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { GlowCard } from "../components/ui/GlowCard";

// Reusable milestone card
const Milestone = ({ title, subtitle, emoj, targetValue, duration = 2, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();
  const [animatedValue, setAnimatedValue] = useState(0);

  // Count up animation
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const animated = Math.min(progress / (duration * 1000), 1);
        const currentValue = Math.floor(animated * targetValue);
        setAnimatedValue(currentValue);
        if (animated < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, targetValue, duration, controls]);

  // Milestone card variants
  const milestoneVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.3,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={milestoneVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 120 } }}
      className="flex flex-col items-center justify-center cursor-default"
    >
      <motion.div
        className="text-purple-400 text-center text-6xl font-bold mb-6"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        {emoj}
      </motion.div>

      <div className="text-purple-400 text-center text-6xl font-bold mb-4">
        {animatedValue}
        {title.includes("+") ? "+" : ""}
      </div>
      <div className="text-white text-xl text-center font-semibold mb-[10px]">
        {subtitle}
      </div>
    </motion.div>
  );
};

const Milestones = () => {
  const milestoneData = [
    { emoj: "🚀", title: "60+", subtitle: "Projects Delivered", targetValue: 60 },
    { emoj: "👥", title: "20+", subtitle: "Team Members", targetValue: 20 },
    { emoj: "🌍", title: "15+", subtitle: "Countries Served", targetValue: 15 },
  ];

  return (
    <div className="flex items-center justify-center pt-[50px] mt-0">
      <GlowCard glowColor="purple" size="xl" className="p-12 bg-black">
        <div className="grid md:grid-cols-2 w-[1330px] gap-12">
          <div className="flex flex-col ml-[100px] gap-20 pb-[70px]">
            {milestoneData.slice(0, 2).map((item, index) => (
              <Milestone key={index} {...item} index={index} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-[50px]">
            <Milestone {...milestoneData[2]} index={2} />
          </div>
        </div>
      </GlowCard>
    </div>
  );
};

export default Milestones;
