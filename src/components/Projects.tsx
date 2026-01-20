import { motion } from 'motion/react';
import { useInView } from './useInView';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Neural Network Accelerator',
    description: 'Custom FPGA-based hardware accelerator for convolutional neural networks achieving 10x speedup over CPU implementation.',
    tech: ['FPGA', 'Verilog', 'PyTorch', 'HLS'],
    image: 'https://images.unsplash.com/photo-1602493054376-d9dc3dfcbc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBjaGlwfGVufDF8fHx8MTc2ODg0NjMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Edge AI Vision System',
    description: 'Low-power embedded computer vision system for real-time object detection on resource-constrained devices.',
    tech: ['Embedded Linux', 'TensorFlow Lite', 'ARM Cortex', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1658140009985-f42b0c9434c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGNhbWVyYXxlbnwxfHx8fDE3Njg3ODk4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Smart Power Management',
    description: 'AI-driven power management system that uses predictive algorithms to optimize energy consumption in IoT devices.',
    tech: ['Machine Learning', 'PCB Design', 'Python', 'MQTT'],
    image: 'https://images.unsplash.com/photo-1757262441258-df389b0ce39b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwY2lyY3VpdCUyMHBvd2VyfGVufDF8fHx8MTc2ODg0NjMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 px-6 bg-neutral-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-slate-900 border border-cyan-900/30 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group"
    >
      {/* Mac Window Header */}
      <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>
      
      <ProjectImage query={project.image} />
      
      <div className="p-6">
        <h3 className="text-xl text-white mb-3">{project.title}</h3>
        <p className="text-slate-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 bg-cyan-500/10 text-cyan-300 text-sm rounded-full border border-cyan-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <Github className="w-4 h-4" />
            <span className="text-sm">Code</span>
          </button>
          <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Demo</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectImage({ query }: { query: string }) {
  return (
    <div className="h-48 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent" />
      <img 
        src={query}
        alt="Project"
        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
      />
    </div>
  );
}