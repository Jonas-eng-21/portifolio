interface ExperienceSectionProps {
  t: {
    experience_title: string;
    exp_1_title: string;
    exp_1_company: string;
    exp_1_date: string;
    exp_1_desc: string;
    exp_2_title: string;
    exp_2_company: string;
    exp_2_date: string;
    exp_2_desc: string;
    exp_3_title: string;
    exp_3_company: string;
    exp_3_date: string;
    exp_3_desc: string;
    education_title: string;
    edu_1_title: string;
    edu_1_institution: string;
    edu_1_date: string;
    edu_1_desc: string;
    edu_2_title: string;
    edu_2_institution: string;
    edu_2_date: string;
    edu_2_desc: string;
  }; 
}

export const ExperienceSection = ({ t }: ExperienceSectionProps) => {
  const experiences = [
    {
      title: t.exp_1_title,
      company: t.exp_1_company,
      date: t.exp_1_date,
      description: t.exp_1_desc,
    },
    {
      title: t.exp_2_title,
      company: t.exp_2_company,
      date: t.exp_2_date,
      description: t.exp_2_desc,
    },
    {
      title: t.exp_3_title,
      company: t.exp_3_company,
      date: t.exp_3_date,
      description: t.exp_3_desc,
    },
  ];

  const education = [
    {
      title: t.edu_1_title,
      institution: t.edu_1_institution,
      date: t.edu_1_date,
      description: t.edu_1_desc,
    },
    {
      title: t.edu_2_title,
      institution: t.edu_2_institution,
      date: t.edu_2_date,
      description: t.edu_2_desc,
    },
  ];

  return (
    <section id="experiencia" className="w-full bg-[var(--background)] py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.experience_title}
          </h2>
        </div>

        <div className="relative border-l-2 border-l-[var(--border)] pl-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12">
              <div className="absolute -left-[11px] mt-1.5 h-5 w-5 rounded-full bg-[var(--accent)]" />
              <p className="text-sm font-semibold text-[var(--accent)]">{exp.date}</p>
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="mb-4 text-base font-medium text-[var(--foreground-muted)]">{exp.company}</p>
              <div className="text-sm text-[var(--foreground-muted)]">
                {exp.description.split('\n').map((line: string, i: number) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{t.education_title}</h2>
          </div>

          {education.map((edu, index) => (
            <div key={index} className="mb-12">
               <div className="absolute -left-[11px] mt-1.5 h-5 w-5 rounded-full bg-[var(--accent)]" />
              <p className="text-sm font-semibold text-[var(--accent)]">{edu.date}</p>
              <h3 className="text-xl font-bold">{edu.title}</h3>
              <p className="mb-4 text-base font-medium text-[var(--foreground-muted)]">{edu.institution}</p>
               <div className="text-sm text-[var(--foreground-muted)]">
                {edu.description.split('\n').map((line: string, i: number) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};