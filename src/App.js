import './App.css';
import AboutSection from './components/AboutSection';
import AchievementsEducationSection from './components/AchievementsEducationSection';
import ExperienceSection from './components/ExperienceSection';
import FooterSection from './components/FooterSection';
import MySection from './components/MySection';
import ProcessSection from './components/ProcessSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="portfolio-shell">
      <MySection />
      <main className="content-wrap">
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsEducationSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;