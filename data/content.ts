import { Project, Experience } from '../types';
import { SiPython, SiTensorflow, SiPytorch, SiPostgresql, SiReact, SiDocker, SiNextdotjs, SiFigma, SiNodedotjs, SiGit, SiThreedotjs } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Predictive Traffic & Ride Request Heatmap',
    category: 'ML',
    description: 'Developed a spatio-temporal model to predict high-demand areas for ride-hailing services, optimizing driver allocation and reducing wait times.',
    tech: ['Python', 'Scikit-Learn', 'GeoPandas', 'Flask'],
    metrics: '15% Wait Time Impact'
  },
  {
    id: '2',
    title: 'Financial Fraud Detection System',
    category: 'Data Engineering',
    description: 'Built a real-time anomaly detection engine using unsupervised learning on transactional data to flag fraudulent activities instantly.',
    tech: ['PyTorch', 'Kafka', 'Redis', 'Docker'],
    metrics: '98% Fraud Detected Real-time'
  },
  {
    id: '3',
    title: 'AI-Powered Document Processing for Legal Contracts',
    category: 'Analytics',
    description: 'Implemented an NLP pipeline for automated entity recognition and clause extraction from complex legal documents.',
    tech: ['Hugging Face Transformers', 'spaCy', 'FastAPI', 'Kubernetes'],
    metrics: '70% Manual Review Time Saved'
  }
];

export const timeline: Experience[] = [
  { id: '1', role: 'Co-Founder & CTO', company: 'Superlaps', period: '2026 - Present', description: 'Regional expansion across the country. Launching AI-driven SaaS products.' },
  { id: '2', role: 'Ambassador', company: 'Volt Niger', period: '2025', description: 'Strategic partnership with Volt Niger. Scaling operations and team expansion.' },
  { id: '3', role: 'Co-Founder & CTO', company: 'Superlaps', period: '2024', description: 'Foundation of Superlaps. Initial market research and first MVP deployment in Niamey' }
];

export const skills = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'SQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', icon: FaAws, color: '#F24E1E' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Three.js', icon: SiThreedotjs, color: '#000000' }
];
