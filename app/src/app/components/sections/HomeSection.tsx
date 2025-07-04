import { useTranslations } from 'next-intl';
import Image from 'next/image';


export const HomeSection = () => {
  const t = useTranslations();
  return (
   <section id="inicio" className="w-full py-24 sm:py-32">
      <div className="container mx-auto flex max-w-5xl flex-col-reverse items-center justify-between gap-12 px-4 md:flex-row">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <span className="font-mono text-sm text-[var(--pink)]">
            {t('hero_greeting')}
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t('hero_name')}
          </h1>
          <h2 className="text-xl font-semibold text-[var(--comment)] sm:text-2xl">
            {t('job_title')}
          </h2>
          <p className="max-w-md leading-relaxed">
            {t('hero_description')}
          </p>
        </div>

        <div className="relative h-64 w-64 flex-shrink-0 sm:h-80 sm:w-80">
          <Image
            src="/Foto.jpeg"
            alt={t('hero_name')}
            width={400}
            height={400}
            className="h-full w-full rounded-full border-2 border-[var(--pink)] object-cover shadow-lg"
            priority
          />
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-full bg-[var(--purple)]/30 blur-3xl" />
        </div>
      </div>
    </section>
  );
};