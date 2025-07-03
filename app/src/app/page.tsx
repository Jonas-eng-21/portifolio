import { getTranslations } from "../../public/lib/i18n";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { HomeSection } from "./components/sections/HomeSection";
import { SkillsSection } from "./components/sections/SkillsSection";


export default async function Home() {
  const t = await getTranslations('pt');
  
  return (
    <main>
      <HomeSection t={t} />
      <SkillsSection t={t}/>
      <ExperienceSection t={t}/>
    </main>
  );
}
