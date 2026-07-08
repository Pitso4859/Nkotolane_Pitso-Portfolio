export type ProjectLink = {
  label: string;
  href: string;
  download?: boolean;
};

export type DemoCredential = {
  role: string;
  email: string;
  password: string;
};

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
    description: 'A mobile-first marketplace connecting informal workers with clients in South Africa. Built as part of an FNB hackathon with Spring Boot 3, React 18, Gemini AI, and PostgreSQL.',
    detailedDescription: `GIGConnect SA is a comprehensive digital marketplace that bridges the gap between informal workers and clients across South Africa. The platform features AI-powered job matching, secure escrow payments, and a sophisticated rating system.

Key achievements:
• 40% faster job matching using Gemini AI
• Secure escrow payment system with wallet functionality
• Real-time chat and job tracking
• Deployed on Render.com with 99.9% uptime`,
    stack: ['Spring Boot 3', 'React 18', 'TypeScript', 'PostgreSQL', 'Gemini AI', 'Docker', 'JWT', 'Redis'],
    features: [
      'AI-powered job matching with Gemini 1.5 Flash',
      'Secure escrow payments with wallet system',
      'Real-time chat and job tracking',
      'Worker leaderboard with ELITE/GOLD/SILVER badges',
      'Proof submission with GPS location',
      'JWT authentication with refresh token rotation',
    ],
    role: 'Lead Full-Stack Developer - Architected the microservices architecture, implemented Spring Boot backend with JWT security, integrated Gemini AI for intelligent job matching, and deployed on Render with CI/CD pipeline.',
    thumbnail: '/images/projects/GIGConnect.png',
    thumbnailAlt: 'GIGConnectSA login screen - informal worker marketplace',
    thumbnailVariant: 'full',
    links: [
      {
        label: 'Live Demo',
        href: 'https://gigconnectsa.onrender.com',
      },
      {
        label: 'View Code',
        href: 'https://github.com/Pitso4859/GIGConnectSASkill.git',
      },
    ],
    // No credentials - users create their own account
  },
  {
    title: 'FinTrackPro',
    tagline: 'SARS-Compliant AI Accounting',
    description: 'SARS-compliant accounting platform with AI-powered financial insights — manage transactions, track VAT, and generate reports with Gemini AI analysis.',
    detailedDescription: `FinTrackPro is a full-stack accounting platform built for South African businesses, combining automated tax compliance with AI-driven financial analysis.

Key achievements:
• Automated VAT 201 & CIT return generation
• Gemini AI invoice OCR and financial analysis
• Real-time financial dashboard with transaction tracking
• JWT-secured multi-user access with role separation`,
    stack: ['Spring Boot 3', 'React', 'TypeScript', 'PostgreSQL', 'Gemini AI', 'JWT', 'Docker'],
    features: [
      'Automated VAT 201 & CIT tax returns',
      'Gemini AI invoice OCR & analysis',
      'Real-time financial dashboard',
      'JWT-secured multi-user access',
    ],
    role: 'Full-Stack Developer - Built the Spring Boot backend and React frontend, integrated Gemini AI for invoice OCR and financial analysis, and implemented SARS-compliant tax return generation.',
    thumbnail: '/images/projects/fintrack.png',
    thumbnailAlt: 'FinTrackPro login screen - SARS-compliant accounting platform',
    thumbnailVariant: 'desktop',
    links: [
      {
        label: 'Live Demo',
        href: 'https://fintrack-app-ytot.onrender.com',
      },
      {
        label: 'API',
        href: 'https://fintrack-api-aw96.onrender.com',
      },
    ],
  },
  {
    title: 'Mavuti Health Platform',
    tagline: 'VUT Health Clinic Platform',
    description: 'Full-stack clinic management platform for the VUT Health Clinic with AI health assistant, appointment booking, live slot availability, and role-based access.',
    detailedDescription: `Mavuti Health is a production-grade clinic management platform built for the Vaal University of Technology Health Clinic, handling appointment booking for students, employees, and admins — now with a Gemini-powered AI health assistant.

Key achievements:
• AI Health Assistant powered by Google Gemini 1.5 Flash, with a hard-coded emergency-keyword bypass that never routes crisis messages through the AI
• Live appointment booking with slot capacity management
• Role-based access for students, staff, and admins with JWT + refresh tokens and per-user rate limiting (Bucket4j)
• Async email notifications via JavaMailSender
• Deployed with Docker (multi-stage, non-root) and GitHub Actions + Jenkins CI/CD on Render`,
    stack: ['Spring Boot 3', 'Java 21', 'React 19', 'Vite', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'Gemini AI'],
    features: [
      'AI Health Assistant (Gemini 1.5 Flash) with emergency-keyword safety bypass',
      'JWT authentication with role-based access & rate limiting',
      'Live slot availability & booking validation',
      'Redis caching & async email notifications',
      'Docker + GitHub Actions/Jenkins CI/CD on Render',
    ],
    role: 'Full-Stack Developer - Architected the Spring Boot backend and React frontend, implemented booking logic, slot capacity management, the Gemini AI health assistant, and Docker/CI-CD deployment.',
    thumbnail: '/images/projects/mavuti.png',
    thumbnailAlt: 'Mavuti Health Clinic login screen - VUT Health Clinic platform',
    thumbnailVariant: 'desktop',
    links: [
      {
        label: 'Live Demo',
        href: 'https://mavuti-health.onrender.com',
      },
      {
        label: 'API',
        href: 'https://mavuti-api.onrender.com',
      },
      {
        label: 'View Code',
        href: 'https://github.com/Pitso4859/mavuti-health-platform.git',
      },
    ],
  },
  {
    title: 'AI Credit Card Fraud Detection',
    tagline: 'Machine Learning',
    description: 'ML pipeline detecting real-time fraudulent transactions with 94% accuracy using Python and scikit-learn.',
    stack: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'XGBoost', 'SHAP'],
    features: [
      'Real-time fraud detection',
      '94% model accuracy',
      'Feature engineering with SMOTE',
      'Model explainability with SHAP',
    ],
    role: 'ML Engineer - Developed the fraud detection pipeline, performed feature engineering, and optimized model performance.',
    thumbnailVariant: 'desktop',
    thumbnail: '/images/projects/fraud-detection.png',
    thumbnailAlt: 'Fraud detection dashboard',
    links: [
      {
        label: 'View Code',
        href: 'https://github.com/BA-3-2-Mavuti/Credit-Card-Fraud-Detection.git',
      },
    ],
  },
];