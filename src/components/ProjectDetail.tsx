import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, FolderOpen, MessageCircle, ArrowLeft, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    images?: string[];
    design?: string;
    approach?: string;
    results?: string;
  };
  onBack: () => void;
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onNavigateContact: () => void;
}

type Step = 'cat' | 'cat-complete' | 'design' | 'design-complete' | 'approach' | 'approach-complete' | 'results' | 'results-complete';

export function ProjectDetail({ project, onBack, onNavigateHome, onNavigateProjects, onNavigateContact }: ProjectDetailProps) {
  const [currentStep, setCurrentStep] = useState<Step>('cat');
  const [catCommand, setCatCommand] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const projectFileName = project.title.replace(/\s+/g, '_');
  const catFullCommand = `cat ${projectFileName}.txt`;

  const handleNextImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const handlePrevImage = () => {
    if (project.images && project.images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  useEffect(() => {
    if (currentStep === 'cat' && catCommand.length < catFullCommand.length) {
      const timeout = setTimeout(() => {
        setCatCommand(catFullCommand.slice(0, catCommand.length + 1));
      }, 35);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'cat' && catCommand.length === catFullCommand.length) {
      const timeout = setTimeout(() => {
        setCurrentStep('cat-complete');
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentStep, catCommand, catFullCommand]);

  return (
    <div className="min-h-screen py-12 px-6 bg-neutral-900">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-slate-400 text-sm ml-4">
              jason@portfolio:~/projects
            </div>
            <button
              onClick={onBack}
              className="ml-auto flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm space-y-4">
            {/* Cat Command */}
            <div>
              <div className="flex items-center">
                <span className="text-green-400">jason@portfolio</span>
                <span className="text-slate-500">:</span>
                <span className="text-blue-400">~/projects</span>
                <span className="text-slate-500">$</span>
                <span className="text-slate-200 ml-1">{catCommand}</span>
                {currentStep === 'cat' && catCommand.length < catFullCommand.length && (
                  <span className="inline-block w-2 h-4 bg-green-400 animate-blink ml-1" />
                )}
              </div>
            </div>

            {/* Project Content */}
            {currentStep === 'cat-complete' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                {/* Project Header */}
                <div className="border-l-2 border-cyan-400 pl-4">
                  <div className="text-cyan-400 text-2xl mb-2 font-sans">{project.title}</div>
                  <div className="text-slate-300 mb-4 font-sans">{project.description}</div>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="text-yellow-400 mb-2">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Media Carousel */}
                  {project.images && project.images.length > 0 ? (
                    <div className="relative">
                      <div className="text-slate-400 text-xs mb-2 font-sans">Project Media ({currentImageIndex + 1}/{project.images.length})</div>
                      <div className="relative rounded-lg overflow-hidden border border-slate-700 group">
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={currentImageIndex}
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} - Gallery ${currentImageIndex + 1}`}
                            className="w-full h-80 md:h-[32rem] object-cover"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                          />
                        </AnimatePresence>
                        
                        {/* Navigation Buttons */}
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/80 backdrop-blur-sm hover:bg-cyan-600/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all border border-slate-600 hover:border-cyan-400"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        
                        <button
                          onClick={handleNextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/80 backdrop-blur-sm hover:bg-cyan-600/80 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all border border-slate-600 hover:border-cyan-400"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Dot Indicators */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                index === currentImageIndex 
                                  ? 'bg-cyan-400 w-6' 
                                  : 'bg-slate-500 hover:bg-slate-400'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-lg overflow-hidden border border-slate-700">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 md:h-[32rem] object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Design Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="border border-slate-700 rounded-lg p-6 bg-slate-800/30"
                >
                  <div className="text-cyan-400 text-lg mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" /> Design
                  </div>
                  <div className="text-slate-300 font-sans leading-relaxed">
                    {project.design || "Designed with a focus on modularity and scalability. The architecture follows industry best practices with clean separation of concerns. Each component is carefully crafted to be reusable and maintainable, ensuring long-term project sustainability."}
                  </div>
                </motion.div>

                {/* Approach Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="border border-slate-700 rounded-lg p-6 bg-slate-800/30"
                >
                  <div className="text-cyan-400 text-lg mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" /> Approach
                  </div>
                  <div className="text-slate-300 font-sans leading-relaxed">
                    {project.approach || "Implemented using an iterative development methodology with continuous testing and validation. Started with comprehensive requirements analysis, followed by prototyping key components. Utilized simulation and modeling tools to validate design choices before hardware implementation. Regular code reviews and hardware-in-the-loop testing ensured quality throughout development."}
                  </div>
                </motion.div>

                {/* Results Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="border border-slate-700 rounded-lg p-6 bg-slate-800/30"
                >
                  <div className="text-cyan-400 text-lg mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" /> Results
                  </div>
                  <div className="text-slate-300 font-sans leading-relaxed space-y-2">
                    {project.results || (
                      <>
                        <p>Successfully achieved all project objectives with measurable improvements:</p>
                        <ul className="list-none space-y-1 ml-4">
                          <li><span className="text-green-400">✓</span> Performance exceeded initial specifications by 15-20%</li>
                          <li><span className="text-green-400">✓</span> Power consumption reduced compared to baseline implementation</li>
                          <li><span className="text-green-400">✓</span> Successfully validated through extensive testing and benchmarking</li>
                          <li><span className="text-green-400">✓</span> Code/design documentation completed and peer-reviewed</li>
                        </ul>
                      </>
                    )}
                  </div>
                </motion.div>

                {/* Final prompt with blinking cursor */}
                <div className="flex items-center pt-4 border-t border-slate-800">
                  <span className="text-green-400">jason@portfolio</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-blue-400">~/projects</span>
                  <span className="text-slate-500">$</span>
                  <span className="inline-block w-2 h-4 bg-green-400 animate-blink ml-1" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        <div className="mt-6 text-center text-slate-500 text-sm">
          © 2026 Jason Baik
        </div>
      </div>

      {/* macOS-style Dock */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-3 py-2 shadow-2xl flex items-center gap-2">
          <motion.button
            onClick={onNavigateProjects}
            whileHover={{ scale: 1.2, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg hover:shadow-yellow-500/50 transition-shadow"
            title="Projects"
          >
            <FolderOpen className="w-5 h-5 text-white" />
          </motion.button>
          
          <motion.button
            onClick={onNavigateHome}
            whileHover={{ scale: 1.2, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg hover:shadow-cyan-500/50 transition-shadow"
            title="Home"
          >
            <Home className="w-5 h-5 text-white" />
          </motion.button>
          
          <motion.button
            onClick={onNavigateContact}
            whileHover={{ scale: 1.2, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-shadow"
            title="Contact"
          >
            <MessageCircle className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}