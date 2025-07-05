"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

export const AnimatedNavigation = () => {
  const t = useTranslations();
  const [position, setPosition] = useState<Position>({ left: 0, width: 0, opacity: 0 });
  const [activeSection, setActiveSection] = useState<string>("#inicio");
  
  const navRef = useRef<HTMLUListElement>(null);

  const navLinks = [
    { href: "#inicio", label: t('nav_home') },
    { href: "#habilidades", label: t('nav_skills') },
    { href: "#experiencia", label: t('nav_experience') },
    { href: "#projetos", label: t('nav_projects') },
    { href: "#contato", label: t('nav_contact') },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } 
    );

    navLinks.forEach((link) => {
      const elem = document.querySelector(link.href);
      if (elem) observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden md:flex">
      <ul
        ref={navRef}
        onMouseLeave={() => {
          const activeLinkEl = navRef.current?.querySelector(`[data-href='${activeSection}']`) as HTMLElement;
          if (activeLinkEl) {
            setPosition({
              left: activeLinkEl.offsetLeft,
              width: activeLinkEl.offsetWidth,
              opacity: 1,
            });
          }
        }}
        className="relative flex items-center gap-6 p-1"
      >
        {navLinks.map((link) => (
          <Tab
            key={link.href}
            href={link.href}
            setPosition={setPosition}
            isActive={link.href === activeSection}
          >
            {link.label}
          </Tab>
        ))}
        <Cursor position={position} />
      </ul>
    </nav>
  );
};

const Tab = ({ children, setPosition, href, isActive }: any) => {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isActive && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setPosition({
        left: ref.current.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [isActive, setPosition]);

  return (
    <li
      ref={ref}
      data-href={href}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className={`relative z-10 cursor-pointer px-3 py-1.5 transition-colors ${
        isActive ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]"
      } hover:text-[var(--foreground)]`}
    >
      <a href={href}>{children}</a>
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.div
      animate={{
        ...position,
      }}
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
      className="absolute z-0 h-0.5 rounded-full bg-[var(--accent)] -bottom-1"
    />
  );
};
