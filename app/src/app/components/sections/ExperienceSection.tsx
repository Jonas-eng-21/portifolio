import { useTranslations } from "next-intl";
import SpotlightCard from "../ui/SpotlightCard"; 

export const ExperienceSection = () => {
  const t = useTranslations();

  const timelineItems = [
    { title: t('exp_1_title'), company: t('exp_1_company'), date: t('exp_1_date'), description: t('exp_1_desc') },
    { title: t('exp_2_title'), company: t('exp_2_company'), date: t('exp_2_date'), description: t('exp_2_desc') },
    { title: t('exp_3_title'), company: t('exp_3_company'), date: t('exp_3_date'), description: t('exp_3_desc') },
    { title: t('edu_1_title'), company: t('edu_1_institution'), date: t('edu_1_date'), description: t('edu_1_desc') },
  ];
  
  const leftItems = timelineItems.filter((_, index) => index % 2 === 0);
  const rightItems = timelineItems.filter((_, index) => index % 2 !== 0);

  return (
    <section id="experiencia" className="w-full bg-[var(--background)] py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t('experience_title')}
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)]">
            {t('experience_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:gap-x-12">
          
          <div className="flex flex-col gap-y-12">
            {leftItems.map((item, index) => (
              <SpotlightCard key={index} className="h-full">
                <p className="mb-1 text-sm font-semibold text-[var(--accent)]">{item.date}</p>
                <h3 className="mb-1 text-xl font-bold">{item.title}</h3>
                <p className="mb-4 text-base font-medium text-[var(--foreground-muted)]">{item.company}</p>
                <div className="text-sm text-[var(--foreground-muted)]">
                  {item.description.split('\n').map((line: string, i: number) => (
                    <p key={i} className="mb-1">{line}</p>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="h-full w-px border-l-0 bg-transparent bg-gradient-to-b from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
          </div>

          <div className="flex flex-col gap-y-12">
            <div className="pt-0 md:pt-16"></div> 
            {rightItems.map((item, index) => (
              <SpotlightCard key={index} className="h-full">
                <p className="mb-1 text-sm font-semibold text-[var(--accent)]">{item.date}</p>
                <h3 className="mb-1 text-xl font-bold">{item.title}</h3>
                <p className="mb-4 text-base font-medium text-[var(--foreground-muted)]">{item.company}</p>
                <div className="text-sm text-[var(--foreground-muted)]">
                  {item.description.split('\n').map((line: string, i: number) => (
                    <p key={i} className="mb-1">{line}</p>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};