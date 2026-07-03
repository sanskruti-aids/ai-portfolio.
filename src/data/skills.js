import { 
  FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, 
  FaGithub, FaReact, FaTerminal
} from 'react-icons/fa';
import { 
  SiPandas, SiNumpy, SiScikitlearn, 
  SiJupyter, SiTailwindcss, SiNextdotjs, SiTypescript
} from 'react-icons/si';
import { VscGraph } from 'react-icons/vsc'; // For Matplotlib

export const skillCategories = [
  {
    title: "Programming Languages & Core",
    skills: [
      { name: "Python", icon: FaPython, level: 90, color: "text-[#3776AB]" },
      { name: "SQL", icon: FaDatabase, level: 85, color: "text-[#003B57]" },
      { name: "TypeScript", icon: SiTypescript, level: 75, color: "text-[#3178C6]" },
      { name: "JavaScript", icon: FaJsSquare, level: 80, color: "text-[#F7DF1E]" },
      { name: "HTML5 & CSS3", icon: FaCss3Alt, level: 85, color: "text-[#1572B6]" }
    ]
  },
  {
    title: "AI & Data Science",
    skills: [
      { name: "Pandas", icon: SiPandas, level: 90, color: "text-[#150458]" },
      { name: "NumPy", icon: SiNumpy, level: 85, color: "text-[#013243]" },
      { name: "Scikit-Learn", icon: SiScikitlearn, level: 80, color: "text-[#F7931E]" },
      { name: "Machine Learning", icon: FaTerminal, level: 80, color: "text-[#EC4899]" },
      { name: "Data Analysis & EDA", icon: VscGraph, level: 85, color: "text-[#11557c]" }
    ]
  },
  {
    title: "Web Frameworks & Tools",
    skills: [
      { name: "React", icon: FaReact, level: 80, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, level: 75, color: "text-[#FFFFFF]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, color: "text-[#06B6D4]" },
      { name: "Jupyter & Notebooks", icon: SiJupyter, level: 90, color: "text-[#F37626]" },
      { name: "GitHub / Git", icon: FaGithub, level: 85, color: "text-[#FFFFFF]" }
    ]
  }
];

export const currentlyLearning = [
  "Deep Learning & PyTorch",
  "LangGraph & Multi-Agent Orchestration",
  "MLOps & BentoML Deployment",
  "Data Pipelines & Engineering"
];
