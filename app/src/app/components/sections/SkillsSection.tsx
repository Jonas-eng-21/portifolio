import { Code, Database, Layers, Monitor, Braces } from 'lucide-react';

interface SkillsSectionProps {
  t: {
    skills_title: string;
    skills_subtitle: string;
    skills_backend_title: string;
    skills_backend_desc: string;
    skills_frontend_title: string;
    skills_frontend_desc: string;
    skills_architecture_title: string;
    skills_architecture_desc: string;
    skills_database_title: string;
    skills_database_desc: string;
    skills_devops_title: string;
    skills_devops_desc: string;
    skills_others_title: string;
    skills_others_desc: string;
  };
}

export const SkillsSection = ({ t }: SkillsSectionProps) => {

     const skillsData = [
    {
      title: t.skills_backend_title,
      description: t.skills_backend_desc,
      icon: <Code />,
    },
    {
      title: t.skills_architecture_title,
      description: t.skills_architecture_desc,
      icon: <Layers />,
    },
    {
      title: t.skills_frontend_title,
      description: t.skills_frontend_desc,
      icon: <Monitor />,
    },
    {
      title: t.skills_database_title,
      description: t.skills_database_desc,
      icon: <Database />,
    },
    {
      title: t.skills_devops_title,
      description: t.skills_devops_desc,
      icon: '🐳', 
    },
    {
      title: t.skills_others_title,
      description: t.skills_others_desc,
      icon: <Braces />,
    },
  ];

  return (
  <section id="habilidades" className="w-full bg-[var(--surface)] py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.skills_title}
          </h2>
          <p className="mt-4 text-lg text-[var(--comment)]">
            {t.skills_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill) => (
            <div
              key={skill.title}
              className="flex flex-col gap-4 rounded-lg border border-[var(--border)] bg-[var(--background)] p-6 transition-transform hover:-translate-y-1"
            >
              <div className="text-[var(--pink)]">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.title}</h3>
              <p className="text-sm text-[var(--comment)]">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};