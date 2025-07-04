// app/components/sections/ProjectsSection.tsx

interface ProjectsSectionProps {
  t: {
    projects_title: string;
    projects_subtitle: string;
    proj_1_title: string;
    proj_1_desc: string;
    proj_1_tech: string;
    proj_2_title: string;
    proj_2_desc: string;
    proj_2_tech: string;
    proj_3_title: string;
    proj_3_desc: string;
    proj_3_tech: string;
  };
}

export const ProjectsSection = ({ t }: ProjectsSectionProps) => {
  const projects = [
    {
      title: t.proj_1_title,
      description: t.proj_1_desc,
      tech: t.proj_1_tech,
    },
    {
      title: t.proj_2_title,
      description: t.proj_2_desc,
      tech: t.proj_2_tech,
    },
    {
      title: t.proj_3_title,
      description: t.proj_3_desc,
      tech: t.proj_3_tech,
    },
  ];

  return (
    <section id="projetos" className="w-full bg-[var(--surface)] py-24 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.projects_title}
          </h2>
          <p className="mt-4 text-lg text-[var(--foreground-muted)]">
            {t.projects_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)] shadow-lg"
            >
              <div className="h-48 w-full bg-[var(--surface)]" />
              
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm text-[var(--foreground-muted)]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.split(', ').map((tech: string) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};