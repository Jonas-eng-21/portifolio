// src/app/components/LanguageDropDown.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Languages } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl"; 

export const LanguageDropDown = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale(); 

  const changeLanguage = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    setOpen(false); 
  };

  return (
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
        aria-label="Mudar idioma"
      >
        <Languages size={20} />
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="absolute top-[120%] left-[50%] flex w-48 flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-2 shadow-xl"
      >
        <Option
          text="Português (Brasil)"
          onClick={() => changeLanguage("pt")}
          isSelected={currentLocale === 'pt'}
        />
        <Option
          text="English"
          onClick={() => changeLanguage("en")}
          isSelected={currentLocale === 'en'}
        />
      </motion.ul>
    </motion.div>
  );
};

const Option = ({ text, onClick, isSelected }: { text: string; onClick: () => void; isSelected: boolean; }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={onClick}
      className={`flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md p-2 text-sm font-medium transition-colors 
        ${isSelected ? "bg-[var(--accent)] text-[var(--foreground)]" : "text-[var(--foreground-muted)] hover:bg-[var(--border)]"}`}
    >
      <span>{text}</span>
    </motion.li>
  );
};

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.1 },
  },
  closed: {
    scaleY: 0,
    transition: { when: "afterChildren", staggerChildren: 0.1 },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0, transition: { when: "beforeChildren" } },
  closed: { opacity: 0, y: -15, transition: { when: "afterChildren" } },
};
