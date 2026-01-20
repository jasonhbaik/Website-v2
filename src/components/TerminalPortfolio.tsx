import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Youtube, Mail, Linkedin, Github, ExternalLink, Home, FolderOpen, MessageCircle } from 'lucide-react';

const personalInfo = {
  name: "Hansol Jason Baik",
  title: "Electrical Engineering Student at McMaster University",
  description: "Passionate about building innovative hardware and software systems. Turning abstract ideas into functional designs, whether coding a real-time bus tracker or prototyping mechanical assemblies. When not working on projects, learning new tools, exploring creative tech, and refining my engineering portfolio.",
  skills: [
    "Embedded Programming",
    "Arduino & Microcontrollers",
    "CAD Design",
    "3D Printing & Prototyping",
    "Coding & Software Development",
    "Hardware-Software Integration"
  ]
};

const projects = [
  {
    title: 'AR Goggles',
    description: 'Currently developing augmented reality goggles featuring visual SLAM (vSLAM) for real-time spatial tracking and environmental mapping. Integrating Python and C++ software stack on Linux-based Raspberry Pi platform to enable head-mounted AR experiences with precise 6DOF tracking.',
    tech: ['vSLAM', 'Python', 'C++', 'Linux', 'Raspberry Pi', 'Computer Vision'],
    image: 'https://images.unsplash.com/photo-1758523670318-f1b79559e1d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5JTIwaGVhZHNldHxlbnwxfHx8fDE3Njg4ODUxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1758523670318-f1b79559e1d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5JTIwaGVhZHNldHxlbnwxfHx8fDE3Njg4ODUxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBwaSUyMGNvbXB1dGluZ3xlbnwxfHx8fDE3Njg4ODUxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1633177317976-3f9bc45e1d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGRlcHRofGVufDF8fHx8MTc2ODg4NTEwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    design: '🚧 Project currently in development. The AR goggles leverage visual SLAM algorithms to track camera pose and build environmental maps in real-time, enabling augmented reality overlays anchored to the physical world. The system architecture combines a Raspberry Pi single-board computer running Linux as the processing core with camera sensors for visual input. Software is split between Python for high-level application logic and C++ for performance-critical SLAM computations. The vSLAM pipeline extracts visual features, tracks them across frames, estimates camera motion, and maintains a sparse 3D map of the environment. All of these components are essential for stable AR experiences.',
    approach: '🚧 Development focuses on integrating open-source vSLAM libraries (ORB-SLAM or similar) with custom Python/C++ application code. The Raspberry Pi provides a compact, embedded Linux environment suitable for wearable computing. Camera calibration procedures establish intrinsic parameters needed for accurate 3D reconstruction. Real-time performance optimization involves profiling computation bottlenecks and leveraging multi-threading to parallelize feature extraction and tracking. Testing validates tracking accuracy under various lighting conditions and movement speeds. Future integration will add AR rendering pipelines to overlay digital content aligned with the physical environment.',
    results: '🚧 Project in progress. Expected outcomes include functional head-mounted AR goggles with real-time 6DOF tracking, environmental mapping capabilities, and stable AR overlay registration. This project will demonstrate advanced competencies in computer vision, SLAM algorithms, embedded Linux development, Python/C++ interoperability, and real-time system design. These are key skills for robotics, AR/VR, and autonomous navigation applications.'
  },
  {
    title: 'LiDAR-Like Spatial Mapping System',
    description: 'Engineered a high-fidelity 3D room-mapping system that achieved a maximum quantization error of 1 mm by integrating an MSP432E401Y microcontroller with a VL53L1X ToF sensor, stepper motor automation, I²C sensor acquisition, UART real-time data transfer, and a C/assembly/MATLAB pipeline for processing and visualizing spatial data.',
    tech: ['MSP432E401Y', 'VL53L1X ToF', 'C/Assembly', 'MATLAB', 'I²C', 'UART'],
    image: 'https://images.unsplash.com/photo-1602493054376-d9dc3dfcbc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBjaGlwfGVufDF8fHx8MTc2ODg0NjMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1602493054376-d9dc3dfcbc7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBjaGlwfGVufDF8fHx8MTc2ODg0NjMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1593955654387-9dcbc8ef8071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcGdhJTIwY2hpcCUyMGhhcmR3YXJlfGVufDF8fHx8MTc2ODg4MDIwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGlhZ3JhbXxlbnwxfHx8fDE3Njg4ODAyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    design: 'The system architecture integrates hardware and software components to create a high-precision 3D mapping solution. The MSP432E401Y microcontroller serves as the central processing unit, interfacing with the VL53L1X Time-of-Flight sensor via I²C protocol for distance measurements. A stepper motor provides precise rotational control for 360-degree scanning, while UART communication enables real-time data streaming to a host computer. The modular design allows for easy calibration and adjustment of scanning parameters to achieve millimeter-level accuracy.',
    approach: 'Development began with hardware integration, configuring I²C communication between the microcontroller and ToF sensor to achieve reliable distance measurements. Custom C and assembly routines were written to control the stepper motor with precise timing, ensuring consistent angular resolution during scanning. The UART interface was implemented for efficient real-time data transfer, transmitting distance and angle pairs to the host system. A MATLAB pipeline was developed to process the raw data stream, performing coordinate transformations and rendering 3D point clouds. Extensive calibration procedures were conducted to minimize quantization errors and validate measurement accuracy.',
    results: 'The LiDAR-like spatial mapping system successfully achieved a maximum quantization error of just 1 mm, demonstrating exceptional precision for a student-built embedded system. The system can complete a full 360-degree room scan with high spatial resolution, capturing detailed environmental geometry. Real-time data visualization in MATLAB enables immediate feedback during scanning operations. The project showcases proficiency in embedded systems programming, sensor interfacing, motor control, and data processing. It bridges low-level hardware control with high-level visualization and analysis.'
  },
  {
    title: 'SeeFood',
    description: 'Inspired by the popular HBO show "Silicon Valley," developed a binary image classification model to distinguish between hotdogs and non-hotdog foods using a convolutional neural network (CNN). The project involved dataset preprocessing, image normalization, model training, and performance evaluation using labeled food images. The model was trained and validated in Python using Jupyter Notebook, with an emphasis on understanding CNN behavior, overfitting control, and classification accuracy.',
    tech: ['Python', 'TensorFlow/Keras', 'CNNs', 'Jupyter Notebook', 'NumPy', 'Matplotlib', 'Computer Vision'],
    image: 'https://images.unsplash.com/photo-1676658153484-5e5a9da28160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Rkb2clMjBmb29kJTIwY2xhc3NpZmljYXRpb258ZW58MXx8fHwxNzY4ODg1NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1676658153484-5e5a9da28160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Rkb2clMjBmb29kJTIwY2xhc3NpZmljYXRpb258ZW58MXx8fHwxNzY4ODg1NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBweXRob258ZW58MXx8fHwxNzY4ODg1NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGF0YXxlbnwxfHx8fDE3Njg4ODU3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    design: 'The SeeFood classifier was designed as a practical implementation of computer vision and deep learning principles, inspired by the iconic app from HBO\'s "Silicon Valley." The architecture employs a convolutional neural network optimized for binary classification between hotdog and non-hotdog food images. The model consists of multiple convolutional layers for feature extraction, pooling layers for dimensionality reduction, and fully connected layers for classification. Data preprocessing pipelines handle image resizing to uniform dimensions, normalization of pixel values to improve training stability, and label encoding for supervised learning. The Jupyter Notebook environment enables iterative experimentation with hyperparameters, layer configurations, and training strategies while visualizing results in real-time.',
    approach: 'Development began with dataset organization and preprocessing, ensuring consistent image formats and balanced class representation to prevent bias toward either category. Images were resized to a standard resolution and normalized to accelerate convergence during training. The CNN architecture was implemented using TensorFlow/Keras, starting with a baseline model and progressively adding complexity based on validation performance. Training employed techniques to combat overfitting, including dropout layers, early stopping, and data augmentation to artificially expand the training set. Matplotlib was used extensively to visualize training and validation loss curves, helping identify overfitting and underfitting behavior. NumPy facilitated efficient array operations for batch processing. The model was evaluated using classification accuracy, confusion matrices, and visual inspection of prediction results on test images.',
    results: 'Successfully trained a binary CNN classifier capable of distinguishing hotdogs from other foods with strong classification accuracy. The project validated understanding of end-to-end machine learning workflows, from data preparation and model architecture design to training, validation, and performance analysis. Overfitting mitigation strategies proved effective, as evidenced by training and validation loss curves converging appropriately. The practical implementation reinforced key computer vision concepts including convolutional feature extraction, spatial hierarchies, and supervised learning. This project demonstrates hands-on experience with TensorFlow/Keras, CNN architectures, image preprocessing, and the iterative nature of ML model development. These are foundational skills for computer vision and deep learning applications.'
  },
  {
    title: 'Analog Filter',
    description: 'Designed and simulated a signal conditioning circuit featuring a cascaded Sallen-Key bandpass filter (1-2kHz), non-inverting amplifier with 1.33x gain, DC offset biasing (1-5V range), reverse polarity protection using P-MOSFET, and status LEDs. The circuit was optimized for minimal power draw while meeting all frequency response and voltage specifications.',
    tech: ['Analog Circuit Design', 'Op-Amps', 'Sallen-Key Filters', 'MOSFET', 'PCB Design', 'SPICE Simulation'],
    image: 'https://images.unsplash.com/photo-1553408226-42ecf81a214c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3Njg4NjYwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1553408226-42ecf81a214c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3Njg4NjYwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcCUyMGFtcCUyMGNpcmN1aXR8ZW58MXx8fHwxNzY4ODg0NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwY29tcG9uZW50c3xlbnwxfHx8fDE3Njg4ODQ2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    design: 'The circuit employs a modular architecture with four distinct stages: filtering, amplification, DC offset, and protection. A cascaded Sallen-Key bandpass topology was selected for its superior ±40dB/decade rolloff compared to single-order filters. The low-pass stage uses matched 5.6kΩ resistors and 10nF capacitors tuned for a 2kHz cutoff, while the high-pass stage employs 11.3kΩ and 5.6kΩ resistors with 10nF capacitors for 1kHz. A non-inverting op-amp amplifier positioned between filter stages prevents loading effects while providing 1.33x gain. DC biasing is achieved through a voltage divider (800kΩ/200kΩ) optimized for minimal current draw. P-MOSFET reverse polarity protection ensures the circuit only operates under correct voltage conditions, with indicator LEDs providing visual feedback for both reverse voltage and output signal presence.',
    approach: 'The design process followed a systematic modular approach, beginning with theoretical calculations using Q-factor optimization (Q = 1/√2) to determine ideal component values for the Sallen-Key filters. Each stage was simulated independently using SPICE to validate frequency response and gain characteristics before integration. The low-pass and high-pass filters were iteratively tuned to account for real-world component tolerances and the -3dB cutoff point. Power consumption was minimized by scaling resistor values up to the hundreds of kiloohms range where feasible. The P-MOSFET protection circuit was analyzed using threshold voltage equations to ensure proper cutoff and forward-active operation. An envelope detector was incorporated at the output for LED signal indication. Comprehensive frequency response analysis confirmed ±40dB/decade attenuation outside the passband.',
    results: 'Successfully designed and simulated a complete signal conditioning system that met all challenge specifications. This included 1-2kHz bandpass filtering with steep rolloff, voltage amplification and offset to achieve 1-5V output range, reverse polarity protection, and status indication, all while minimizing power consumption. Simulation results demonstrated accurate frequency response with proper passband characteristics and effective attenuation of out-of-band signals. The modular design approach enabled independent validation and troubleshooting of each circuit stage. This project demonstrates strong competency in analog circuit design, op-amp theory, active filter topologies, MOSFET operation, and SPICE simulation tools. These are essential skills for power electronics and signal conditioning applications in solar car systems.'
  },
  {
    title: 'H2Optimize: AI Sustainability Platform',
    description: 'Developed an AI optimization platform that reduces environmental impact of AI queries by compressing prompts, eliminating redundant processing, and routing requests to energy-efficient data centers in colder climates. The platform achieves meaningful reductions in token usage, water consumption, and carbon emissions while maintaining response quality.',
    tech: ['Python', 'Flask', 'Gemini API', 'Llama', 'TypeScript', 'React', 'Vite', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1737982561070-e349fad5674b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHN1c3RhaW5hYmlsaXR5JTIwZ3JlZW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODg4NTEwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1737982561070-e349fad5674b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHN1c3RhaW5hYmlsaXR5JTIwZ3JlZW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODg4NTEwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3Njg4ODUxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudCUyMHN1c3RhaW5hYmlsaXR5fGVufDF8fHx8MTc2ODg4NTExMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    design: 'H2Optimize addresses the hidden environmental costs of AI usage through intelligent optimization at multiple layers. The platform architecture combines a Flask backend with TypeScript/React frontend to create a seamless user experience. The system integrates both cloud-based APIs (Gemini) and local LLMs (Llama) to create a hybrid AI pipeline that balances performance with sustainability. Prompt optimization algorithms compress queries to minimize token usage while preserving semantic meaning. A data center routing algorithm analyzes real-time weather data to redirect requests to facilities in colder climates, reducing cooling energy requirements. The modular design allows users to benefit from reduced environmental impact without changing their behavior or sacrificing response quality.',
    approach: 'Development began with research into AI sustainability metrics, discovering that energy consumption, water usage for cooling, and carbon emissions vary significantly across data centers. A Flask backend was implemented to handle prompt preprocessing, applying compression techniques to reduce token counts. Integration with the Gemini API enabled cloud-based AI inference, while local Llama models provided an additional efficiency tier for simpler queries. The frontend was built with TypeScript, Vite, and Tailwind CSS to create a responsive interface. Real-time weather API integration enabled intelligent routing decisions based on climate data. The team tackled challenges in accurately modeling environmental impact across distributed infrastructure, implementing heuristics and caveats to ensure honest communication of the platform\'s benefits.',
    results: 'Successfully created a functional platform that demonstrates AI sustainability optimization at scale. The system achieves measurable reductions in token usage through prompt compression while maintaining response quality. Data center routing to colder climates reduces cooling energy requirements. The project earned recognition for tackling an emerging sustainability challenge in AI. Key learnings include understanding AI efficiency beyond just latency. This encompasses energy, water, and emissions at data-center scale. The hybrid architecture combining local and cloud AI proved effective for balancing performance and resource consumption. This project demonstrates competency in full-stack development, API integration, environmental impact analysis, and communicating complex technical concepts to diverse audiences.'
  },
  {
    title: 'Rear-View Camera System for the Impaired',
    description: 'Developed a wheelchair-mounted rear-view camera system by prototyping custom components in Autodesk Inventor, 3D-printing durable mounts, and laser-cutting casings, with the assembly powered by a portable power bank to deliver real-time rear visibility through a camera-to-monitor feed with reinforced wiring protection.',
    tech: ['Autodesk Inventor', '3D Printing', 'Laser Cutting', 'Camera Systems', 'CAD Design'],
    image: 'https://images.unsplash.com/photo-1578416643354-b560173ae03e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVlbGNoYWlyJTIwYWNjZXNzaWJpbGl0eXxlbnwxfHx8fDE3Njg4ODQzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    images: [
      'https://images.unsplash.com/photo-1578416643354-b560173ae03e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVlbGNoYWlyJTIwYWNjZXNzaWJpbGl0eXxlbnwxfHx8fDE3Njg4ODQzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1581092918484-8313e1f7e8c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50aW5nfGVufDF8fHx8MTc2ODg4NDM1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBzeXN0ZW18ZW58MXx8fHwxNzY4ODg0MzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    design: 'The system was designed to address a critical safety need for wheelchair users who lack rear visibility during navigation. Custom mounting brackets were designed in Autodesk Inventor to securely attach both the rear-facing camera and front-mounted monitor to the wheelchair frame without interfering with normal operation. The design prioritized durability, adjustability, and ease of installation. Laser-cut protective casings shield electronic components from environmental factors, while 3D-printed mounts provide flexibility in positioning for optimal viewing angles. A portable power bank solution ensures the system operates independently of the wheelchair\'s power system.',
    approach: 'The project began with extensive client consultation to understand mobility challenges and requirements. CAD models were iteratively refined in Autodesk Inventor based on wheelchair measurements and user feedback. Prototypes were manufactured using 3D printing for plastic components and laser cutting for protective enclosures. The camera-to-monitor wiring was carefully routed with reinforced protection to prevent damage during daily use. Multiple iterations of mounting solutions were tested to ensure stability during movement while maintaining adjustability. The team collaborated to balance functionality, aesthetics, and manufacturing constraints within project timelines.',
    results: 'Successfully delivered a working prototype that provides wheelchair users with reliable rear visibility, significantly improving safety and independence. Out of 200+ competing groups, the project was recognized as a top six finalist, validating the innovation and execution quality. The team had the honor of presenting the solution directly to the client at CIBC Hall, demonstrating real-world impact. This achievement reflects strong teamwork, engineering problem-solving, and commitment to accessible design. The project showcases proficiency in CAD modeling, rapid prototyping, and user-centered engineering.'
  }
];

/*
const courses = [
  {
    title: 'Advanced VLSI Design',
    institution: 'Stanford University',
    topics: ['CMOS Design', 'Layout Optimization', 'Timing Analysis']
  },
  {
    title: 'Deep Learning Specialization',
    institution: 'Coursera / deeplearning.ai',
    topics: ['CNNs', 'RNNs', 'Neural Architecture']
  },
  {
    title: 'Digital System Design',
    institution: 'MIT OpenCourseWare',
    topics: ['HDL', 'RTL Design', 'FPGA Implementation']
  },
  {
    title: 'Machine Learning for Hardware',
    institution: 'UC Berkeley',
    topics: ['ML Accelerators', 'Quantization', 'Hardware-Software Co-design']
  }
];

*/

const contact = [
  { icon: Mail, label: 'Email', value: 'jason.baik@example.com', href: 'mailto:jason.baik@example.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/hansol-baik', href: 'https://www.linkedin.com/in/hansol-baik/' },
  { icon: Youtube, label: 'YouTube', value: 'youtube.com/@hansolbaik', href: 'https://www.youtube.com/@hansolbaik' },
];

type Step = 'cd' | 'cd-complete' | 'info' | 'info-complete' | 'projects' | 'projects-complete' | 'courses' | 'courses-complete' | 'contact' | 'contact-complete';

interface TerminalPortfolioProps {
  onProjectClick: (project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
  }) => void;
  skipAnimation?: boolean;
  onAnimationComplete?: () => void;
}

