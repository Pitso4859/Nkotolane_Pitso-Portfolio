import { Download, ExternalLink } from './icons';

type Certificate = {
  title: string;
  issuer: string;
  file: string;
  category: string;
  image: string;
};

const certificates: Certificate[] = [
  { title: 'Oracle DevOps Professional', issuer: 'Oracle University', file: '/Files/Java%20Devops.pdf', category: 'Cloud and DevOps', image: '/icon-logo/oracle.png' },
  { title: 'Microsoft Azure Fundamentals', issuer: 'Microsoft', file: '/Files/Microsoft%20%20Certificate.pdf', category: 'Cloud and DevOps', image: '/icon-logo/azure.png' },
  { title: 'Spring Boot for Beginners', issuer: 'AmigosCode', file: '/Files/Spring%20Boot%20for%20Beginners_certificate.pdf', category: 'Framework', image: '/icon-logo/spring-boot.png' },
  { title: 'Git and GitHub Fundamentals', issuer: 'AmigosCode', file: '/Files/Git%20%26%20GitHub%20Fundamentals_certificate.pdf', category: 'Version Control', image: '/icon-logo/git.png' },
  { title: 'Java Object Oriented Programming', issuer: 'LinkedIn Learning', file: '/Files/CertificateOfCompletion_Java%20ObjectOriented%20Programming.pdf', category: 'Programming', image: '/icon-logo/java.png' },
  { title: 'CCNA Introduction to Networks', issuer: 'Cisco', file: '/Files/CCNA-_Introduction_to_Networks_certificate_221386653-edu-vut-ac-za_dcef9433-116b-4311-9704-abde837ed158%20(3).pdf', category: 'Networking', image: '/icon-logo/intro-to-networks.png' },
  { title: 'HTML Essentials', issuer: 'Cisco', file: '/Files/HTML_Essentials_certificate_221386653-edu-vut-ac-za_c8c25be4-3298-4906-9032-d2bfb0189fbb.pdf', category: 'Web Development', image: '/icon-logo/html.png' },
  { title: 'IBM Design', issuer: 'IBM', file: '/Files/IBMDesign20251109-32-zfrf4t.pdf', category: 'Design', image: '/icon-logo/ibm.png' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco', file: '/Files/Introduction_to_Cybersecurity_certificate_221386653-edu-vut-ac-za_3c534eb5-ebe0-470f-b122-be7665e0614b%20(2).pdf', category: 'Security', image: '/icon-logo/cybersecurity.png' },
  { title: 'JavaScript Essentials 2', issuer: 'Cisco', file: '/Files/JavaScript_Essentials_2_certificate_221386653-edu-vut-ac-za_26821f19-6aa9-4918-8c09-05d58031b27e%20(1).pdf', category: 'Programming', image: '/icon-logo/javascript.png' },
  { title: 'Networking Basics', issuer: 'Cisco', file: '/Files/Networking_Basics_certificate_221386653-edu-vut-ac-za_ab52bd34-d788-4404-aaa4-e6dc888397e5%20(2).pdf', category: 'Networking', image: '/icon-logo/networking-basics.png' },
  { title: 'Operating Systems Basics', issuer: 'Cisco', file: '/Files/Operating_Systems_Basics_certificate_221386653-edu-vut-ac-za_fd576ec5-3651-46a2-b0f4-611f85250f4f.pdf', category: 'Operating Systems', image: '/icon-logo/operating-systems.png' },
];

const Certificates = () => (
  <section id="certificates" className="section-padding border-y border-[#e4e7eb] bg-[#f6f7f8] dark:border-[#252d39] dark:bg-[#0e141e]">
    <div className="mx-auto w-full min-w-0 max-w-7xl">
      <div className="max-w-2xl">
        <p className="section-kicker">Certificates</p>
        <h2 className="section-title mt-2">Credentials that support my technical foundation.</h2>
        <p className="section-copy mt-3">Cloud, DevOps, networking, programming and core computing certificates are available to view or download.</p>
      </div>

      <div className="mt-8 grid min-w-0 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((cert) => (
          <article
            key={cert.title}
            className="grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-3 rounded-lg border border-[#e0e3e7] bg-white p-3 dark:border-[#2b3441] dark:bg-[#111722] sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-4 sm:p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 ring-1 ring-[#e6e8eb] dark:bg-[#f8fafc] dark:ring-[#3a4350] sm:h-12 sm:w-12">
              <img src={cert.image} alt={`${cert.title} logo`} className="h-full w-full object-contain" loading="lazy" decoding="async" />
            </div>

            <div className="min-w-0 overflow-hidden">
              <p className="truncate text-[10px] font-medium text-[#858e9a] dark:text-zinc-500 sm:text-[11px]">{cert.category}</p>
              <h3 className="mt-0.5 line-clamp-2 break-words text-[13px] font-semibold leading-5 text-[#172033] dark:text-white sm:truncate sm:text-sm">{cert.title}</h3>
              <p className="truncate text-[11px] text-[#7b8491] dark:text-zinc-500 sm:text-xs">{cert.issuer}</p>
            </div>

            <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
              <a
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-[#66707d] transition-colors hover:bg-[#f2f3f5] hover:text-[#172033] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] dark:text-zinc-400 dark:hover:bg-[#1a2230] dark:hover:text-white"
                aria-label={`View ${cert.title}`}
                title="View certificate"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={cert.file}
                download
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-[#2563eb] transition-colors hover:bg-[#eff6ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] dark:text-[#3b82f6] dark:hover:bg-[#0f1b2d]"
                aria-label={`Download ${cert.title}`}
                title="Download certificate"
              >
                <Download className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
