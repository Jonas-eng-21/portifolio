"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { Languages } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import { ThemeToggleButton } from "./buttons/ThemeToggleButton";

export const Header = () => {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = pathname.startsWith("/en") ? "en" : "pt";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const changeLanguage = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    setIsMenuOpen(false);
  };
  
  const navLinks = [
    { href: "#inicio", label: t('nav_home') },
    { href: "#habilidades", label: t('nav_skills') },
    { href: "#experiencia", label: t('nav_experience') },
    { href: "#projetos", label: t('nav_projects') },
    { href: "#contato", label: t('nav_contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="#inicio" className="text-lg font-bold text-[var(--foreground)]">
          JONAS S. SOUSA
        </a>

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggleButton />

          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]" aria-label="Mudar idioma">
              <Languages size={20} />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-lg shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1">
                  <button onClick={() => changeLanguage("pt")} className={`flex w-full items-center px-4 py-2 text-sm transition-colors ${ currentLocale === "pt" ? "bg-[var(--accent)] text-[var(--foreground)]" : "text-[var(--foreground-muted)] hover:bg-[var(--border)]" }`}>
                    Português (Brasil)
                  </button>
                  <button onClick={() => changeLanguage("en")} className={`flex w-full items-center px-4 py-2 text-sm transition-colors ${ currentLocale === "en" ? "bg-[var(--accent)] text-[var(--foreground)]" : "text-[var(--foreground-muted)] hover:bg-[var(--border)]" }`}>
                    English
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};