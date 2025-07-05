"use client";

import TrueFocus from "./ui/TrueFocus";
import { ThemeToggleButton } from "./buttons/ThemeToggleButton";
import { LanguageDropDown } from "./buttons/LanguageDropDown";
import { AnimatedNavigation } from "./ui/AnimatedNavigation";

export const Header = () => {





  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="#inicio" className="text-lg font-bold text-[var(--foreground)]">
          <TrueFocus sentence="JONAS S. SOUSA" />
        </a>

        <AnimatedNavigation />

        <div className="flex items-center gap-4">
          <ThemeToggleButton />
          <LanguageDropDown />
        </div>
      </div>
    </header>
  );
};
