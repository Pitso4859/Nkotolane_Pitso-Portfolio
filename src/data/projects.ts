export type ProjectLink = { label: string; href: string; download?: boolean };
export type DemoCredential = { role: string; email: string; password: string };
export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  features: string[];
  role: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  thumbnailVariant?: 'mobile' | 'desktop' | 'mockup' | 'full';
  links?: ProjectLink[];
  credentials?: DemoCredential[];
  downloadApk?: string;
  detailedDescription?: string;
};

export const projects: Project[] = [
  {
    title: 'GIGConnectSA',
    tagline: 'FNB Hackathon Project',
    description: 'A marketplace that connects informal workers with clients and supports job discovery, communication, proof submission and payments.',
    detailedDescription: 'GIGConnectSA is a marketplace designed around the needs of informal workers and clients in South Africa. I worked across the application architecture, backend services, frontend integration, authentication and deployment.',
    stack: ['Spring Boot 3', 'React 18', 'TypeScript', 'PostgreSQL', 'Gemini AI', 'Docker', 'JWT', 'Redis'],
    features: ['Job matching and worker discovery', 'Wallet and escrow workflow', 'Real time chat and job tracking', 'JWT authentication and role based access'],
    role: 'Full Stack Developer. Worked on application architecture, Spring Boot services, security, AI integration and deployment.',
    thumbnail: '/images/projects/GIGConnect.webp',
    thumbnailAlt: 'GIGConnectSA application interface',
    thumbnailVariant: 'full',
    links: [{ label: 'Live Demo', href: 'https://gigconnectsa.onrender.com' }, { label: 'GitHub', href: 'https://github.com/Pitso4859/GIGConnectSASkill.git' }],
  },
  {
    title: 'FinTrackPro',
    tagline: 'Accounting Platform',
    description: 'A South African accounting application for transaction management, VAT tracking, reporting and assisted invoice analysis.',
    detailedDescription: 'FinTrackPro is a full stack accounting platform for small business workflows. I built backend services and frontend screens, connected financial data to reporting features and integrated invoice analysis.',
    stack: ['Spring Boot 3', 'React', 'TypeScript', 'PostgreSQL', 'Gemini AI', 'JWT', 'Docker'],
    features: ['VAT and tax reporting workflows', 'Invoice analysis', 'Financial dashboard', 'Secure access for multiple users'],
    role: 'Full Stack Developer. Built backend services and frontend screens, integrated invoice analysis and implemented tax reporting features.',
    thumbnail: '/images/projects/fintrack.webp',
    thumbnailAlt: 'FinTrackPro application interface',
    thumbnailVariant: 'desktop',
    links: [{ label: 'Live Demo', href: 'https://fintrack-app-ytot.onrender.com' }, { label: 'API', href: 'https://fintrack-api-aw96.onrender.com' }],
  },
  {
    title: 'Mavuti Health Platform',
    tagline: 'Clinic Management Platform',
    description: 'A clinic management application for appointment booking, slot availability, role based access and patient communication.',
    detailedDescription: 'Mavuti Health Platform is a clinic management application with separate workflows for patients, staff and administrators. I implemented appointment booking logic, authentication, backend APIs, frontend flows, notifications and deployment configuration.',
    stack: ['Spring Boot 3', 'Java 21', 'React 19', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'Gemini AI'],
    features: ['Appointment booking and capacity rules', 'Role based authentication', 'Email notifications', 'Container based deployment'],
    role: 'Full Stack Developer. Implemented booking logic, backend APIs, frontend workflows, authentication and deployment configuration.',
    thumbnail: '/images/projects/mavuti.webp',
    thumbnailAlt: 'Mavuti Health Platform application interface',
    thumbnailVariant: 'desktop',
    links: [{ label: 'Live Demo', href: 'https://mavuti-health.onrender.com' }, { label: 'API', href: 'https://mavuti-api.onrender.com' }, { label: 'GitHub', href: 'https://github.com/Pitso4859/mavuti-health-platform.git' }],
  },
  {
    title: 'Credit Card Fraud Detection',
    tagline: 'Machine Learning Project',
    description: 'A Python machine learning workflow for identifying suspicious card transactions and comparing model performance.',
    detailedDescription: 'This project explores fraud detection on an imbalanced transaction dataset. I prepared the data pipeline, applied SMOTE, trained baseline and tree based models, evaluated classification results and built an interactive Gradio prediction interface.',
    stack: ['Python', 'pandas', 'scikit learn', 'SMOTE', 'Random Forest', 'Gradio'],
    features: ['Data preprocessing', 'Class imbalance handling', 'Model training and evaluation', 'Interactive prediction interface'],
    role: 'Machine Learning Developer. Prepared the data pipeline, trained models, evaluated results and built the prediction interface.',
    thumbnail: '/images/projects/fraud-detection.webp',
    thumbnailAlt: 'Credit card fraud detection project interface',
    thumbnailVariant: 'desktop',
    links: [{ label: 'GitHub', href: 'https://github.com/BA-3-2-Mavuti/Credit-Card-Fraud-Detection.git' }],
  },
];
