const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-[var(--comment)] bg-[var(--background)]/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="#inicio" className="text-lg font-bold text-[var(--foreground)]">
          JONAS S. SOUSA
        </a>

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[var(--comment)] transition-colors hover:text-[var(--foreground)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button className="h-9 w-9 rounded-full border border-[var(--comment)] text-[var(--comment)] hover:text-[var(--foreground)]">
            ☀️
          </button>
          <div className="md:hidden">
            <button className="h-9 w-9 rounded-full border border-[var(--comment)] text-[var(--comment)] hover:text-[var(--foreground)]">
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};