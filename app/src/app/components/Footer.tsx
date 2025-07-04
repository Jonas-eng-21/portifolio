import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  t: {
    job_title: string;
    footer_copyright: string;
  };
}

export const Footer = ({ t }: FooterProps) => {
  return (
    <footer className="w-full border-t border-t-[var(--border)] bg-[var(--background)]">
      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div>
          <h3 className="font-bold">Jonas Soares Sousa</h3>
          <p className="text-sm text-[var(--foreground-muted)]">{t.job_title}</p>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/Jonas-eng-21" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--foreground-muted)] hover:text-[var(--accent)]"><Github /></a>
          <a href="https://www.linkedin.com/in/jonas-soares-824a8a361/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--foreground-muted)] hover:text-[var(--accent)]"><Linkedin /></a>
          <a href="mailto:jonas.eng.software@gmail.com" aria-label="Email" className="text-[var(--foreground-muted)] hover:text-[var(--accent)]"><Mail /></a>
        </div>
        <p className="text-sm text-[var(--foreground-muted)]">{t.footer_copyright}</p>
      </div>
    </footer>
  );
};