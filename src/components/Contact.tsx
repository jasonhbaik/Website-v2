import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const contacts = [
  { icon: Mail, label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com' },
  { icon: FileText, label: 'Resume', value: 'Download CV', href: '#' }
];

export function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-24 px-6 bg-neutral-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-300 mb-12"
        >
          Interested in collaborating or discussing electrical engineering and AI projects? 
          Feel free to reach out!
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-slate-900/50 border border-cyan-900/30 rounded-lg hover:border-cyan-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-slate-400">{contact.label}</div>
                  <div className="text-white">{contact.value}</div>
                </div>
              </motion.a>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-slate-500 text-sm"
        >
          © 2026 Your Name. Powered by neural networks.
        </motion.div>
      </div>
    </section>
  );
}