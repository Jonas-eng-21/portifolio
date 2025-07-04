// src/app/components/sections/ExperienceSection.tsx - VERSÃO FINAL COM COLUNAS

import { useTranslations } from "next-intl";

// O componente do Card continua o mesmo, ele será reutilizado.
const ExperienceCard = ({ item }: { item: any }) => (
  <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 shadow-md h-full">
    <p className="mb-1 text-sm font-semibold text-[var(--accent)]">{item.date}</p>
    <h3 className="mb-1 text-xl font-bold">{item.title}</h3>
    <p className="mb-4 text-base font-medium text-[var(--foreground-muted)]">{item.company}</p>
    <div className="text-sm text-[var(--foreground-muted)]">
      {item.description.split('\n').map((line: string, i: number) => (
        <p key={i} className="mb-1">{line}</p>
      ))}
    </div>
  </div>
);

export const ExperienceSection = () => {
  const t = useTranslations();

  const timelineItems = [
    { title: t('exp_1_title'), company: t('exp_1_company'), date: t('exp_1_date'), description: t('exp_1_desc') },
    { title: t('exp_2_title'), company: t('exp_2_company'), date: t('exp_2_date'), description: t('exp_2_desc') },
    { title: t('exp_3_title'), company: t('exp_3_company'), date: t('exp_3_date'), description: t('exp_3_desc') },
    { title: t('edu_1_title'), company: t('edu_1_institution'), date: t('edu_1_date'), description: t('edu_1_desc') },
  ];
  
  // --- INÍCIO DA MUDANÇA NA LÓGICA ---
  // 1. Separamos os itens em duas listas: uma para a esquerda e uma para a direita.
  const leftItems = timelineItems.filter((_, index) => index % 2 === 0);
  const rightItems = timelineItems.filter((_, index) => index % 2 !== 0);
  // --- FIM DA MUDANÇA NA LÓGICA ---

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

        {/* --- INÍCIO DA MUDANÇA NO LAYOUT --- */}
        {/* Usamos um Grid de 3 colunas, onde a coluna do meio é apenas para o divisor */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:gap-x-12">
          
          {/* Coluna da Esquerda */}
          <div className="flex flex-col gap-y-12">
            {leftItems.map((item, index) => (
              <ExperienceCard key={index} item={item} />
            ))}
          </div>

          {/* Divisor Vertical Único */}
          <div className="flex justify-center">
            <div className="h-full w-px border-l-0 bg-transparent bg-gradient-to-b from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
          </div>

          {/* Coluna da Direita */}
          <div className="flex flex-col gap-y-12">
            {/* Adicionamos um espaçamento no topo da segunda coluna para criar o efeito alternado */}
            <div className="pt-0 md:pt-16"></div> 
            {rightItems.map((item, index) => (
              <ExperienceCard key={index} item={item} />
            ))}
          </div>
        </div>
        {/* --- FIM DA MUDANÇA NO LAYOUT --- */}

      </div>
    </section>
  );
};