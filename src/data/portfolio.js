// Single source of truth for all portfolio content.
// Everything here comes from the resume (DIKSHA_MORE_RESUME) and the linked GitHub repos.
import {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  Wrench,
  BrainCircuit,
} from 'lucide-react';

export const profile = {
  name: 'Diksha More',
  firstName: 'Diksha',
  role: 'AI Engineer & Full-Stack Developer',
  headline: 'Aspiring AI Engineer · Full-Stack Developer',
  location: 'Mumbai, India',
  email: 'dikshamore496@gmail.com',
  phone: '+91 9699636571',
  github: 'https://github.com/dikshamore11',
  githubHandle: 'dikshamore11',
  linkedin: 'https://www.linkedin.com/in/diksha-more-3b707831a/',
  linkedinHandle: 'diksha-more-3b707831a',
  resume: '/Diksha_More_Resume.pdf',
  resumeFileName: 'Diksha_More_Resume.pdf',
  photo: '/profile.jpg',
  rotatingTitles: [
    'AI-powered applications',
    'full-stack web apps',
    'Java backends',
    'tools people actually use',
  ],
  intro:
    'Information Technology engineering student building AI-powered products with OpenAI and Gemini APIs, backed by solid full-stack engineering in React, Node.js, Java and Python.',
};

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  paragraphs: [
    "I'm a Bachelor of Engineering student in Information Technology at Datta Meghe College of Engineering, Navi Mumbai. My path into engineering started with a Diploma in IT from Vidyalankar Polytechnic, and I've been building for the web ever since.",
    'I enjoy working across the full stack, from responsive interfaces in React to APIs in Node.js and Java to the databases underneath. Lately my focus has been AI-powered applications: assistants that understand text, voice and images, resume screening that explains its scores, and interview practice that gives real feedback.',
    'Two internships taught me how real software gets shipped: CRUD-heavy business apps with JDBC and MySQL, REST integrations, testing and debugging. Winning first place at HackHive 2025 showed me I can design and deliver under pressure.',
    "I'm looking for Software Developer, Full-Stack, Java Developer and Graduate Engineer Trainee roles where I can keep learning fast and contribute to products people use.",
  ],
  highlights: [
    { label: 'Degree', value: 'BE in Information Technology' },
    { label: 'CGPA', value: '7.83' },
    { label: 'Internships', value: '2' },
    { label: 'Hackathon', value: '1st Place: HackHive 2025' },
  ],
  focus: ['Full-Stack Development', 'Software Engineering', 'AI-Powered Applications'],
};

export const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['Java', 'C++', 'JavaScript', 'Python', 'C'],
  },
  {
    title: 'Frontend Development',
    icon: LayoutTemplate,
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js', 'Angular', 'Responsive UI'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Java (JSP)', 'JDBC', 'REST APIs', 'JSON', 'Flask'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'Supabase'],
  },
  {
    title: 'Frameworks & Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Android Studio', 'Vite'],
  },
  {
    title: 'AI / ML Technologies',
    icon: BrainCircuit,
    skills: ['OpenAI API', 'Gemini API', 'Generative AI & LLMs', 'scikit-learn', 'Multimodal AI'],
  },
];

export const coreSubjects = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'DBMS',
  'Operating Systems',
  'Cloud Security Fundamentals',
];

