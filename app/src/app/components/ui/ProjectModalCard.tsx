"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

interface Project {
  title: string;
  description: string;
  tech: string;
  href?: string;
}

export const ProjectModalCard = ({ project }: { project: Project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)] shadow-lg transition-transform hover:-translate-y-1"
      >
        <div className="h-48 w-full bg-[var(--surface)]" />
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-3 flex-1 text-sm text-[var(--foreground-muted)]">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.split(', ').map((tech: string) => (
              <span key={tech} className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>


      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-50 grid place-content-center bg-black/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-xl rounded-lg bg-[var(--surface)] p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                {project.title}
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="-me-4 -mt-4 rounded-full p-2 text-[var(--foreground-muted)] transition-colors hover:bg-[var(--border)]"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <p className="text-pretty text-[var(--foreground-muted)]">
                {project.description}
              </p>
              <h4 className="mt-6 mb-2 font-semibold text-[var(--foreground)]">Tecnologias Utilizadas:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(', ').map((tech: string) => (
                  <span key={tech} className="rounded-full bg-[var(--background)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <footer className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md bg-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:opacity-80"
              >
                Fechar
              </button>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                hidden={!project.href}
                className="rounded-md bg-[var(--accent)] px-4 py-2 text-sm font-bold text-[#121B33] transition-colors hover:opacity-80" // Texto escuro para contraste
              >
                {t('modal_view_project_button')}
              </a>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};
