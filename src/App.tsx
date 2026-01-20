import { useState } from 'react';
import { TerminalPortfolio } from './components/TerminalPortfolio';
import { ProjectDetail } from './components/ProjectDetail';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  images?: string[];
  design?: string;
  approach?: string;
  results?: string;
}

type View = 'portfolio' | 'project';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('portfolio');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hasCompletedInitialAnimation, setHasCompletedInitialAnimation] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentView('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentView('portfolio');
    setSelectedProject(null);
  };

  const handleNavigateHome = () => {
    setCurrentView('portfolio');
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateProjects = () => {
    if (currentView === 'project') {
      handleBack();
    }
    // If already on portfolio, scroll to projects section
    setTimeout(() => {
      const projectsSection = document.querySelector('[data-section="projects"]');
      projectsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleNavigateContact = () => {
    if (currentView === 'project') {
      setCurrentView('portfolio');
      setTimeout(() => {
        const contactSection = document.querySelector('[data-section="contact"]');
        contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const contactSection = document.querySelector('[data-section="contact"]');
      contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {currentView === 'portfolio' && (
        <TerminalPortfolio 
          onProjectClick={handleProjectClick}
          skipAnimation={hasCompletedInitialAnimation}
          onAnimationComplete={() => setHasCompletedInitialAnimation(true)}
        />
      )}
      {currentView === 'project' && selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onBack={handleBack}
          onNavigateHome={handleNavigateHome}
          onNavigateProjects={handleNavigateProjects}
          onNavigateContact={handleNavigateContact}
        />
      )}
    </div>
  );
}