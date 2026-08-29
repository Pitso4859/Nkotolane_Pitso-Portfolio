// src/components/Projects.tsx
import { ArrowUpRight, Check, ExternalLink, Download } from './icons';
import { projects, type Project } from '../data/projects';
import { cn } from '../lib/utils';

function ProjectThumbnail({ project }: { project: Project }) {
  if (!project.thumbnail) return null;
  return (
    <div className="overflow-hidden rounded-lg border border-[#dfe2e6] bg-[#eef0f2] dark:border-[#303846] dark:bg-[#0e141e]">
      <div className="flex h-7 items-center gap-1.5 border-b border-[#e0e3e7] bg-[#f8f9fa] px-3 dark:border-[#303846] dark:bg-[#171e2a]" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-[#c5cad1] dark:bg-[#4b5563]" />
        <span className="h-2 w-2 rounded-full bg-[#c5cad1] dark:bg-[#4b5563]" />
        <span className="h-2 w-2 rounded-full bg-[#c5cad1] dark:bg-[#4b5563]" />
      </div>
      <img src={project.thumbnail} alt={project.thumbnailAlt ?? `${project.title} preview`} loading="lazy" decoding="async" className="aspect-[16/9] h-full w-full object-cover object-top" />
    </div>
  );
}

<<<<<<< HEAD
function ProjectLinks({ project }: { project: Project }) {
  if (!project.links && !project.downloadApk) return null;
=======
function ProjectLinks({
  links,
  downloadApk,
}: {
  links: NonNullable<Project['links']>;
  downloadApk?: string;
}) {
>>>>>>> 0f457241666c47c91735386dafd40a9f6f9e76bb
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {project.links?.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
<<<<<<< HEAD
            'inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold transition-colors',
            link.label === 'Live Demo'
              ? 'bg-[#172033] text-white hover:bg-[#0f172a] dark:bg-[#3b82f6] dark:text-white dark:hover:bg-[#2563eb]'
              : 'border border-[#d7dbe1] bg-white text-[#374151] hover:bg-[#f6f7f8] dark:border-[#303846] dark:bg-[#111722] dark:text-zinc-200 dark:hover:bg-[#171e2a]'
=======
            'transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-1.5 text-sm font-semibold',
            link.label === 'Live Demo'
              ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 rounded-lg px-4 py-2 shadow-md'
              : i === 0 && link.label !== 'Live Demo'
              ? primaryButtonSm
              : 'group/link inline-flex items-center gap-1 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700'
>>>>>>> 0f457241666c47c91735386dafd40a9f6f9e76bb
          )}
        >
          {link.label === 'Live Demo' ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
          {link.label}
        </a>
      ))}
<<<<<<< HEAD
      {project.downloadApk && (
        <a href={project.downloadApk} download className="inline-flex items-center gap-1.5 rounded-md border border-[#d7dbe1] bg-white px-3 py-2 text-sm font-semibold text-[#374151] hover:bg-[#f6f7f8] dark:border-[#303846] dark:bg-[#111722] dark:text-zinc-200 dark:hover:bg-[#171e2a]"><Download className="h-3.5 w-3.5" />Download APK</a>
=======

      {downloadApk && (
        <a
          href={downloadApk}
          download
          className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 px-4 py-2 text-sm font-semibold shadow-md transition-all duration-200 hover:-translate-y-0.5"
        >
          <Download className="h-3.5 w-3.5" />
          Download APK
        </a>
>>>>>>> 0f457241666c47c91735386dafd40a9f6f9e76bb
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#dfe2e6] bg-white shadow-[0_8px_26px_rgba(15,23,42,0.05)] dark:border-[#2b3441] dark:bg-[#111722]">
      <div className="p-4 pb-0 sm:p-5 sm:pb-0"><ProjectThumbnail project={project} /></div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium text-[#2563eb] dark:text-[#3b82f6]">{project.tagline}</p>
        <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-[#172033] dark:text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#626c79] dark:text-zinc-400">{project.description}</p>

        <div className="mt-4">
          <p className="text-xs font-medium text-[#7b8491] dark:text-zinc-500">Key work</p>
          <ul className="mt-2 space-y-1.5">
            {project.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex gap-2 text-sm leading-5 text-[#4f5967] dark:text-zinc-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb] dark:text-[#3b82f6]" /><span>{feature}</span></li>
            ))}
          </ul>
        </div>

<<<<<<< HEAD
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 6).map((item) => <span key={item} className="rounded-md bg-[#f2f3f5] px-2 py-1 text-[11px] font-medium text-[#596371] dark:bg-[#1a2230] dark:text-zinc-300">{item}</span>)}
=======
        {/* Content Section */}
        <div className="relative flex flex-col gap-2.5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {project.tagline}
            </p>
            <h3 className="mt-1.5 text-xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {project.description}
          </p>

          <FeatureList features={project.features.slice(0, 4)} />

          <p className="text-[11px] text-zinc-500 dark:text-zinc-500 mt-1 leading-relaxed">
            <span className="font-semibold text-zinc-700 dark:text-zinc-400">Role — </span>
            {project.role}
          </p>

          <StackPills stack={project.stack} max={6} />

          {project.links && <ProjectLinks links={project.links} downloadApk={project.downloadApk} />}

          {/* Optional: Add note about creating account */}
          {project.title === 'GIGConnectSA' && (
            <p className="text-[11px] text-center text-zinc-500 dark:text-zinc-500 mt-2 pt-1 border-t border-zinc-100 dark:border-zinc-800">
              💡 Create a free account to explore the platform — choose between Client or Worker role
            </p>
          )}
>>>>>>> 0f457241666c47c91735386dafd40a9f6f9e76bb
        </div>

        <div className="mt-4 border-t border-[#eceef1] pt-4 dark:border-[#29323f]">
          <p className="text-xs font-medium text-[#7b8491] dark:text-zinc-500">My role</p>
          <p className="mt-1.5 text-sm leading-6 text-[#5f6876] dark:text-zinc-400">{project.role}</p>
        </div>

        <div className="mt-auto"><ProjectLinks project={project} /></div>
      </div>
    </article>
  );
}

<<<<<<< HEAD
const Projects = () => (
  <section id="projects" className="section-padding border-y border-[#e4e7eb] bg-[#f6f7f8] dark:border-[#252d39] dark:bg-[#0e141e]">
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div><p className="section-kicker">Selected projects</p><h2 className="section-title mt-2">Work that shows how I build and solve problems.</h2></div>
        <p className="section-copy md:justify-self-end">Each project includes the technologies used, the work I completed and links to source code or a live application where available.</p>
=======
const Projects = () => {
  return (
    <section id="projects" className="section-padding overflow-x-hidden">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="mb-10 text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Featured Work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
            Full-stack applications, AI-powered systems, and innovative software solutions.
            Each project represents real-world impact and technical excellence.
          </p>
        </div>

        <div className={projectsGridClass}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
>>>>>>> 0f457241666c47c91735386dafd40a9f6f9e76bb
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </div>
  </section>
);

export default Projects;
