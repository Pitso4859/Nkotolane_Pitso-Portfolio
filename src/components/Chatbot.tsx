// src/components/Chatbot.tsx
import { useState, useRef, useEffect, useCallback, type FormEvent, type ReactNode } from 'react';
import { cn } from '../lib/utils';

// ── All certificate & file definitions ─────────────────────────────────────
// IMPORTANT: encodeURIComponent handles spaces & special chars automatically.
// Files MUST be inside /public/Files/ in your project so Vite serves them.
const FILES = {
  resume:         '/Files/NKOTOLANE%20PITSO%20GINTOS%20RESUME.pdf',
  oracle:         '/Files/Java%20Devops.pdf',
  azure:          '/Files/Microsoft%20%20Certificate.pdf',
  springBoot:     '/Files/Spring%20Boot%20for%20Beginners_certificate.pdf',
  git:            '/Files/Git%20%26%20GitHub%20Fundamentals_certificate.pdf',
  java:           '/Files/CertificateOfCompletion_Java%20ObjectOriented%20Programming.pdf',
  ccna:           '/Files/CCNA-_Introduction_to_Networks_certificate_221386653-edu-vut-ac-za_dcef9433-116b-4311-9704-abde837ed158%20(3).pdf',
  html:           '/Files/HTML_Essentials_certificate_221386653-edu-vut-ac-za_c8c25be4-3298-4906-9032-d2bfb0189fbb.pdf',
  ibm:            '/Files/IBMDesign20251109-32-zfrf4t.pdf',
  cybersecurity:  '/Files/Introduction_to_Cybersecurity_certificate_221386653-edu-vut-ac-za_3c534eb5-ebe0-470f-b122-be7665e0614b%20(2).pdf',
  javascript:     '/Files/JavaScript_Essentials_2_certificate_221386653-edu-vut-ac-za_26821f19-6aa9-4918-8c09-05d58031b27e%20(1).pdf',
  networking:     '/Files/Networking_Basics_certificate_221386653-edu-vut-ac-za_ab52bd34-d788-4404-aaa4-e6dc888397e5%20(2).pdf',
  os:             '/Files/Operating_Systems_Basics_certificate_221386653-edu-vut-ac-za_fd576ec5-3651-46a2-b0f4-611f85250f4f.pdf',
};

// All certs as a neat array for "show all" responses
const ALL_CERTS = [
  { label: 'Oracle DevOps Professional',      url: FILES.oracle },
  { label: 'Microsoft Azure Fundamentals',    url: FILES.azure },
  { label: 'Spring Boot for Beginners',       url: FILES.springBoot },
  { label: 'Git & GitHub Fundamentals',       url: FILES.git },
  { label: 'Java OOP Programming',            url: FILES.java },
  { label: 'CCNA: Introduction to Networks',  url: FILES.ccna },
  { label: 'HTML Essentials',                 url: FILES.html },
  { label: 'IBM Design',                      url: FILES.ibm },
  { label: 'Introduction to Cybersecurity',   url: FILES.cybersecurity },
  { label: 'JavaScript Essentials 2',         url: FILES.javascript },
  { label: 'Networking Basics',               url: FILES.networking },
  { label: 'Operating Systems Basics',        url: FILES.os },
];

// ── Types ───────────────────────────────────────────────────────────────────
type FileButton = { label: string; url: string };

interface BotMessage {
  text: string;
  files?: FileButton[];  // download buttons to render below the text
}

interface Message {
  role: 'user' | 'assistant';
  content: BotMessage | string;
  id: string;
}

