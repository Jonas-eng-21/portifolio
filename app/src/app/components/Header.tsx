"use client";

import { Languages, Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  const changeLanguage = (newLocale: string) => {
    const newPath = `/${newLocale}`;
    router.push(newPath);
    setIsMenuOpen(false);
  };

  const currentLocale = pathname.split("/")[1];

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a
          href="#inicio"
          className="text-lg font-bold text-[var(--foreground)]"
        >
          JONAS S. SOUSA
        </a>

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {/* Botão de Tema */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Dropdown de Idioma */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
              aria-label="Mudar idioma"
            >
              <Languages size={20} />
            </button>

            {/* Menu Dropdown */}
            {isMenuOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-[var(--surface)] shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="py-1">
                  <button
                    onClick={() => changeLanguage("pt")}
                    className={`flex w-full items-center px-4 py-2 text-sm ${
                      currentLocale === "pt"
                        ? "bg-[var(--accent)] text-white"
                        : "text-[var(--foreground)]"
                    }`}
                  >
                    Português (Brasil)
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`flex w-full items-center px-4 py-2 text-sm ${
                      currentLocale === "en"
                        ? "bg-[var(--accent)] text-white"
                        : "text-[var(--foreground)]"
                    }`}
                  >
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
