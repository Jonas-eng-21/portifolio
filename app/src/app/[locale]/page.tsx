import { HomeSection } from "../components/sections/HomeSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ContactSection } from "../components/sections/ContactSection";
import Threads from "../components/ui/Threads";
import { TechMarquee } from "../components/ui/TechMarquee";
import {
  SiTypescript,
  SiJavascript,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiSpringboot,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiGithub,
  SiVuetify,
  SiNextdotjs,
} from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { FaAws, FaHtml5, FaCss3, FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export default function Home() {
  const techIcons = [
    { key: "java", icon: <BiLogoJava /> },
    { key: "springboot", icon: <SiSpringboot /> },
    { key: "typescript", icon: <SiTypescript /> },
    { key: "javascript", icon: <SiJavascript /> },
    { key: "react", icon: <SiReact /> },
    { key: "tailwind", icon: <SiTailwindcss /> },
    { key: "git", icon: <FaGitAlt /> },
    { key: "node", icon: <SiNodedotjs /> },
    { key: "docker", icon: <SiDocker /> },
    { key: "mysql", icon: <SiMysql /> },
    { key: "postgresql", icon: <SiPostgresql /> },
    { key: "aws", icon: <FaAws /> },
    { key: "html", icon: <FaHtml5 /> },
    { key: "css", icon: <FaCss3 /> },
    { key: "github", icon: <SiGithub /> },
    { key: "vscode", icon: <VscVscode /> },
    { key: "vuetify", icon: <SiVuetify /> },
    { key: "nextjs", icon: <SiNextdotjs /> },
  ];

  return (
    <main>
      <HomeSection />
      <SkillsSection />
      <TechMarquee icons={techIcons} />
      <ExperienceSection />
      <ProjectsSection />
      <section className="relative h-64 w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Threads
            amplitude={1.2}
            distance={0.1}
            enableMouseInteraction={true}
          />
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