// ── Knowledge base ──────────────────────────────────────────────────────────
const KNOWLEDGE: Record<string, BotMessage> = {
  greeting: {
    text: `Hello. I am Pitso's portfolio assistant.

Pitso Nkotolane is a Software Developer from Sephukubje Village in Limpopo and is now based in Johannesburg, South Africa.

I can help you review his skills, projects, experience, education, certificates, CV and contact details. What would you like to know?`,
  },
  location: {
    text: `Pitso's background:

• Grew up in Sephukubje Village in Limpopo
• Now based in Johannesburg, Gauteng
• Studied Information Technology at Vaal University of Technology
• Building his career in software development

Growing up in a small village shaped his resourcefulness, persistence and willingness to learn independently.`,
  },
  skills: {
    text: `Pitso's core technical skills:

• Java with Spring Boot and Hibernate
• React, TypeScript and JavaScript
• Python for machine learning and data work
• MySQL, PostgreSQL, MongoDB and Firebase
• REST API design and backend development
• Docker, Git, CI/CD and cloud fundamentals

Java and Spring Boot are his strongest development focus.`,
  },
  experience: {
    text: `Pitso's current experience:

• Contributes to customer facing software and AI enabled financial systems
• Works on application performance, frontend behaviour and code quality
• Uses automated testing and iterative Agile delivery
• Supports deployment and maintenance of application features

His portfolio also includes academic, hackathon and independent software projects.`,
  },
  projects: {
    text: `Pitso's featured projects:

• GIGConnectSA, a marketplace for informal workers and clients
• Mavuti Health Platform, a clinic management application
• Credit Card Fraud Detection, a Python machine learning project
• FinTrackPro, a South African accounting application
• This portfolio, built with React, TypeScript and Tailwind CSS

The project section includes live demos and source code where available.`,
  },
  education: {
    text: `Pitso's education:

• Advanced Diploma in Information Technology at Vaal University of Technology, in progress
• Diploma in Information Technology at Vaal University of Technology, completed in 2025
• Professional certificates in cloud, DevOps, networking and software development`,
  },
  whyHire: {
    text: `Why consider Pitso for a developer role?

• Strong Java and Spring Boot focus
• Hands on full stack project experience
• Experience with React, TypeScript and SQL
• Cloud and DevOps certifications
• Practical experience integrating AI services where they support a product need
• Clear motivation to learn from an experienced development team
• Open to Junior Software Developer, Java Developer and Full Stack opportunities`,
  },
  contact: {
    text: `You can reach Pitso through:

• Email: pnkotolane@gmail.com
• Phone: +27 63 865 4343
• LinkedIn: linkedin.com/in/pitso-nkotolane
• GitHub: github.com/Pitso4859
• WhatsApp: +27 79 050 4859

You can also use the booking section on this portfolio to schedule a call.`,
  },
  booking: {
    text: `To book a call with Pitso:

1. Open the booking section
2. Choose Quick Call, Meeting or Mentorship
3. Pick a date and time
4. Enter your name and email
5. Submit the booking request`,
  },
  resume: { text: 'Here is Pitso\'s CV. Use the button below to download it.', files: [{ label: 'Download CV', url: FILES.resume }] },
  allCerts: { text: 'Here are Pitso\'s certificates. Select any certificate to download it.', files: ALL_CERTS.map(c => ({ label: c.label, url: c.url })) },
  certOracle: { text: 'Oracle DevOps Professional Certificate', files: [{ label: 'Download Oracle DevOps Certificate', url: FILES.oracle }] },
  certAzure: { text: 'Microsoft Azure Fundamentals Certificate', files: [{ label: 'Download Azure Fundamentals Certificate', url: FILES.azure }] },
  certSpringBoot: { text: 'Spring Boot for Beginners Certificate', files: [{ label: 'Download Spring Boot Certificate', url: FILES.springBoot }] },
  certGit: { text: 'Git and GitHub Fundamentals Certificate', files: [{ label: 'Download Git and GitHub Certificate', url: FILES.git }] },
  certJava: { text: 'Java Object Oriented Programming Certificate', files: [{ label: 'Download Java OOP Certificate', url: FILES.java }] },
  certCCNA: { text: 'CCNA Introduction to Networks Certificate', files: [{ label: 'Download CCNA Certificate', url: FILES.ccna }] },
  certHTML: { text: 'HTML Essentials Certificate', files: [{ label: 'Download HTML Essentials Certificate', url: FILES.html }] },
  certIBM: { text: 'IBM Design Certificate', files: [{ label: 'Download IBM Design Certificate', url: FILES.ibm }] },
  certCyber: { text: 'Introduction to Cybersecurity Certificate', files: [{ label: 'Download Cybersecurity Certificate', url: FILES.cybersecurity }] },
  certJS: { text: 'JavaScript Essentials 2 Certificate', files: [{ label: 'Download JavaScript Certificate', url: FILES.javascript }] },
  certNetworking: { text: 'Networking Basics Certificate', files: [{ label: 'Download Networking Basics Certificate', url: FILES.networking }] },
  certOS: { text: 'Operating Systems Basics Certificate', files: [{ label: 'Download Operating Systems Certificate', url: FILES.os }] },
  help: {
    text: `I can help with:

• Pitso's background and journey from Sephukubje Village
• Skills and technologies
• Professional experience
• Featured projects
• Education and certificates
• CV download
• Individual certificate downloads
• Contact information
• Booking a call`,
  },
};

