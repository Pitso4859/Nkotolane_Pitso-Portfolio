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
  thumbnailVariant?: 'mobile' | 'desktop' | 'mockup';
  links?: ProjectLink[];
  credentials?: DemoCredential[];
};

export const projects: Project[] = [
  {
    title: 'GIGConnectSkill SA',
    tagline: 'FNB Hackathon Project',
    description:
      'A mobile-first marketplace connecting informal workers with clients in South Africa. Built as part of an FNB hackathon.',
    stack: ['React Native', 'Expo', 'Firebase', 'Redux Toolkit'],
    features: [
      'Worker profile creation and management',
      'Job posting and bidding system',
      'Real-time chat between workers and clients',
      'Payment integration',
      'Ratings and reviews',
    ],
    role: 'Lead Mobile Developer - Built the React Native application, integrated Firebase for real-time features, and implemented the job matching algorithm.',
    thumbnailVariant: 'mobile',
    links: [
      {
        label: 'View Code',
        href: 'https://github.com/Pitso4859/GIGConnectSASkill.git',
      },
    ],
  },
  {
    title: 'AI Credit Card Fraud Detection',
    tagline: 'Machine Learning',
    description:
      'ML pipeline detecting real-time fraudulent transactions with 94% accuracy using Python and scikit-learn.',
    stack: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'XGBoost'],
    features: [
      'Real-time fraud detection',
      '94% model accuracy',
      'Feature engineering and selection',
      'Imbalanced data handling with SMOTE',
      'Model explainability with SHAP',
    ],
    role: 'ML Engineer - Developed the fraud detection pipeline, performed feature engineering, and optimized model performance.',
    thumbnailVariant: 'desktop',
    links: [
      {
        label: 'View Code',
        href: 'https://github.com/BA-3-2-Mavuti/Credit-Card-Fraud-Detection.git',
      },
    ],
  },
  {
    title: 'Celse Academy Management System',
    tagline: 'Enterprise Application',
    description:
      'Educational platform for student management, grade tracking, and course administration using Spring Boot.',
    stack: ['Java', 'Spring Boot', 'Spring MVC', 'MySQL', 'Thymeleaf', 'Bootstrap'],
    features: [
      'Student enrollment and management',
      'Grade tracking and reporting',
      'Course scheduling',
      'Teacher and admin dashboards',
      'PDF report generation',
    ],
    role: 'Full-Stack Developer - Built REST APIs with Spring Boot, implemented database schema, and created responsive Thymeleaf views.',
    thumbnailVariant: 'desktop',
    links: [
      {
        label: 'View Code',
        href: 'https://github.com/Pitso4859/CelseAcademyManagementSystem.git',
      },
    ],
  },
  {
    title: 'VUT Eats',
    tagline: 'Web Application',
    description:
      'Campus food ordering platform with real-time order tracking and restaurant management.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'AJAX'],
    features: [
      'Restaurant listings and menus',
      'Order placement and tracking',
      'User authentication',
      'Admin dashboard for restaurants',
      'Payment integration',
    ],
    role: 'Full-Stack Developer - Developed the ordering system, implemented real-time tracking, and created the admin interface.',
    thumbnailVariant: 'desktop',
    links: [
      {
        label: 'View Code',
        href: 'https://github.com/Pitso4859/VUT-Eats.git',
      },
    ],
  },
  {
    title: 'Clinic Management System',
    tagline: 'In Development',
    description:
      'Healthcare management system for patient records, appointments, and medical history tracking.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'React', 'Tailwind CSS'],
    features: [
      'Patient registration and management',
      'Appointment scheduling',
      'Electronic medical records',
      'Prescription management',
      'Billing and invoicing',
    ],
    role: 'Lead Developer - Architecting the system, implementing REST APIs, and building the React frontend.',
    thumbnailVariant: 'desktop',
    links: [
      {
        label: 'View Code',
        href: 'https://github.com/Pitso4859/clinic-management.git',
      },
    ],
  },
  {
    title: 'Portfolio Website',
    tagline: 'Personal Brand',
    description:
      'Responsive portfolio website with dynamic contact form, chatbot assistant, and skill visualizations.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'Font Awesome'],
    features: [
      'Responsive design for all devices',
      'Interactive skills radar chart',
      'AI-powered chatbot assistant',
      'Contact form with Formspree',
      'Certificate showcase with downloads',
    ],
    role: 'Sole Developer - Designed and built the entire portfolio from scratch.',
    thumbnailVariant: 'desktop',
    links: [
      {
        label: 'View Code',
        href: 'https://github.com/Pitso4859/My-Personal-Portfolio.git',
      },
    ],
  },
];