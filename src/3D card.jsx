import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { cn } from "./lib/utils";

const MouseEnterContext = createContext(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
  baseColor = "0,0,0",
  accentColor = "100,150,255",
}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const frame = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 6;
    const y = (e.clientY - top - height / 2) / 6;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateZ(5px)`;

      const shadowX = -x * 1.5;
      const shadowY = -y * 1.5;
      const shadowSize = 20 + Math.abs(x) * 2 + Math.abs(y) * 2;

      containerRef.current.style.boxShadow = `
        ${shadowX}px ${shadowY}px ${shadowSize}px rgba(${baseColor},0.25),
        0 20px 40px -10px rgba(${accentColor},0.15)
      `;
    });
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
    containerRef.current.style.transition =
      "transform 0.2s ease-out, box-shadow 0.3s ease-out";
    containerRef.current.style.transform =
      "translateY(-8px) scale(1.03) rotateY(0) rotateX(0)";
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (!containerRef.current) return;
    containerRef.current.style.transition =
      "transform 0.4s ease-out, box-shadow 0.4s ease-out";
    containerRef.current.style.transform = "translateY(0) scale(1)";
    containerRef.current.style.boxShadow = `0 10px 20px rgba(${baseColor},0.2)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
            boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className }) => (
  <div
    className={cn(
      "[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
      className
    )}
  >
    {children}
  </div>
);

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  interactive = false, // ✅ new prop
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}) translateY(${translateY}) translateZ(${translateZ}) rotateX(${rotateX}) rotateY(${rotateY}) rotateZ(${rotateZ})`;
    } else {
      ref.current.style.transform =
        "translateX(0) translateY(0) translateZ(0) rotateX(0) rotateY(0) rotateZ(0)";
    }
  }, [isMouseEntered]);

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-150 ease-out", className)}
      style={{
        pointerEvents: interactive ? "auto" : "none", 
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context)
    throw new Error("useMouseEnter must be used within CardContainer");
  return context;
};
