"use client";

import React, { useRef, ReactNode } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

interface MarqueeProps {
  items: ReactNode[];
  baseVelocity: number;
  className?: string;
}

function MarqueeItem({ items, baseVelocity, className }: MarqueeProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${v % (100 / 6)}%`);
  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="w-full overflow-hidden whitespace-nowrap">
      <motion.div className={`flex flex-nowrap items-center gap-12 ${className}`} style={{ x }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-nowrap items-center gap-12">
            {items.map((item, j) => (
              <span key={`${i}-${j}`}>{item}</span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}


export const TechMarquee = ({ icons }: { icons: ReactNode[] }) => {
  const half = Math.ceil(icons.length / 2);
  const firstRow = icons.slice(0, half);
  const secondRow = icons.slice(half);

  return (
    <section className="w-full overflow-hidden py-12">
      <MarqueeItem baseVelocity={-5} className="text-5xl" items={firstRow.map((icon, i) => (
        <span key={`row1-${i}`} className="mx-6 text-[var(--foreground-muted)]">{icon}</span>
      ))} />
      <MarqueeItem baseVelocity={5} className="text-5xl" items={secondRow.map((icon, i) => (
        <span key={`row2-${i}`} className="mx-6 text-[var(--foreground-muted)]">{icon}</span>
      ))} />
    </section>
  );
};