// ── Keyword router ──────────────────────────────────────────────────────────
function getResponse(input: string): BotMessage {
  const q = input.toLowerCase().replace(/[?!.,]/g, '').trim();

  if (q.match(/^(hi|hello|hey|good morning|good afternoon|howzit)/)) return KNOWLEDGE.greeting;
  if (q.includes('help') || q === 'what can you do') return KNOWLEDGE.help;

  //  Location / Origin keywords (new)
  if (q.includes('village') || q.includes('sephukubje') || q.includes('sekgosese') || 
      q.includes('limpopo') || q.includes('johannesburg') || q.includes('location') || 
      q.includes('where') || q.includes('from') || q.includes('born') || q.includes('grew up') ||
      q.includes('origin') || q.includes('hometown') || q.includes('background')) {
    return KNOWLEDGE.location;
  }

  // Resume / CV
  if (q.includes('resume') || q.includes('cv') || q.includes('curriculum')) return KNOWLEDGE.resume;

  // ALL certificates
  if ((q.includes('all') && q.includes('cert')) ||
      (q.includes('all') && q.includes('certif')) ||
      q === 'certifications' || q === 'certificates' ||
      (q.includes('certif') && !q.includes('oracle') && !q.includes('azure') &&
       !q.includes('spring') && !q.includes('git') && !q.includes('java') &&
       !q.includes('ccna') && !q.includes('html') && !q.includes('ibm') &&
       !q.includes('cyber') && !q.includes('javascript') && !q.includes('js') &&
       !q.includes('network') && !q.includes('operat') && !q.includes('os'))) {
    return KNOWLEDGE.allCerts;
  }

  // Individual certificates , order matters (most specific first)
  if (q.includes('oracle') || q.includes('devops'))                  return KNOWLEDGE.certOracle;
  if (q.includes('azure') || (q.includes('microsoft') && q.includes('cert'))) return KNOWLEDGE.certAzure;
  if (q.includes('spring') || (q.includes('boot') && !q.includes('reboot'))) return KNOWLEDGE.certSpringBoot;
  if (q.includes('git') && !q.includes('digital'))                   return KNOWLEDGE.certGit;
  if ((q.includes('java') && !q.includes('javascript') && !q.includes('js')) || q.includes('oop')) return KNOWLEDGE.certJava;
  if (q.includes('ccna') || q.includes('cisco') || (q.includes('network') && q.includes('cert'))) return KNOWLEDGE.certCCNA;
  if (q.includes('html'))                                             return KNOWLEDGE.certHTML;
  if (q.includes('ibm') || (q.includes('design') && q.includes('cert')))     return KNOWLEDGE.certIBM;
  if (q.includes('cyber') || q.includes('security'))                 return KNOWLEDGE.certCyber;
  if (q.includes('javascript') || (q.includes('js') && q.includes('cert')))  return KNOWLEDGE.certJS;
  if (q.includes('network'))                                         return KNOWLEDGE.certNetworking;
  if (q.includes('operating') || q.includes('os') || q.includes('linux'))    return KNOWLEDGE.certOS;

  // General topics
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('language')) return KNOWLEDGE.skills;
  if (q.includes('experi') || q.includes('work history') || q.includes('background'))             return KNOWLEDGE.experience;
  if (q.includes('project') || q.includes('built') || q.includes('portfolio'))                    return KNOWLEDGE.projects;
  if (q.includes('educat') || q.includes('degree') || q.includes('diploma') || q.includes('study')) return KNOWLEDGE.education;
  if (q.includes('hire') || q.includes('why') || q.includes('available') || q.includes('recruit')) return KNOWLEDGE.whyHire;
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) return KNOWLEDGE.contact;
  if (q.includes('book') || q.includes('call') || q.includes('meeting') || q.includes('schedule')) return KNOWLEDGE.booking;

  return {
    text: "I'm not sure about that. Try asking about Pitso's background (where he's from), skills, projects, experience, certifications, or how to book a call , I'm happy to help with any of those!",
  };
}

