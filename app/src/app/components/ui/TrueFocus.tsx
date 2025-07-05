// src/app/components/ui/TrueFocus.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Definindo as propriedades que o componente pode receber
interface TrueFocusProps {
  sentence?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  className?: string;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = "JONAS S. SOUSA",
  manualMode = true,
  blurAmount = 2,
  borderColor = "var(--accent)",
  glowColor = "var(--accent)",
  animationDuration = 0.5,
  className = "",
}) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (
      currentIndex === -1 ||
      !wordRefs.current[currentIndex] ||
      !containerRef.current
    )
      return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(-1);
    }
  };

  return (
    <div
      className={`relative flex items-center gap-2 ${className}`}
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => {
              wordRefs.current[index] = el;
            }}
            className="relative cursor-pointer"
            style={
              {
                filter: isActive ? `blur(0px)` : `blur(${blurAmount}px)`,
                transition: `filter ${animationDuration}s ease`,
              } as React.CSSProperties
            }
            onMouseEnter={() => handleMouseEnter(index)}
          >
            {word}
          </span>
        );
      })}

      {/* A caixa de foco animada com Framer Motion */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 box-border"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{ duration: animationDuration }}
        style={
          {
            "--border-color": borderColor,
            "--glow-color": glowColor,
          } as React.CSSProperties
        }
      >
        {/* Os quatro cantos da caixa de foco */}
        <span
          className="absolute -top-2 -left-2 h-4 w-4 rounded-[3px] border-[3px] border-r-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 2px var(--glow-color))",
          }}
        ></span>
        <span
          className="absolute -top-2 -right-2 h-4 w-4 rounded-[3px] border-[3px] border-l-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 2px var(--glow-color))",
          }}
        ></span>
        <span
          className="absolute -bottom-2 -left-2 h-4 w-4 rounded-[3px] border-[3px] border-r-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 2px var(--glow-color))",
          }}
        ></span>
        <span
          className="absolute -bottom-2 -right-2 h-4 w-4 rounded-[3px] border-[3px] border-l-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 2px var(--glow-color))",
          }}
        ></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
