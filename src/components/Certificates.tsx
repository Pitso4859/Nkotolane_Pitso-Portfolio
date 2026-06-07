// src/components/Chatbot.tsx
import { useState, useRef, useEffect, useCallback } from 'react';
import { cn } from '../lib/utils';

// Knowledge base about Pitso
const KNOWLEDGE_BASE: Record<string, string> = {
  // Skills
  'skills': `Pitso's core technical skills include:

• Java (Spring Boot, Hibernate) - 88% proficiency
• JavaScript/TypeScript (React, Node.js) - 85% proficiency
• Python (ML, Data Analysis) - 78% proficiency
• Database (MySQL, PostgreSQL, MongoDB) - 87% proficiency
• REST API Design - 90% proficiency
• Cloud Platforms (Oracle Cloud, Azure, AWS) - 85% proficiency
• DevOps (Docker, CI/CD) - 75% proficiency`,
  
  'experience': `Pitso has hands-on experience as a Software Developer with:

• 40% improvement in page load time
• Systems serving 10,000+ users
• 85% automated test coverage
• AI-powered financial system contributions
• Full-stack application development
• REST API design and integration
• Agile/Scrum team collaboration`,
  
  'projects': `Pitso's featured projects include:

• GIGConnectSkill SA - Mobile marketplace for informal workers (FNB Hackathon)
• AI Credit Card Fraud Detection - ML pipeline with 94% accuracy
• Portfolio Website - Responsive site with chatbot integration
• VUT Eats - Campus food ordering platform
• Celse Academy Management System - Educational platform with Spring Boot
• Clinic Management System - Healthcare system (In Development)`,
  
  'why hire': `Why hire Pitso?

✓ Proven Technical Skills - 11+ certifications including Oracle DevOps, Azure Fundamentals
✓ Real-World Impact - Improved performance by 40%, served 10K+ users
✓ Full-Stack Expertise - Java, Spring Boot, React, Node.js, SQL
✓ AI and ML Knowledge - Python, scikit-learn, data analysis
✓ Cloud Certified - Oracle Cloud, Microsoft Azure
✓ Strong Communication - Excellent team collaboration
✓ Continuous Learner - Currently pursuing Advanced Diploma in IT`,
  
  'contact': `You can contact Pitso through:

📧 Email: pnkotolane@gmail.com
📱 Phone: +27 63 865 4343
💼 LinkedIn: linkedin.com/in/pitso-nkotolane
🐙 GitHub: github.com/Pitso4859
💬 WhatsApp: +27 79 050 4859

Or use the booking section on this page to schedule a call!`,
  
  'how to book a call': `You can book a call with Pitso by:

1. Scrolling down to the 'Book a Call' section
2. Clicking the 'Book a Call' button in the navigation bar
3. Selecting your preferred meeting type (Quick Call, Meeting, or Mentorship)
4. Choosing a date and time
5. Filling in your name and email

You'll receive a confirmation email immediately!`,
  
  // RESUME / CV
  'resume': `📄 Download Pitso's Resume/CV

/Files/NKOTOLANE PITSO GINTOS RESUME.pdf

The resume includes:
• Detailed work experience and achievements
• Technical skills and proficiencies
• Education and certifications
• Projects portfolio
• Contact information`,
  
  'cv': `📄 Download Pitso's CV

/Files/NKOTOLANE PITSO GINTOS RESUME.pdf

The CV contains:
• 40% performance improvement track record
• Experience with 10K+ user systems
• 85% test coverage achievement
• 11+ professional certifications
• Full-stack development expertise`,
  
  // CERTIFICATIONS with EXACT file paths
  'certifications': `📜 Pitso's Certificates Download:

1. Oracle DevOps Professional
   /Files/Java Devops.pdf

2. Microsoft Azure Fundamentals
   /Files/Microsoft  Certificate.pdf

3. Spring Boot for Beginners
   /Files/Spring Boot for Beginners_certificate.pdf

4. Git and GitHub Fundamentals
   /Files/Git & GitHub Fundamentals_certificate.pdf

5. Java Object-Oriented Programming
   /Files/CertificateOfCompletion_Java ObjectOriented Programming.pdf

6. CCNA: Introduction to Networks
   /Files/CCNA-_Introduction_to_Networks_certificate_221386653-edu-vut-ac-za_dcef9433-116b-4311-9704-abde837ed158 (3).pdf

7. HTML Essentials
   /Files/HTML_Essentials_certificate_221386653-edu-vut-ac-za_c8c25be4-3298-4906-9032-d2bfb0189fbb.pdf

8. IBM Design
   /Files/IBMDesign20251109-32-zfrf4t.pdf

9. Introduction to Cybersecurity
   /Files/Introduction_to_Cybersecurity_certificate_221386653-edu-vut-ac-za_3c534eb5-ebe0-470f-b122-be7665e0614b (2).pdf

10. JavaScript Essentials
    /Files/JavaScript_Essentials_2_certificate_221386653-edu-vut-ac-za_26821f19-6aa9-4918-8c09-05d58031b27e (1).pdf

11. Networking Basics
    /Files/Networking_Basics_certificate_221386653-edu-vut-ac-za_ab52bd34-d788-4404-aaa4-e6dc888397e5 (2).pdf

12. Operating Systems Basics
    /Files/Operating_Systems_Basics_certificate_221386653-edu-vut-ac-za_fd576ec5-3651-46a2-b0f4-611f85250f4f.pdf

Click any button below to download a certificate!`,
  
  'oracle certification': `📜 Oracle DevOps Professional Certificate

/Files/Java Devops.pdf

Click the button below to download:`,
  
  'azure certification': `📜 Microsoft Azure Fundamentals Certificate

/Files/Microsoft  Certificate.pdf

Click the button below to download:`,
  
  'spring boot certification': `📜 Spring Boot for Beginners Certificate

/Files/Spring Boot for Beginners_certificate.pdf

Click the button below to download:`,
  
  'git certification': `📜 Git and GitHub Fundamentals Certificate

/Files/Git & GitHub Fundamentals_certificate.pdf

Click the button below to download:`,
  
  'java certification': `📜 Java Object-Oriented Programming Certificate

/Files/CertificateOfCompletion_Java ObjectOriented Programming.pdf

Click the button below to download:`,
  
  'ccna certification': `📜 CCNA: Introduction to Networks Certificate

/Files/CCNA-_Introduction_to_Networks_certificate_221386653-edu-vut-ac-za_dcef9433-116b-4311-9704-abde837ed158 (3).pdf

Click the button below to download:`,
  
  'html certification': `📜 HTML Essentials Certificate

/Files/HTML_Essentials_certificate_221386653-edu-vut-ac-za_c8c25be4-3298-4906-9032-d2bfb0189fbb.pdf

Click the button below to download:`,
  
  'ibm certification': `📜 IBM Design Certificate

/Files/IBMDesign20251109-32-zfrf4t.pdf

Click the button below to download:`,
  
  'cybersecurity certification': `📜 Introduction to Cybersecurity Certificate

/Files/Introduction_to_Cybersecurity_certificate_221386653-edu-vut-ac-za_3c534eb5-ebe0-470f-b122-be7665e0614b (2).pdf

Click the button below to download:`,
  
  'javascript certification': `📜 JavaScript Essentials Certificate

/Files/JavaScript_Essentials_2_certificate_221386653-edu-vut-ac-za_26821f19-6aa9-4918-8c09-05d58031b27e (1).pdf

Click the button below to download:`,
  
  'networking certification': `📜 Networking Basics Certificate

/Files/Networking_Basics_certificate_221386653-edu-vut-ac-za_ab52bd34-d788-4404-aaa4-e6dc888397e5 (2).pdf

Click the button below to download:`,
  
  'os certification': `📜 Operating Systems Basics Certificate

/Files/Operating_Systems_Basics_certificate_221386653-edu-vut-ac-za_fd576ec5-3651-46a2-b0f4-611f85250f4f.pdf

Click the button below to download:`,
  
  'education': `Pitso's education:

🎓 Advanced Diploma in Information Technology (In Progress - Expected Nov 2026)
🎓 Diploma in Information Technology (Completed Nov 2025)
📜 12+ Professional Certifications including Oracle DevOps, Azure, CCNA, and more`,
  
  'available': `Yes! Pitso is currently available for:

• Full-time opportunities
• Graduate programs
• Freelance projects
• Collaborations

You can book a call directly through the booking section on this page!`,
  
  'hello': `Hello! I'm Pitso's professional assistant. I can help you learn about his technical expertise, work experience, featured projects, certifications, download his resume, and how to connect. What would you like to know?`,
  
  'hi': `Hi there! I'm Pitso's assistant. Ask me about his skills, projects, experience, certifications, resume, or how to book a call with him!`,
  
  'help': `I can help you with:

• Core Skills and Technologies
• Professional Experience
• Featured Projects
• Why Hire Pitso
• Contact Information
• Education and Certifications
• Download Resume/CV
• Download Certificates
• Booking a Call

Just ask me anything about Pitso!`,
};

