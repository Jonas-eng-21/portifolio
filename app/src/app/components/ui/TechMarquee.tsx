"use client";

import React, { ReactNode } from "react";
import Magnet from "./Magnet";

interface IconItem {
  key: string;
  icon: ReactNode;
}

export const TechMarquee = ({ icons }: { icons: IconItem[] }) => {
  return (
    <section className="w-full py-12 flex justify-center">
      <div className="flex flex-wrap justify-center gap-10 w-[80%] max-w-6xl">
        {icons.map(({ key, icon }) => (
          <Magnet key={key} padding={50} magnetStrength={10}>
            <div className="text-5xl text-[var(--foreground-muted)]">
              {icon}
            </div>
          </Magnet>
        ))}
      </div>
    </section>
  );
};

