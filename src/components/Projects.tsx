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

function ProjectLinks({ project }: { project: Project }) {
  if (!project.links && !project.downloadApk) return null;
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {project.links?.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold transition-colors',
            link.label === 'Live Demo'
              ? 'bg-[#172033] text-white hover:bg-[#0f172a] dark:bg-[#3b82f6] dark:text-white dark:hover:bg-[#2563eb]'
              : 'border border-[#d7dbe1] bg-white text-[#374151] hover:bg-[#f6f7f8] dark:border-[#303846] dark:bg-[#111722] dark:text-zinc-200 dark:hover:bg-[#171e2a]'
          )}
        >
          {link.label === 'Live Demo' ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
          {link.label}
        </a>
      ))}
      {project.downloadApk && (
        <a href={project.downloadApk} download className="inline-flex items-center gap-1.5 rounded-md border border-[#d7dbe1] bg-white px-3 py-2 text-sm font-semibold text-[#374151] hover:bg-[#f6f7f8] dark:border-[#303846] dark:bg-[#111722] dark:text-zinc-200 dark:hover:bg-[#171e2a]"><Download className="h-3.5 w-3.5" />Download APK</a>
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

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 6).map((item) => <span key={item} className="rounded-md bg-[#f2f3f5] px-2 py-1 text-[11px] font-medium text-[#596371] dark:bg-[#1a2230] dark:text-zinc-300">{item}</span>)}
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

const Projects = () => (
  <section id="projects" className="section-padding border-y border-[#e4e7eb] bg-[#f6f7f8] dark:border-[#252d39] dark:bg-[#0e141e]">
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
        <div><p className="section-kicker">Selected projects</p><h2 className="section-title mt-2">Work that shows how I build and solve problems.</h2></div>
        <p className="section-copy md:justify-self-end">Each project includes the technologies used, the work I completed and links to source code or a live application where available.</p>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </div>
  </section>
);

export default Projects;
