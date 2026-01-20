import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const terminalOutput = {
  name: "Jason Baik",
  title: "Electrical Engineer",
  description: "Passionate about bridging hardware and AI. Specializing in neural network accelerators, embedded systems, and intelligent circuit design.",
  skills: [
    "Circuit Design & PCB Layout",
    "FPGA & ASIC Development",
    "Machine Learning & Neural Networks",
    "Embedded Systems & IoT",
    "Signal Processing & DSP",
    "Python, C/C++, VHDL/Verilog"
  ],
  interests: [
    "Hardware AI Acceleration",
    "Edge Computing",
    "Power Optimization",
    "Computer Vision Systems"
  ]
};

export function Terminal() {
  const [command, setCommand] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const fullCommand = 'cat Jason_Baik.txt';

  useEffect(() => {
    // Type out the command
    if (command.length < fullCommand.length) {
      const timeout = setTimeout(() => {
        setCommand(fullCommand.slice(0, command.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Show output after command is typed
      const timeout = setTimeout(() => {
        setShowOutput(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [command]);

  useEffect(() => {
    // Animate output lines
    if (showOutput && currentLine < 20) {
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [showOutput, currentLine]);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-slate-700 overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-slate-400 text-sm ml-4">jason@portfolio:~</div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm min-h-[500px]">
          {/* Command Line */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-green-400">jason@portfolio</span>
            <span className="text-slate-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-slate-500">$</span>
            <span className="text-slate-200">{command}</span>
            {command.length < fullCommand.length && (
              <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1" />
            )}
          </div>

          {/* Output */}
          {showOutput && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-1 text-slate-300"
            >
              {currentLine >= 1 && (
                <div className="text-cyan-400 mb-3">
                  ╔══════════════════════════════════════════════════╗
                </div>
              )}
              
              {currentLine >= 2 && (
                <div className="text-green-400 text-lg mb-2">
                  <span className="text-cyan-400">  NAME:</span> {terminalOutput.name}
                </div>
              )}
              
              {currentLine >= 3 && (
                <div className="text-yellow-400 mb-3">
                  <span className="text-cyan-400">  TITLE:</span> {terminalOutput.title}
                </div>
              )}
              
              {currentLine >= 4 && (
                <div className="text-cyan-400 mb-2">
                  ╠══════════════════════════════════════════════════╣
                </div>
              )}
              
              {currentLine >= 5 && (
                <div className="mb-3">
                  <div className="text-cyan-400 mb-1">  ABOUT:</div>
                  <div className="text-slate-300 pl-4">
                    {terminalOutput.description}
                  </div>
                </div>
              )}
              
              {currentLine >= 6 && (
                <div className="text-cyan-400 mb-2">
                  ╠══════════════════════════════════════════════════╣
                </div>
              )}
              
              {currentLine >= 7 && (
                <div className="mb-3">
                  <div className="text-cyan-400 mb-1">  SKILLS:</div>
                </div>
              )}
              
              {terminalOutput.skills.map((skill, index) => (
                currentLine >= 8 + index && (
                  <div key={skill} className="pl-4 text-green-300">
                    <span className="text-yellow-400">→</span> {skill}
                  </div>
                )
              ))}
              
              {currentLine >= 8 + terminalOutput.skills.length && (
                <div className="text-cyan-400 mb-2 mt-3">
                  ╠══════════════════════════════════════════════════╣
                </div>
              )}
              
              {currentLine >= 9 + terminalOutput.skills.length && (
                <div className="mb-3">
                  <div className="text-cyan-400 mb-1">  INTERESTS:</div>
                </div>
              )}
              
              {terminalOutput.interests.map((interest, index) => (
                currentLine >= 10 + terminalOutput.skills.length + index && (
                  <div key={interest} className="pl-4 text-purple-300">
                    <span className="text-yellow-400">★</span> {interest}
                  </div>
                )
              ))}
              
              {currentLine >= 10 + terminalOutput.skills.length + terminalOutput.interests.length && (
                <div className="text-cyan-400 mt-3">
                  ╚══════════════════════════════════════════════════╝
                </div>
              )}
              
              {currentLine >= 11 + terminalOutput.skills.length + terminalOutput.interests.length && (
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-green-400">jason@portfolio</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-slate-500">$</span>
                  <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1" />
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Scroll hint */}
      {currentLine >= 15 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-center text-slate-400 text-sm"
        >
          <div className="flex items-center justify-center gap-2">
            <span>Scroll to explore more</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      )}
    </div>
  );
}