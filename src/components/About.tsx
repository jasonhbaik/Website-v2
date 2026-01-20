import { motion } from 'motion/react';
import { useInView } from './useInView';

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 px-6 bg-neutral-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg text-slate-300"
        >
          <p>
            I'm an electrical engineer specializing in the development of intelligent systems 
            that bridge the gap between traditional hardware design and cutting-edge artificial 
            intelligence. My work focuses on creating neural network accelerators, embedded AI 
            solutions, and signal processing systems.
          </p>
          
          <p>
            With expertise in both analog and digital circuit design, I leverage machine learning 
            techniques to optimize power consumption, improve system efficiency, and develop 
            innovative solutions for complex engineering challenges.
          </p>
          
          <p>
            My passion lies in pushing the boundaries of what's possible when combining classical 
            electrical engineering principles with modern AI methodologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}