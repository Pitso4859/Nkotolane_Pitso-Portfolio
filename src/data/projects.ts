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
    title: 'Thusa AI Assistant',
    tagline: 'TUT Student Assistant',
    description: 'AI-powered student support assistant for Tshwane University of Technology — grounded chat with hybrid FAQ retrieval.',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'OpenAI', 'PostgreSQL'],
    features: [
      'Streaming chat with database-grounded answers',
      'Conversation memory with relevance filtering',
      'Hybrid FAQ search across programmes & admissions',
      'Scheduled agent for weekly TUT updates',
    ],
    role: 'Full-Stack AI Developer - Built the chat interface, integrated OpenAI API, and implemented the RAG system for FAQ retrieval.',
    thumbnail: '/images/projects/thusa.png',
    thumbnailAlt: 'Thusa AI Assistant chat interface',
    thumbnailVariant: 'desktop',
    links: [
      {
        label: 'Live Demo',
        href: 'https://thusa-tut-ai-chatbot.vercel.app',
      },
      {
        label: 'View Code',
        href: 'https://github.com/Pitso4859/thusa-ai-assistant.git',
      },
    ],
  },
  {
    title: 'OnSite Municipality',
    tagline: 'Municipality Maintenance',
    description: 'AI-powered maintenance and employment system with incident reporting, classification, and worker assignment.',
    stack: ['React', 'Flutter', 'Firebase Auth', 'Firestore', 'Cloud Functions', 'TensorFlow'],
    features: [
      'Image-based incident reporting',
      'Worker assignment algorithm',
      'Event-driven Cloud Functions',
      'Real-time status updates',
    ],
    role: 'Lead Developer - Architected the system, implemented image classification, and built the worker assignment algorithm.',
    thumbnail: '/images/projects/onsite.png',
    thumbnailAlt: 'OnSite Municipality app interface',
    thumbnailVariant: 'mobile',
    links: [
      {
        label: 'View Code',
        href: 'https://github.com/Pitso4859/onsite-municipality.git',
      },
    ],
    downloadApk: '/apk/onsite-municipality.apk',
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