const SUGGESTIONS = [
  "What are Pitso's skills?",
  "Tell me about his projects",
  "Download his resume",
  "Show me his certifications",
  "Download Oracle certificate",
  "Download CCNA certificate",
  "How can I book a call?",
];

interface Message {
  role: 'user' | 'assistant';
  content: string;
  id: string;
}

function getResponse(input: string): string {
  const normalized = input.toLowerCase().trim().replace(/[?.,!]/g, '');
  
  // Check exact matches
  for (const [key, response] of Object.entries(KNOWLEDGE_BASE)) {
    if (normalized === key || normalized.includes(key)) {
      return response;
    }
  }
  
  // Resume/CV keywords
  if (normalized.includes('resume') || normalized.includes('cv') || 
      normalized.includes('download resume') || normalized.includes('download cv') ||
      normalized.includes('get resume') || normalized.includes('get cv')) {
    return KNOWLEDGE_BASE['resume'];
  }
  
  // All certifications
  if (normalized.includes('all certificates') || normalized.includes('all certifications')) {
    return KNOWLEDGE_BASE['certifications'];
  }
  
  // Certification keywords
  if (normalized.includes('certif') || normalized.includes('credential') || normalized.includes('certificate')) {
    return KNOWLEDGE_BASE['certifications'];
  }
  
  // Specific certifications
  if (normalized.includes('oracle') || normalized.includes('devops')) {
    return KNOWLEDGE_BASE['oracle certification'];
  }
  if (normalized.includes('azure') || normalized.includes('microsoft')) {
    return KNOWLEDGE_BASE['azure certification'];
  }
  if (normalized.includes('spring') || normalized.includes('boot')) {
    return KNOWLEDGE_BASE['spring boot certification'];
  }
  if (normalized.includes('git') || normalized.includes('github')) {
    return KNOWLEDGE_BASE['git certification'];
  }
  if (normalized.includes('java') || normalized.includes('oop')) {
    return KNOWLEDGE_BASE['java certification'];
  }
  if (normalized.includes('ccna') || normalized.includes('cisco')) {
    return KNOWLEDGE_BASE['ccna certification'];
  }
  if (normalized.includes('html')) {
    return KNOWLEDGE_BASE['html certification'];
  }
  if (normalized.includes('ibm')) {
    return KNOWLEDGE_BASE['ibm certification'];
  }
  if (normalized.includes('cyber') || normalized.includes('security')) {
    return KNOWLEDGE_BASE['cybersecurity certification'];
  }
  if (normalized.includes('javascript')) {
    return KNOWLEDGE_BASE['javascript certification'];
  }
  if (normalized.includes('networking')) {
    return KNOWLEDGE_BASE['networking certification'];
  }
  if (normalized.includes('operating') || normalized.includes('os')) {
    return KNOWLEDGE_BASE['os certification'];
  }
  
  // Skills
  if (normalized.includes('skill') || normalized.includes('tech')) {
    return KNOWLEDGE_BASE['skills'];
  }
  
  // Experience
  if (normalized.includes('experienc') || normalized.includes('work')) {
    return KNOWLEDGE_BASE['experience'];
  }
  
  // Projects
  if (normalized.includes('project')) {
    return KNOWLEDGE_BASE['projects'];
  }
  
  // Availability
  if (normalized.includes('hire') || normalized.includes('available')) {
    return KNOWLEDGE_BASE['available'];
  }
  
  // Contact
  if (normalized.includes('contact') || normalized.includes('email')) {
    return KNOWLEDGE_BASE['contact'];
  }
  
  // Booking
  if (normalized.includes('book') || normalized.includes('call')) {
    return KNOWLEDGE_BASE['how to book a call'];
  }
  
  // Education
  if (normalized.includes('education')) {
    return KNOWLEDGE_BASE['education'];
  }
  
  // Greetings
  if (normalized.includes('hello') || normalized.includes('hi')) {
    return KNOWLEDGE_BASE['hello'];
  }
  
  // Help
  if (normalized.includes('help')) {
    return KNOWLEDGE_BASE['help'];
  }
  
  return "I'm not sure about that. I can help with information about Pitso's skills, experience, projects, certifications, resume/CV, and how to contact or book a call with him. What would you like to know?";
}

