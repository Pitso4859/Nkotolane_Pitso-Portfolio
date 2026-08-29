import PrimaryButton from './ui/PrimaryButton';
import PictureIcon from './ui/PictureIcon';

const Contact = () => (
  <section id="contact" className="section-padding bg-white dark:bg-[#0b0f17]">
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title mt-2">Open to software development opportunities.</h2>
          <p className="section-copy mt-4 max-w-lg">I am interested in Junior Software Developer, Java Developer and Full Stack roles in Johannesburg and Gauteng. Recruiters and hiring managers are welcome to contact me directly.</p>

          <dl className="mt-7 divide-y divide-[#e6e8eb] border-y border-[#e6e8eb] dark:divide-[#29323f] dark:border-[#29323f]">
            <div className="flex items-center gap-3 py-3.5"><PictureIcon surface="transparent" src="/icon-logo/email_logo.png" size="lg" /><div><dt className="text-xs text-[#858e9a] dark:text-zinc-500">Email</dt><dd><a href="mailto:pnkotolane@gmail.com" className="text-sm font-medium text-[#172033] hover:underline dark:text-white">pnkotolane@gmail.com</a></dd></div></div>
            <div className="flex items-center gap-3 py-3.5"><PictureIcon surface="transparent" src="/icon-logo/phone_logo.png" size="lg" /><div><dt className="text-xs text-[#858e9a] dark:text-zinc-500">Phone</dt><dd><a href="tel:+27638654343" className="text-sm font-medium text-[#172033] hover:underline dark:text-white">+27 63 865 4343</a></dd></div></div>
            <div className="flex items-center gap-3 py-3.5"><PictureIcon surface="transparent" src="/icon-logo/location_logo.png" size="lg" /><div><dt className="text-xs text-[#858e9a] dark:text-zinc-500">Location</dt><dd className="text-sm font-medium text-[#172033] dark:text-white">Johannesburg, South Africa</dd></div></div>
          </dl>

          <div className="mt-5 flex flex-wrap gap-2">
            <a href="https://github.com/Pitso4859" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-[#d7dbe1] px-3 py-2 text-sm font-semibold text-[#374151] transition-colors hover:bg-[#f6f7f8] dark:border-[#303846] dark:text-zinc-200 dark:hover:bg-[#171e2a]"><PictureIcon surface="transparent" src="/icon-logo/github_logo.png" size="xs" />GitHub</a>
            <a href="https://linkedin.com/in/pitso-nkotolane" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-[#d7dbe1] px-3 py-2 text-sm font-semibold text-[#374151] transition-colors hover:bg-[#f6f7f8] dark:border-[#303846] dark:text-zinc-200 dark:hover:bg-[#171e2a]"><PictureIcon surface="transparent" src="/icon-logo/linkedin_logo.png" size="xs" />LinkedIn</a>
          </div>
          <div className="mt-5"><PrimaryButton href="/Files/NKOTOLANE PITSO GINTOS RESUME.pdf" download="Pitso_Nkotolane_CV.pdf"><PictureIcon surface="transparent" src="/icon-logo/download_logo.png" size="sm" />Download CV</PrimaryButton></div>
        </div>

        <div className="rounded-xl border border-[#e0e3e7] bg-[#f8f9fa] p-5 dark:border-[#2b3441] dark:bg-[#111722] sm:p-6">
          <div className="mb-5"><h3 className="text-lg font-semibold text-[#172033] dark:text-white">Send me a message</h3><p className="mt-1 text-sm text-[#6a7481] dark:text-zinc-400">Share the role, project or reason for reaching out and I will respond as soon as I can.</p></div>
          <form action="https://formspree.io/f/xlgpzone" method="POST" className="space-y-4">
            <input type="hidden" name="subject" value="Portfolio Contact - {{ inquiry_type }}" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div><label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#4f5967] dark:text-zinc-300">Full name</label><input type="text" id="name" name="name" required className="form-field" placeholder="Your name" /></div>
              <div><label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#4f5967] dark:text-zinc-300">Email address</label><input type="email" id="email" name="email" required className="form-field" placeholder="you@example.com" /></div>
            </div>
            <div><label htmlFor="inquiry_type" className="mb-1.5 block text-sm font-medium text-[#4f5967] dark:text-zinc-300">Subject</label><select id="inquiry_type" name="inquiry_type" required className="form-field"><option value="">Select a subject</option><option value="Job Opportunity">Job opportunity</option><option value="Project Collaboration">Project collaboration</option><option value="Freelance Work">Freelance work</option><option value="Technical Question">Technical question</option><option value="Other">Other</option></select></div>
            <div><label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#4f5967] dark:text-zinc-300">Message</label><textarea id="message" name="message" rows={5} required className="form-field resize-y" placeholder="Tell me about the role, project or reason for contacting me." /></div>
            <button type="submit" className="w-full rounded-md bg-[#172033] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f172a] dark:bg-[#3b82f6] dark:text-white dark:hover:bg-[#2563eb]">Send message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
