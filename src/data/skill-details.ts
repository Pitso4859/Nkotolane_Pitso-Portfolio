export type SkillDetail = {
  summary: string;
  usedIn: string[];
};

export const skillDetails: Record<string, SkillDetail> = {
  Java: {
    summary: 'OOP, multithreading, and enterprise application development with Spring Boot.',
    usedIn: ['Celse Academy', 'Clinic Management System', 'University Projects'],
  },
  'Spring Boot': {
    summary: 'REST APIs, dependency injection, and microservices architecture.',
    usedIn: ['Celse Academy', 'Clinic Management System'],
  },
  JavaScript: {
    summary: 'ES6+, async flows, and full-stack scripting.',
    usedIn: ['Portfolio Website', 'Weather App', 'University projects'],
  },
  TypeScript: {
    summary: 'Typed components, safer APIs, and maintainable codebases.',
    usedIn: ['Portfolio Website', 'React Projects'],
  },
  React: {
    summary: 'Component-driven UIs with hooks, routing, and modern patterns.',
    usedIn: ['Portfolio Website', 'Dashboard Applications'],
  },
  'Node.js': {
    summary: 'Server runtimes, REST APIs, and backend tooling.',
    usedIn: ['API Projects', 'Backend Services'],
  },
  Python: {
    summary: 'Data analysis, machine learning, and scripting.',
    usedIn: ['AI Credit Card Fraud Detection', 'Data Analysis'],
  },
  MySQL: {
    summary: 'Relational database design, complex queries, and optimization.',
    usedIn: ['VUT Eats', 'Celse Academy', 'Clinic Management'],
  },
  PostgreSQL: {
    summary: 'Advanced relational features, JSON support, and production databases.',
    usedIn: ['Enterprise Applications', 'Backend Services'],
  },
  MongoDB: {
    summary: 'NoSQL document database for flexible schemas.',
    usedIn: ['REST API Projects', 'Microservices'],
  },
  Firebase: {
    summary: 'Real-time database, authentication, and cloud functions.',
    usedIn: ['GIGConnectSkill SA', 'Mobile Applications'],
  },
  'Oracle Cloud': {
    summary: 'OCI infrastructure, compute, and DevOps tools. Oracle Certified Professional.',
    usedIn: ['Cloud Deployments', 'DevOps Pipelines'],
  },
  Azure: {
    summary: 'Microsoft cloud platform for hosting and services. Azure Fundamentals certified.',
    usedIn: ['Cloud Hosting', 'DevOps'],
  },
  AWS: {
    summary: 'EC2, S3, and cloud infrastructure management.',
    usedIn: ['Cloud Projects', 'Deployment'],
  },
  Docker: {
    summary: 'Containerization for consistent development and deployment.',
    usedIn: ['CI/CD Pipelines', 'DevOps'],
  },
  Git: {
    summary: 'Version control, branching strategies, and collaborative workflows.',
    usedIn: ['All Projects'],
  },
};