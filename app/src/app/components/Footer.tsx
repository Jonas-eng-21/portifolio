import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="relative w-full overflow-hidden border-t border-t-[var(--border)] bg-[var(--background)]">


      <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <div>
          <h3 className="font-bold">Jonas Soares Sousa</h3>
          <p className="text-sm text-[var(--foreground-muted)]">
            {t("job_title")}
          </p>
        </div>
        <p className="text-sm text-[var(--foreground-muted)]">
          {t("footer_copyright")}
        </p>
      </div>
    </footer>
  );
};