export function TerminalPortfolio({ onProjectClick, skipAnimation = false, onAnimationComplete }: TerminalPortfolioProps) {
  const cdFullCommand = 'cd ./Jason_Baik';
  const infoFullCommand = 'cat introduction.txt';
  const projectsFullCommand = 'ls ./projects';
  const coursesFullCommand = 'cat courses.txt';
  const contactFullCommand = 'cat contact.txt';
  
  const [currentStep, setCurrentStep] = useState<Step>(skipAnimation ? 'contact-complete' : 'cd');
  const [cdCommand, setCdCommand] = useState(skipAnimation ? cdFullCommand : '');
  const [infoCommand, setInfoCommand] = useState(skipAnimation ? infoFullCommand : '');
  const [projectsCommand, setProjectsCommand] = useState(skipAnimation ? projectsFullCommand : '');
  const [coursesCommand, setCoursesCommand] = useState(skipAnimation ? coursesFullCommand : '');
  const [contactCommand, setContactCommand] = useState(skipAnimation ? contactFullCommand : '');
  
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Call onAnimationComplete immediately if skipping animations
  useEffect(() => {
    if (skipAnimation && onAnimationComplete) {
      onAnimationComplete();
    }
  }, [skipAnimation, onAnimationComplete]);

  useEffect(() => {
    if (currentStep === 'cd' && cdCommand.length < cdFullCommand.length) {
      const timeout = setTimeout(() => {
        setCdCommand(cdFullCommand.slice(0, cdCommand.length + 1));
      }, 25);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'cd' && cdCommand.length === cdFullCommand.length) {
      const timeout = setTimeout(() => {
        setCurrentStep('cd-complete');
      }, 150);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'cd-complete') {
      const timeout = setTimeout(() => {
        setCurrentStep('info');
      }, 100);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'info' && infoCommand.length < infoFullCommand.length) {
      const timeout = setTimeout(() => {
        setInfoCommand(infoFullCommand.slice(0, infoCommand.length + 1));
      }, 25);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'info' && infoCommand.length === infoFullCommand.length) {
      const timeout = setTimeout(() => {
        setCurrentStep('info-complete');
      }, 150);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'info-complete') {
      const timeout = setTimeout(() => {
        setCurrentStep('projects');
      }, 200);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'projects' && projectsCommand.length < projectsFullCommand.length) {
      const timeout = setTimeout(() => {
        setProjectsCommand(projectsFullCommand.slice(0, projectsCommand.length + 1));
      }, 18);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'projects' && projectsCommand.length === projectsFullCommand.length) {
      const timeout = setTimeout(() => {
        setCurrentStep('projects-complete');
      }, 150);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'projects-complete') {
      const timeout = setTimeout(() => {
        setCurrentStep('courses');
      }, 200);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'courses' && coursesCommand.length < coursesFullCommand.length) {
      const timeout = setTimeout(() => {
        setCoursesCommand(coursesFullCommand.slice(0, coursesCommand.length + 1));
      }, 18);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'courses' && coursesCommand.length === coursesFullCommand.length) {
      const timeout = setTimeout(() => {
        setCurrentStep('courses-complete');
      }, 150);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'courses-complete') {
      const timeout = setTimeout(() => {
        setCurrentStep('contact');
      }, 200);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'contact' && contactCommand.length < contactFullCommand.length) {
      const timeout = setTimeout(() => {
        setContactCommand(contactFullCommand.slice(0, contactCommand.length + 1));
      }, 18);
      return () => clearTimeout(timeout);
    } else if (currentStep === 'contact' && contactCommand.length === contactFullCommand.length) {
      const timeout = setTimeout(() => {
        setCurrentStep('contact-complete');
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentStep, cdCommand, infoCommand, projectsCommand, coursesCommand, contactCommand, onAnimationComplete]);

  const isInJasonBaikDir = currentStep !== 'cd';

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
              jason@portfolio:{isInJasonBaikDir ? '~/Jason_Baik' : '~'}
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm space-y-4">
            {/* CD Command */}
            <div>
              <div className="flex items-center">
                <span className="text-green-400">jason@portfolio</span>
                <span className="text-slate-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-500">$</span>
                <span className="text-slate-200 ml-1">{cdCommand}</span>
                {currentStep === 'cd' && cdCommand.length < cdFullCommand.length && (
                  <span className="inline-block w-2 h-4 bg-green-400 animate-blink ml-1" />
                )}
              </div>
            </div>

            {/* Info Command */}
            {(currentStep === 'info' || currentStep === 'info-complete' || currentStep === 'projects' || currentStep === 'projects-complete' || currentStep === 'courses' || currentStep === 'courses-complete' || currentStep === 'contact' || currentStep === 'contact-complete') && (
              <div ref={homeRef}>
                <div className="flex items-center mb-4">
                  <span className="text-green-400">jason@portfolio</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-blue-400">~/Jason_Baik</span>
                  <span className="text-slate-500">$</span>
                  <span className="text-slate-200 ml-1">{infoCommand}</span>
                  {currentStep === 'info' && infoCommand.length < infoFullCommand.length && (
                    <span className="inline-block w-2 h-4 bg-green-400 animate-blink ml-1" />
                  )}
                </div>

                {/* Personal Info Output */}
                {(currentStep === 'info-complete' || currentStep === 'projects' || currentStep === 'projects-complete' || currentStep === 'courses' || currentStep === 'courses-complete' || currentStep === 'contact' || currentStep === 'contact-complete') && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-6 border-l-2 border-cyan-400 pl-4"
                  >
                    <div className="text-cyan-400 text-lg mb-2">{personalInfo.name}</div>
                    <div className="text-yellow-400 mb-3">{personalInfo.title}</div>
                    <div className="text-slate-300 mb-4">{personalInfo.description}</div>
                    
                    <div className="mb-3">
                      <div className="text-cyan-400 mb-2">Skills:</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {personalInfo.skills.map(skill => (
                          <div key={skill} className="text-slate-300 text-sm">
                            <span className="text-yellow-400">→</span> {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Projects Command */}
            {(currentStep === 'projects' || currentStep === 'projects-complete' || currentStep === 'courses' || currentStep === 'courses-complete' || currentStep === 'contact' || currentStep === 'contact-complete') && (
              <div ref={projectsRef}>
                <div className="flex items-center mb-4">
                  <span className="text-green-400">jason@portfolio</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-blue-400">~/Jason_Baik</span>
                  <span className="text-slate-500">$</span>
                  <span className="text-slate-200 ml-1">{projectsCommand}</span>
                  {currentStep === 'projects' && projectsCommand.length < projectsFullCommand.length && (
                    <span className="inline-block w-2 h-4 bg-green-400 animate-blink ml-1" />
                  )}
                </div>

                {/* Projects Output */}
                {(currentStep === 'projects-complete' || currentStep === 'courses' || currentStep === 'courses-complete' || currentStep === 'contact' || currentStep === 'contact-complete') && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-6"
                    data-section="projects"
                  >
                    <div className="text-cyan-400 text-lg mb-4">Featured Projects</div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projects.map((project, index) => (
                        <motion.div
                          key={project.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          onClick={() => onProjectClick(project)}
                          className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800/50 hover:border-cyan-500/50 transition-all group cursor-pointer"
                        >
                          <div className="h-40 bg-slate-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent" />
                            <img 
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                            />
                          </div>
                          
                          <div className="p-4">
                            <h3 className="text-white mb-2 font-sans">{project.title}</h3>
                            <p className="text-slate-400 text-xs mb-3 font-sans leading-relaxed">{project.description}</p>
                            
                            <div className="flex flex-wrap gap-1 mb-3">
                              {project.tech.map(tech => (
                                <span
                                  key={tech}
                                  className="px-2 py-0.5 bg-cyan-500/10 text-cyan-300 text-xs rounded border border-cyan-500/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            <div className="text-xs text-cyan-400 group-hover:text-cyan-300 transition-colors">
                              Click to view details →
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Courses Command */}
            {(currentStep === 'courses' || currentStep === 'courses-complete' || currentStep === 'contact' || currentStep === 'contact-complete') && (
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-green-400">jason@portfolio</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-blue-400">~/Jason_Baik</span>
                  <span className="text-slate-500">$</span>
                  <span className="text-slate-200 ml-1">{coursesCommand}</span>
                  {currentStep === 'courses' && coursesCommand.length < coursesFullCommand.length && (
                    <span className="inline-block w-2 h-4 bg-green-400 animate-blink ml-1" />
                  )}
                </div>

                {/* Courses Output */}
                {(currentStep === 'courses-complete' || currentStep === 'contact' || currentStep === 'contact-complete') && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-6"
                  >
                    <div className="text-cyan-400 text-lg mb-4">Courses & Certifications</div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courses.map((course, index) => (
                        <motion.div
                          key={course.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="border border-slate-700 rounded-lg p-4 bg-slate-800/30 hover:border-cyan-500/50 transition-all"
                        >
                          <div className="text-white mb-1 font-sans">{course.title}</div>
                          <div className="text-yellow-400 text-xs mb-3">{course.institution}</div>
                          <div className="flex flex-wrap gap-1">
                            {course.topics.map(topic => (
                              <span
                                key={topic}
                                className="px-2 py-0.5 bg-slate-700/50 text-slate-300 text-xs rounded"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Contact Command */}
            {(currentStep === 'contact' || currentStep === 'contact-complete') && (
              <div ref={contactRef}>
                <div className="flex items-center mb-4">
                  <span className="text-green-400">jason@portfolio</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-blue-400">~/Jason_Baik</span>
                  <span className="text-slate-500">$</span>
                  <span className="text-slate-200 ml-1">{contactCommand}</span>
                  {currentStep === 'contact' && contactCommand.length < contactFullCommand.length && (
                    <span className="inline-block w-2 h-4 bg-green-400 animate-blink ml-1" />
                  )}
                </div>

                {/* Contact Output */}
                {currentStep === 'contact-complete' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-6"
                    data-section="contact"
                  >
                    <div className="text-cyan-400 text-lg mb-4">Contact</div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {contact.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 p-3 border border-slate-700 rounded bg-slate-800/30 hover:border-cyan-500/50 transition-all group"
                          >
                            <Icon className="w-5 h-5 text-cyan-400" />
                            <div>
                              <div className="text-xs text-slate-500">{item.label}</div>
                              <div className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">{item.value}</div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Final prompt with blinking cursor */}
            {currentStep === 'contact-complete' && (
              <div className="flex items-center pt-4 border-t border-slate-800">
                <span className="text-green-400">jason@portfolio</span>
                <span className="text-slate-500">:</span>
                <span className="text-blue-400">~/Jason_Baik</span>
                <span className="text-slate-500">$</span>
                <span className="inline-block w-2 h-4 bg-green-400 animate-blink ml-1" />
              </div>
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
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl px-3 py-2 shadow-2xl flex items-center gap-2">
          <motion.button
            onClick={() => scrollToSection(contactRef)}
            whileHover={{ scale: 1.2, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-shadow"
            title="Contact"
          >
            <MessageCircle className="w-5 h-5 text-white" />
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection(projectsRef)}
            whileHover={{ scale: 1.2, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-lg hover:shadow-yellow-500/50 transition-shadow"
            title="Projects"
          >
            <FolderOpen className="w-5 h-5 text-white" />
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection(homeRef)}
            whileHover={{ scale: 1.2, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg hover:shadow-cyan-500/50 transition-shadow"
            title="Home"
          >
            <Home className="w-5 h-5 text-white" />
          </motion.button>
          
          <motion.a
            href="mailto:jason.baik@example.com"
            whileHover={{ scale: 1.2, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg hover:shadow-purple-500/50 transition-shadow"
            title="Email"
          >
            <Mail className="w-5 h-5 text-white" />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/hansol-baik/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg hover:shadow-blue-600/50 transition-shadow"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}