// src/components/Certificates.tsx
import { Download, ExternalLink } from './icons';
import { primaryButtonSm } from '../lib/button-styles';
import { cn } from '../lib/utils';
import { 
  FaJava, 
  FaCloud,
  FaMicrosoft,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiCisco,
  SiHtml5,
  SiJavascript,
  // SiIbm removed: not exported by react-icons/si; using MdDesignServices for IBM Design below
} from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';
import { MdSecurity, MdDesignServices } from 'react-icons/md';
import { GiProcessor } from 'react-icons/gi';

// Map certificates to their respective icons (like in Skills component)
const getCertificateIcon = (title: string) => {
  const iconMap: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
    'Oracle DevOps Professional': { 
      icon: FaCloud, 
      color: '#F80000', 
      bg: 'from-red-600 to-orange-600' 
    },
    'Microsoft Azure Fundamentals': { 
      icon: FaMicrosoft, 
      color: '#0078D4', 
      bg: 'from-blue-600 to-cyan-600' 
    },
    'Spring Boot for Beginners': { 
      icon: SiSpringboot, 
      color: '#6db33f', 
      bg: 'from-green-600 to-emerald-600' 
    },
    'Git & GitHub Fundamentals': { 
      icon: FaGitAlt, 
      color: '#F05032', 
      bg: 'from-gray-700 to-gray-900' 
    },
    'Java Object-Oriented Programming': { 
      icon: FaJava, 
      color: '#f89820', 
      bg: 'from-orange-600 to-red-600' 
    },
    'CCNA: Introduction to Networks': { 
      icon: SiCisco, 
      color: '#1BA0D7', 
      bg: 'from-indigo-600 to-purple-600' 
    },
    'HTML Essentials': { 
      icon: SiHtml5, 
      color: '#E34F26', 
      bg: 'from-orange-500 to-red-500' 
    },
    'IBM Design': { 
      icon: MdDesignServices, 
      color: '#052FAD', 
      bg: 'from-blue-600 to-indigo-600' 
    },
    'Introduction to Cybersecurity': { 
      icon: MdSecurity, 
      color: '#00A8FF', 
      bg: 'from-red-600 to-pink-600' 
    },
    'JavaScript Essentials': { 
      icon: SiJavascript, 
      color: '#F7DF1E', 
      bg: 'from-yellow-500 to-amber-600' 
    },
    'Networking Basics': { 
      icon: BiNetworkChart, 
      color: '#00A8FF', 
      bg: 'from-teal-600 to-cyan-600' 
    },
    'Operating Systems Basics': { 
      icon: GiProcessor, 
      color: '#6c5ce7', 
      bg: 'from-purple-600 to-pink-600' 
    },
  };

  // Default icon for any certificate not in map
  const defaultIcon = { icon: MdDesignServices, color: '#8b5cf6', bg: 'from-indigo-600 to-purple-600' };
  
  for (const [key, value] of Object.entries(iconMap)) {
    if (title.includes(key.split(' ')[0]) || title === key) {
      return value;
    }
  }
  return defaultIcon;
};

const certificates = [
  {
    title: 'Oracle DevOps Professional',
    issuer: 'Oracle University',
    file: '/Files/Java%20Devops.pdf',
    category: 'Cloud & DevOps',
  },
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    file: '/Files/Microsoft%20%20Certificate.pdf',
    category: 'Cloud & DevOps',
  },
  {
    title: 'Spring Boot for Beginners',
    issuer: 'AmigosCode',
    file: '/Files/Spring%20Boot%20for%20Beginners_certificate.pdf',
    category: 'Framework',
  },
  {
    title: 'Git & GitHub Fundamentals',
    issuer: 'AmigosCode',
    file: '/Files/Git%20%26%20GitHub%20Fundamentals_certificate.pdf',
    category: 'Version Control',
  },
  {
    title: 'Java Object-Oriented Programming',
    issuer: 'LinkedIn Learning',
    file: '/Files/CertificateOfCompletion_Java%20ObjectOriented%20Programming.pdf',
    category: 'Programming',
  },
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco',
    file: '/Files/CCNA-_Introduction_to_Networks_certificate_221386653-edu-vut-ac-za_dcef9433-116b-4311-9704-abde837ed158%20(3).pdf',
    category: 'Networking',
  },
  {
    title: 'HTML Essentials',
    issuer: 'HTML',
    file: '/Files/HTML_Essentials_certificate_221386653-edu-vut-ac-za_c8c25be4-3298-4906-9032-d2bfb0189fbb.pdf',
    category: 'Web Development',
  },
  {
    title: 'IBM Design',
    issuer: 'IBM',
    file: '/Files/IBMDesign20251109-32-zfrf4t.pdf',
    category: 'Design',
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    file: '/Files/Introduction_to_Cybersecurity_certificate_221386653-edu-vut-ac-za_3c534eb5-ebe0-470f-b122-be7665e0614b%20(2).pdf',
    category: 'Security',
  },
  {
    title: 'JavaScript Essentials',
    issuer: 'JavaScript',
    file: '/Files/JavaScript_Essentials_2_certificate_221386653-edu-vut-ac-za_26821f19-6aa9-4918-8c09-05d58031b27e%20(1).pdf',
    category: 'Programming',
  },
  {
    title: 'Networking Basics',
    issuer: 'Cisco',
    file: '/Files/Networking_Basics_certificate_221386653-edu-vut-ac-za_ab52bd34-d788-4404-aaa4-e6dc888397e5%20(2).pdf',
    category: 'Networking',
  },
  {
    title: 'Operating Systems Basics',
    issuer: 'Cisco',
    file: '/Files/Operating_Systems_Basics_certificate_221386653-edu-vut-ac-za_fd576ec5-3651-46a2-b0f4-611f85250f4f.pdf',
    category: 'Operating Systems',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding overflow-x-hidden">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-700 dark:text-zinc-500">
            Credentials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Certificates
          </h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
            12+ professional certifications across cloud, DevOps, networking, and development.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => {
            const { icon: Icon, bg } = getCertificateIcon(cert.title);
            return (
              <article
                key={cert.title}
                className={cn(
                  'group flex w-full min-w-0 flex-col rounded-2xl border p-5',
                  'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50',
                  'transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700',
                  'hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-zinc-800/50',
                  'hover:-translate-y-0.5'
                )}
              >
                <div className="mb-4 flex items-start gap-4">
                  {/* Logo like in Skills component */}
                  <div className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-xl shadow-md transition-all duration-300 group-hover:scale-110',
                    'bg-gradient-to-br',
                    bg
                  )}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-zinc-950 dark:text-white truncate" title={cert.title}>
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{cert.issuer}</p>
                    <span className="mt-2 inline-block rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                      {cert.category}
                    </span>
                  </div>
                </div>
                <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:gap-3">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700 sm:flex-1"
                  >
                    <ExternalLink className="h-4 w-4 shrink-0" />
                    View
                  </a>
                  <a
                    href={cert.file}
                    download
                    className={cn('w-full justify-center sm:flex-1 inline-flex items-center gap-2', primaryButtonSm)}
                  >
                    <Download className="h-4 w-4 shrink-0" />
                    Download
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;