// Message formatter with download buttons
function formatMessage(text: string) {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  const listItems: string[] = [];
  let inList = false;

  const flushList = (key: string) => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={key} className="mt-2 space-y-1">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <span className="text-indigo-500 mt-0.5">•</span>
              <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
      listItems.length = 0;
      inList = false;
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList(`list-${i}`);
      return;
    }
    
    // Check if line contains a file path
    if (trimmed.includes('/Files/')) {
      // Find all file paths in the line
      const fileMatches = trimmed.matchAll(/(\/Files\/[^\s]+\.pdf)/g);
      const files = Array.from(fileMatches).map(m => m[1]);
      
      if (files.length > 0) {
        files.forEach((fileUrl, idx) => {
          const encodedUrl = encodeURI(fileUrl);
          const fileName = encodedUrl.split('/').pop() || 'document.pdf';
          const displayName = decodeURIComponent(fileName).replace('.pdf', '').substring(0, 45);
          
          elements.push(
            <div key={`${i}-${idx}`} className="my-2">
              <a 
                href={encodedUrl} 
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download {displayName}
              </a>
            </div>
          );
        });
        return;
      }
      
      // Single file fallback
      const urlMatch = trimmed.match(/(\/Files\/[^\s]+\.pdf)/);
      if (urlMatch) {
        const fileUrl = encodeURI(urlMatch[1]);
        const fileName = fileUrl.split('/').pop() || 'document.pdf';
        const displayName = decodeURIComponent(fileName).replace('.pdf', '').substring(0, 45);
        
        elements.push(
          <div key={i} className="my-2">
            <a 
              href={fileUrl} 
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download {displayName}
            </a>
          </div>
        );
        return;
      }
    }
    
    if (trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('✓') || trimmed.startsWith('📜') || trimmed.match(/^\d+\./)) {
      inList = true;
      const cleanItem = trimmed.replace(/^[•\-✓📜]\s*|^\d+\.\s*/u, '');
      listItems.push(cleanItem);
    } else {
      flushList(`list-${i}`);
      elements.push(
        <p key={i} className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 my-1">
          {trimmed}
        </p>
      );
    }
  });
  
  flushList('list-end');

  return <div className="space-y-1.5">{elements}</div>;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm Pitso's professional assistant. I can help you learn about his technical expertise, work experience, featured projects, certifications, download his resume, and how to connect. What would you like to know?",
      id: 'welcome',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => setHasUnread(false), 0);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      const t = setTimeout(() => setHasUnread(true), 0);
      return () => clearTimeout(t);
    }
  }, [messages, isOpen]);

  const sendMessage = useCallback((text: string) => {
    const userText = text.trim();
    if (!userText || isLoading) return;

    setInput('');
    
    const userMsg: Message = {
      role: 'user',
      content: userText,
      id: Date.now().toString(),
    };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    setTimeout(() => {
      const response = getResponse(userText);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: response, id: (Date.now() + 1).toString() },
      ]);
      setIsLoading(false);
    }, 500);
  }, [isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestion = (s: string) => {
    sendMessage(s);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Hello! I'm Pitso's professional assistant. I can help you learn about his technical expertise, work experience, featured projects, certifications, download his resume, and how to connect. What would you like to know?",
        id: 'welcome',
      },
    ]);
  };

  const scrollToBooking = () => {
    setIsOpen(false);
    const element = document.getElementById('booking-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {!isOpen && hasUnread && (
          <div className="flex items-center gap-2 rounded-full bg-white dark:bg-zinc-800 px-3.5 py-2 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-600" />
            </span>
            <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300 whitespace-nowrap">
              Ask me anything!
            </span>
          </div>
        )}

        <button
          onClick={isOpen ? handleClose : handleOpen}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
          className={cn(
            'relative flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300',
            'bg-gradient-to-br from-indigo-600 to-purple-600 text-white',
            'hover:scale-110 hover:shadow-indigo-500/40',
            isOpen && 'rotate-180'
          )}
        >
          {hasUnread && !isOpen && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              1
            </span>
          )}
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>

      {/* Chat Window */}
      <div
        className={cn(
          'fixed bottom-24 right-6 z-50 flex flex-col',
          'w-[90vw] max-w-[380px]',
          'rounded-2xl bg-white dark:bg-zinc-800',
          'shadow-2xl border border-zinc-200 dark:border-zinc-700',
          'transition-all duration-300 origin-bottom-right',
          isOpen
            ? 'scale-100 opacity-100 pointer-events-auto'
            : 'scale-95 opacity-0 pointer-events-none'
        )}
        style={{ height: '600px' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-md">
              <span className="text-white text-base font-bold">P</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-base">Pitso Assistant</h3>
              <p className="text-xs text-green-500 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={clearChat}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
              title="New chat"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button
              onClick={handleClose}
              className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Book a Call Button */}
        <div className="px-4 pt-3">
          <button
            onClick={scrollToBooking}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book a Call with Pitso
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50 dark:bg-zinc-900/50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                'flex',
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-sm mr-2 flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">P</span>
                </div>
              )}
              <div
                className={cn(
                  'max-w-[75%] rounded-2xl px-4 py-2.5 shadow-sm',
                  msg.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-none'
                    : 'bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-100 dark:border-zinc-700'
                )}
              >
                {msg.role === 'user' ? (
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                ) : (
                  formatMessage(msg.content)
                )}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-sm mr-2 flex-shrink-0">
                <span className="text-white text-xs font-bold">P</span>
              </div>
              <div className="bg-white dark:bg-zinc-800 rounded-2xl rounded-bl-none px-5 py-3 shadow-sm border border-gray-100 dark:border-zinc-700">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 2 && !isLoading && (
          <div className="px-4 pb-3 bg-gray-50 dark:bg-zinc-900/50">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSuggestion(s)}
                  className="px-3 py-1.5 text-xs rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors shadow-sm"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-gray-200 dark:border-zinc-700 p-3 bg-white dark:bg-zinc-800 rounded-b-2xl">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="w-full rounded-full border border-gray-300 dark:border-zinc-600 bg-gray-100 dark:bg-zinc-700 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:opacity-50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={cn(
                'w-10 h-10 rounded-full flex items-center justify-center transition-all',
                input.trim() && !isLoading
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
                  : 'bg-gray-200 dark:bg-zinc-700 text-gray-400 cursor-not-allowed'
              )}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;