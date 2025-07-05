import { Code, Database, Layers, Monitor, Braces } from "lucide-react";
import { useTranslations } from "next-intl";
import SpotlightCard from "../ui/SpotlightCard"; 

export const SkillsSection = () => {
  const t = useTranslations();

  const skillsData = [
    {
      title: t("skills_backend_title"),
      description: t("skills_backend_desc"),
      icon: <Code />,
    },
    {
      title: t("skills_architecture_title"),
      description: t("skills_architecture_desc"),
      icon: <Layers />,
    },
    {
      title: t("skills_frontend_title"),
      description: t("skills_frontend_desc"),
      icon: <Monitor />,
    },
    {
      title: t("skills_database_title"),
      description: t("skills_database_desc"),
      icon: <Database />,
    },
    {
      title: t("skills_others_title"),
      description: t("skills_others_desc"),
      icon: "🐳",
    },
    {
      title: t("skills_code_quality_title"),
      description: t("skills_code_quality_desc"),
      icon: <Braces />,
    },
  ];

  return (
    <section
      id="habilidades"
      className="w-full bg-[var(--surface)] py-24 sm:py-32" 
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("skills_title")}
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)]">
            {t("skills_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill) => (
            <SpotlightCard
              key={skill.title}
              className="flex h-full flex-col gap-4"
            >
              <div className="text-[var(--accent)]">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.title}</h3>
              <p className="text-sm text-[var(--foreground-muted)]">
                {skill.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};