// ── Suggestion chips ────────────────────────────────────────────────────────
//  Updated suggestions to include location
const SUGGESTIONS = [
  "Where is Pitso from?",
  "What are Pitso's skills?",
  'Download his resume',
  'Show all certificates',
  'Tell me about his projects',
  'Why should I hire him?',
  'How do I book a call?',
];

// ── Download button component ───────────────────────────────────────────────
const DownloadButton = ({ label, url }: FileButton) => (
  <a
    href={url}
    download
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 w-full rounded-lg border border-[#bfdbfe] dark:border-[#1e3a5f] bg-[#eff6ff] dark:bg-[#0f1b2d] px-3 py-2 text-sm font-medium text-[#1d4ed8] dark:text-[#3b82f6] hover:bg-[#eff6ff] dark:hover:bg-[#13233a] transition-colors group"
  >
    <svg className="h-4 w-4 shrink-0 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
    {label}
  </a>
);

// ── Message renderer ────────────────────────────────────────────────────────
function renderBot(content: BotMessage | string) {
  const msg: BotMessage = typeof content === 'string' ? { text: content } : content;
  const lines = msg.text.split('\n');

  const elements: ReactNode[] = [];
  let listItems: string[] = [];

  const flush = (key: string) => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key} className="mt-1 space-y-1 pl-1">
          {listItems.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563eb]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  lines.forEach((raw, i) => {
    const line = raw.trim();
    if (!line) { flush(`f${i}`); return; }
    if (/^[•\-]\s/.test(line) || /^\d+\.\s/.test(line)) {
      listItems.push(line.replace(/^[•\-]\s|^\d+\.\s/, ''));
    } else {
      flush(`f${i}`);
      elements.push(<p key={i} className="text-sm leading-relaxed">{line}</p>);
    }
  });
  flush('fend');

  return (
    <div className="space-y-1.5">
      {elements}
      {msg.files && msg.files.length > 0 && (
        <div className="mt-3 space-y-2">
          {msg.files.map((f, i) => <DownloadButton key={i} {...f} />)}
        </div>
      )}
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: KNOWLEDGE.greeting, id: 'welcome' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => {
        inputRef.current?.focus();
        setHasUnread(false);
        setShowHint(false);
      }, 150);
    }
  }, [isOpen, scrollToBottom]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 7000);
    return () => clearTimeout(t);
  }, []);

  const sendMessage = useCallback((text: string) => {
    const userText = text.trim();
    if (!userText || isLoading) return;

    setShowSuggestions(false);
    setInput('');

    const userMsg: Message = { role: 'user', content: userText, id: `u-${Date.now()}` };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    setTimeout(() => {
      const response = getResponse(userText);
      setMessages(prev => {
        if (!isOpen) setHasUnread(true);
        return [...prev, { role: 'assistant', content: response, id: `a-${Date.now()}` }];
      });
      setIsLoading(false);
    }, 400);
  }, [isLoading, isOpen]);

  const handleSubmit = (e: FormEvent) => { e.preventDefault(); sendMessage(input); };

  const clearChat = () => {
    setMessages([{ role: 'assistant', content: KNOWLEDGE.greeting, id: 'welcome' }]);
    setShowSuggestions(true);
    setIsLoading(false);
  };

  return (
    <>
      {/* ── Floating Button ─────────────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {!isOpen && showHint && (
          <div
            className="flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 shadow-lg dark:border-zinc-700 dark:bg-zinc-800"
            onClick={() => setIsOpen(true)}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2563eb]" />
            </span>
            <span className="whitespace-nowrap text-xs font-medium text-zinc-700 dark:text-zinc-300">
              Ask about Pitso
            </span>
            <button
              onClick={e => { e.stopPropagation(); setShowHint(false); }}
              className="ml-1 text-[11px] text-zinc-400 hover:text-zinc-600"
            >X</button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(o => !o)}
          className={cn(
            'relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg',
            'bg-[#172033] dark:bg-[#3b82f6] dark:text-white',
            'hover:shadow-zinc-400/20 dark:hover:shadow-black/30 transition-shadow duration-200',
          )}
        >
          {hasUnread && !isOpen && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white ring-2 ring-white">!</span>
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

      {/* ── Chat Window ─────────────────────────────────────────────────── */}
      <div
        className={cn(
          'fixed bottom-24 right-6 z-50 flex flex-col',
          'w-[calc(100vw-3rem)] max-w-[380px] sm:max-w-[400px]',
          'rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700',
          'bg-white dark:bg-[#111722] shadow-xl',
          'transition-all duration-300 origin-bottom-right',
          isOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'
        )}
        style={{ height: 'min(580px, calc(100dvh - 7rem))', maxHeight: 'calc(100dvh - 7rem)' }}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center gap-3 bg-[#172033] px-4 py-3 dark:bg-[#111827]">
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
            P
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 ring-2 ring-[#172033]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white leading-tight">Portfolio Assistant</p>
            <p className="text-[11px] text-zinc-300">Skills, projects and experience</p>
          </div>
          <button onClick={clearChat} title="New chat" className="rounded-lg p-1.5 text-white/60 hover:bg-white/20 hover:text-white transition-colors">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button onClick={() => setIsOpen(false)} className="rounded-lg p-1.5 text-white/60 hover:bg-white/20 hover:text-white transition-colors">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 px-4 py-3 scroll-smooth">
          {messages.map(msg => (
            <div key={msg.id} className={cn('flex gap-2', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
              {msg.role === 'assistant' && (
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#172033] text-xs font-bold text-white dark:bg-[#3b82f6] dark:text-white">P</div>
              )}
              <div className={cn(
                'max-w-[85%] rounded-2xl px-3.5 py-2.5',
                msg.role === 'user'
                  ? 'bg-[#172033] text-white rounded-tr-sm text-sm leading-relaxed dark:bg-[#3b82f6] dark:text-white'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-sm'
              )}>
                {msg.role === 'user'
                  ? msg.content as string
                  : renderBot(msg.content as BotMessage)}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#172033] text-xs font-bold text-white dark:bg-[#3b82f6] dark:text-white">P</div>
              <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-zinc-100 dark:bg-zinc-800 px-4 py-3">
                {[0, 150, 300].map(d => <span key={d} className="h-2 w-2 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: `${d}ms` }} />)}
              </div>
            </div>
          )}

          {showSuggestions && !isLoading && (
            <div className="pt-1">
              <p className="mb-2 text-[11px] font-medium text-zinc-400 dark:text-zinc-500">Try asking:</p>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTIONS.map(s => (
                  <button key={s} onClick={() => sendMessage(s)}
                    className="rounded-full border border-[#bfdbfe] dark:border-[#1e3a5f] bg-[#eff6ff] dark:bg-[#0f1b2d] px-3 py-1.5 text-xs font-medium text-[#1d4ed8] dark:text-[#3b82f6] hover:bg-[#eff6ff] dark:hover:bg-[#13233a] transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Book a call shortcut */}
        <div className="shrink-0 px-4 pb-2">
          <button
            onClick={() => { setIsOpen(false); document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="w-full rounded-md bg-[#172033] py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0f172a] dark:bg-[#3b82f6] dark:text-white dark:hover:bg-[#2563eb]"
          >
            Book a Call with Pitso
          </button>
        </div>

        {/* Input */}
        <div className="shrink-0 border-t border-zinc-100 dark:border-zinc-800 px-3 py-3">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about skills, projects or experience..."
              disabled={isLoading}
              maxLength={300}
              className="flex-1 min-w-0 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-3.5 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent disabled:opacity-50 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={cn(
                'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-200',
                input.trim() && !isLoading
                  ? 'bg-[#172033] text-white hover:bg-[#0f172a] dark:bg-[#3b82f6] dark:text-white dark:hover:bg-[#2563eb]'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed'
              )}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
          <p className="mt-1.5 text-center text-[10px] text-zinc-400 dark:text-zinc-600">Portfolio assistant for recruiters and visitors</p>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