export const experience = [
  {
    role: 'Java Developer Intern',
    company: 'JavaSpark Solutions',
    location: 'Thane, India',
    period: 'Jan 2026 – Feb 2026',
    points: [
      'Developed web applications using Java, JSP, HTML, CSS, JavaScript and MySQL.',
      'Built and managed CRUD operations with JDBC and database integration.',
      'Integrated REST APIs and JSON to display real-time data dynamically.',
      'Gained hands-on experience in full-stack development, frontend–backend integration and responsive UI design.',
    ],
    tech: ['Java', 'JSP', 'JDBC', 'MySQL', 'REST APIs', 'JSON', 'JavaScript', 'HTML/CSS'],
  },
  {
    role: 'Web Development Intern',
    company: 'CLP InfoTech',
    location: 'Wadala, India',
    period: 'Jun 2023 – Jul 2023',
    points: [
      'Developed business and e-commerce websites using HTML, CSS, JavaScript and MySQL.',
      'Built Student and Billing Management Systems with database integration.',
      'Performed testing, debugging and frontend–backend integration.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
];

export const projects = [
  {
    name: 'AI Resume Intelligence Platform',
    alias: 'NovaHire',
    tag: 'Live · AI · Full-Stack',
    overview:
      'An ATS-based resume screening platform that analyzes a resume against a job description and explains how to improve it.',
    problem:
      "Candidates rarely know why an applicant tracking system rejects their resume. This platform scores the match, shows the missing skills and suggests what to fix.",
    features: [
      'PDF resume parsing',
      'Job-description matching with ATS-style scoring',
      'Skill-gap analysis',
      'AI-powered, personalized improvement recommendations',
    ],
    tech: ['Python', 'Flask', 'pdfplumber', 'scikit-learn', 'HTML', 'CSS'],
    github: 'https://github.com/dikshamore11/NovaHire-AI-Resume-Platform',
    live: 'https://novahire-ai-resume-platform-1.onrender.com/',
    image: '/projects/novahire.png',
    imageAlt: 'Screenshot of the NovaHire AI resume analyzer home page with resume upload and job description fields',
    featured: true,
  },
  {
    name: 'AURA: AI Operating System',
    tag: 'AI · Multimodal',
    overview:
      'An AI-powered personal assistant with an operating-system-style interface, built on React and Node.js and backed by OpenAI and Gemini models.',
    problem:
      'Most assistants handle a single input type. AURA brings text, voice and image interactions into one unified workspace.',
    features: [
      'Multimodal interaction: text, voice and image',
      'Integration with OpenAI and Gemini APIs',
      'Voice input through speech recognition',
      'Animated, OS-inspired React interface',
    ],
    tech: ['React.js', 'Node.js', 'OpenAI API', 'Gemini API', 'Vite', 'Framer Motion'],
    github: 'https://github.com/dikshamore11/AURA-AI-OS',
    live: null,
    cover: 'aura', // no public screenshot: rendered as designed cover art
  },
  {
    name: 'AI Interview Simulator',
    tag: 'AI · Voice',
    overview:
      'An AI-powered mock interview platform with voice-based interaction and real-time communication.',
    problem:
      'Interview practice usually needs another person. This simulator lets candidates rehearse on their own and still get structured feedback.',
    features: [
      'Voice-based, real-time interview interaction',
      'Dynamic question generation',
      'Automated feedback after each session',
      'AI-driven performance evaluation',
    ],
    tech: ['AI Models', 'Voice Interaction', 'Real-Time Communication'],
    github: null,
    live: null,
    cover: 'interview',
  },
];

export const education = [
  {
    degree: 'Bachelor of Engineering, Information Technology',
    school: 'Datta Meghe College of Engineering',
    location: 'Airoli, Navi Mumbai',
    period: '08/2024',
    score: 'CGPA: 7.83',
    status: 'Final Year',
  },
  {
    degree: 'Diploma in Information Technology',
    school: 'Vidyalankar Polytechnic',
    location: 'Wadala, Mumbai',
    period: '06/2021',
    score: 'Percentage: 84.88%',
    status: 'Completed',
  },
];

export const achievements = [
  {
    title: '1st Place: HackHive 2025',
    org: 'Datta Meghe College of Engineering',
    description:
      'Built a Developer Pairing Platform in an 8-hour interdepartmental hackathon and won first place with a ₹3,000 prize.',
    kind: 'award',
  },
];

export const certifications = [
  {
    title: 'Learn Generative AI',
    issuer: 'EduBridge (Capgemini & SAP)',
    description: 'Hands-on training in Generative AI tools, LLMs and AI-driven solutions.',
  },
  {
    title: 'Cloud Security Foundations',
    issuer: 'AWS Academy',
    description: 'IAM, data protection, encryption and cloud monitoring.',
  },
  {
    title: 'Java Developer Internship',
    issuer: 'JavaSpark Solutions',
    description:
      'Core Java development, problem-solving, backend logic implementation and hands-on software development experience.',
  },
];
