import { useTranslations } from "next-intl";
import { ProjectModalCard } from "../ui/ProjectModalCard";

export const ProjectsSection = () => {
  const t = useTranslations();
  const projects = [
    {
      title: t("proj_1_title"),
      description: t("proj_1_desc"),
      tech: t("proj_1_tech"),
    },
    {
      title: t("proj_2_title"),
      description: t("proj_2_desc"),
      tech: t("proj_2_tech"),
    },
    {
      title: t("proj_3_title"),
      description: t("proj_3_desc"),
      tech: t("proj_3_tech"),
    },
  ];

  return (
    <section
      id="projetos"
      className="w-full bg-[var(--background)] py-24 sm:py-32"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("projects_title")}
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)]">
            {t("projects_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectModalCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
