"use client";

import React, { useRef } from "react";

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  glareColor = "#A3BAFF",
  glareOpacity = 0.15,
  glareAngle = -30,
  glareSize = 400,
  transitionDuration = 800,
}) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const convertHexToRgba = (hex: string, opacity: number) => {
    const c = hex.replace("#", "");
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const rgbaColor = convertHexToRgba(glareColor, glareOpacity);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.backgroundPosition = "-100% -100%, 0 0";
    void el.offsetHeight;
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = "100% 100%, 0 0";
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;
    el.style.transition = `${transitionDuration}ms ease`;
    el.style.backgroundPosition = "-100% -100%, 0 0";
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: `linear-gradient(${glareAngle}deg, transparent 40%, ${rgbaColor} 50%, transparent 60%)`,
    backgroundSize: `${glareSize}% ${glareSize}%`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-100% -100%",
    pointerEvents: "none",
    borderRadius: "inherit",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg bg-[var(--surface)] border border-[var(--border)] p-6 ${className}`}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div ref={overlayRef} style={overlayStyle} />
      {children}
    </div>
  );
};
