import { getTranslations } from "../../../public/lib/i18n";
import { ContactSection } from "../components/sections/ContactSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { HomeSection } from "../components/sections/HomeSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SkillsSection } from "../components/sections/SkillsSection";



export default async function Home({ params }: { params: { locale: string } }) {
  const t = await getTranslations(params.locale);
  
  return (
    <main>
      <HomeSection t={t} />
      <SkillsSection t={t}/>
      <ExperienceSection t={t}/>
      <ProjectsSection t={t} />
      <ContactSection t={t} />
    </main>
  );
}
