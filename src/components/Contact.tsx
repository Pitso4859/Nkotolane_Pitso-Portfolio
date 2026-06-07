// src/components/Contact.tsx
import { Download, Mail, Phone, MapPin } from './icons';
import PrimaryButton from './ui/PrimaryButton';

const Contact = () => {
  return (
    <section id="contact" className="section-padding overflow-x-hidden">
      <div className="mx-auto w-full min-w-0 max-w-5xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-500">Contact</p>
          <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white sm:text-3xl md:text-4xl">
            Let's build something meaningful
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
            Open to full-time opportunities, freelance projects, and collaborations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-2xl border p-6 backdrop-blur-md border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="mb-4 text-xl font-semibold text-zinc-950 dark:text-white">Get in touch</h3>
            <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
              I'm always open to discussing new opportunities, innovative projects, or potential
              collaborations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
                  <Mail className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">Email</p>
                  <a href="mailto:pnkotolane@gmail.com" className="text-sm text-zinc-800 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400">
                    pnkotolane@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
                  <Phone className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">Phone</p>
                  <a href="tel:+27638654343" className="text-sm text-zinc-800 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400">
                    +27 63 865 4343
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border shadow-sm border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
                  <MapPin className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">Location</p>
                  <p className="text-sm text-zinc-800 dark:text-zinc-300">Johannesburg, South Africa</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/Pitso4859"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 hover:text-indigo-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-indigo-400"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/pitso-nkotolane"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 hover:text-indigo-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-indigo-400"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://wa.me/+27790504859"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border transition-colors border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 hover:text-indigo-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-indigo-400"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.032 2.011c-5.518 0-10 4.483-10 10 0 1.742.446 3.458 1.294 4.95L2 21.99l5.204-1.297c1.444.781 3.08 1.193 4.764 1.193 5.518 0 10-4.482 10-10 0-5.517-4.482-10-10-10zm0 18.5c-1.462 0-2.894-.381-4.138-1.102l-.296-.176-3.074.767.768-3.012-.183-.3c-.777-1.22-1.187-2.63-1.187-4.076 0-4.616 3.756-8.373 8.374-8.373s8.373 3.757 8.373 8.374-3.756 8.373-8.373 8.373zm4.586-6.27c-.252-.126-1.49-.735-1.72-.819-.23-.084-.398-.126-.565.126-.167.252-.647.819-.793.987-.146.168-.292.189-.544.063s-1.062-.392-2.022-1.25c-.748-.668-1.252-1.493-1.398-1.745-.146-.252-.015-.388.11-.513.112-.112.252-.293.378-.439.126-.146.168-.252.252-.419.084-.168.042-.315-.021-.441-.063-.126-.565-1.362-.775-1.864-.204-.487-.412-.421-.566-.429-.146-.008-.313-.008-.48-.008-.168 0-.44.063-.67.315-.23.252-.878.858-.878 2.092 0 1.234.898 2.427 1.023 2.595.126.168 1.767 2.697 4.283 3.783.598.258 1.065.413 1.428.528.6.191 1.146.164 1.577.099.48-.072 1.49-.609 1.7-1.196.21-.587.21-1.09.147-1.196-.063-.105-.231-.168-.483-.294z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border p-6 backdrop-blur-md shadow-sm border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="mb-4 text-xl font-semibold text-zinc-950 dark:text-white">Send a message</h3>
            <form
              action="https://formspree.io/f/xlgpzone"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white dark:focus:ring-indigo-800"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white dark:focus:ring-indigo-800"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-lg border px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white dark:focus:ring-indigo-800"
                >
                  <option value="">Select a subject</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Freelance Work">Freelance Work</option>
                  <option value="Technical Question">Technical Question</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border px-4 py-2.5 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white dark:focus:ring-indigo-800"
                  placeholder="Write your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t pt-8 border-zinc-200 dark:border-zinc-800">
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            Prefer a PDF? Download my CV for recruiters and hiring managers.
          </p>
          <PrimaryButton
            href="/Files/NKOTOLANE PITSO GINTOS RESUME.pdf"
            download="Pitso_Nkotolane_CV.pdf"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download CV
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;