import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Cpu, Zap, BrainCircuit, Network, Database, GitBranch } from 'lucide-react';

const skills = [
  {
    icon: Cpu,
    title: 'Circuit Design',
    items: ['PCB Design', 'Analog Circuits', 'Digital Systems', 'VLSI']
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning',
    items: ['Neural Networks', 'Deep Learning', 'TensorFlow', 'PyTorch']
  },
  {
    icon: Zap,
    title: 'Signal Processing',
    items: ['DSP', 'Filter Design', 'FFT', 'Embedded Systems']
  },
  {
    icon: Network,
    title: 'Hardware AI',
    items: ['FPGA', 'Neural Accelerators', 'Edge AI', 'Quantization']
  },
  {
    icon: Database,
    title: 'Programming',
    items: ['Python', 'C/C++', 'VHDL/Verilog', 'MATLAB']
  },
  {
    icon: GitBranch,
    title: 'Tools',
    items: ['Altium', 'LTSpice', 'Cadence', 'Xilinx']
  }
];

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/50 border border-cyan-900/30 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl text-white">{skill.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {skill.items.map(item => (
                    <li key={item} className="text-slate-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}