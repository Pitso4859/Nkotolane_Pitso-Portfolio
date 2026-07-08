// src/components/Projects.tsx
import { ArrowUpRight, Check, ExternalLink, Download } from './icons';
import { projects, type Project } from '../data/projects';
import { primaryButtonSm } from '../lib/button-styles';
import { cn } from '../lib/utils';

const projectsGridClass =
  'grid w-full min-w-0 max-w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-6';

function StackPills({ stack, max = 6 }: { stack: string[]; max?: number }) {
  const visible = stack.slice(0, max);
  const rest = stack.length - visible.length;

  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {visible.map((item) => (
        <li
          key={item}
          className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-[11px] font-medium text-zinc-700 dark:text-zinc-300 transition-colors duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-700"
        >
          {item}
        </li>
      ))}
      {rest > 0 && (
        <li className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-500">
          +{rest}
        </li>
      )}
    </ul>
  );
}

function ProjectLinks({
  links,
  downloadApk,
}: {
  links: NonNullable<Project['links']>;
  downloadApk?: string;
}) {
  return (
    <div
      className="flex flex-wrap gap-2 mt-3"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      {links.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-1.5 text-sm font-semibold',
            link.label === 'Live Demo'
              ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 rounded-lg px-4 py-2 shadow-md'
              : i === 0 && link.label !== 'Live Demo'
              ? primaryButtonSm
              : 'group/link inline-flex items-center gap-1 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-700'
          )}
        >
          {link.label === 'Live Demo' && (
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          )}
          {link.label}
          {!link.download && link.label !== 'Live Demo' && i !== 0 && (
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              aria-hidden
            />
          )}
        </a>
      ))}

      {downloadApk && (
        <a
          href={downloadApk}
          download
          className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 px-4 py-2 text-sm font-semibold shadow-md transition-all duration-200 hover:-translate-y-0.5"
        >
          <Download className="h-3.5 w-3.5" />
          Download APK
        </a>
      )}
    </div>
  );
}

function FeatureList({
  features,
  className,
}: {
  features: string[];
  className?: string;
}) {
  return (
    <ul
      className={cn('grid gap-1.5', className)}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      {features.map((feature) => (
        <li key={feature} className="flex gap-2 text-[12px] leading-relaxed text-zinc-600 dark:text-zinc-400">
          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500 dark:text-emerald-400" aria-hidden />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectThumbnail({ project }: { project: Project }) {
  if (!project.thumbnail) return null;

  const variant = project.thumbnailVariant ?? 'desktop';
  const isFull = variant === 'full';
  const isMobile = variant === 'mobile';
  const isMockup = variant === 'mockup';

  return (
    <div className={cn(
      'overflow-hidden rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900',
      'ring-1 ring-zinc-200/90 dark:ring-zinc-700/90',
      'flex items-center justify-center',
      isFull ? 'w-full' : '',
      isMobile ? 'max-w-[200px] mx-auto' : '',
      isMockup ? 'max-w-[280px] mx-auto' : ''
    )}>
      <img
        src={project.thumbnail}
        alt={project.thumbnailAlt ?? `${project.title} preview`}
        loading="lazy"
        decoding="async"
        className={cn(
          'w-full h-auto transition-transform duration-500 group-hover:scale-105',
          isFull ? 'object-contain max-h-[500px]' : '',
          isMobile ? 'object-contain max-h-[400px]' : '',
          !isFull && !isMobile && !isMockup ? 'object-cover aspect-video' : ''
        )}
      />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        'group relative w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm',
        'transition-all duration-300',
        'hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-300/25 dark:hover:shadow-zinc-800/50',
        'active:border-zinc-300 dark:active:border-zinc-700 active:shadow-lg'
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r from-indigo-500/0 to-purple-500/0 blur-3xl transition-all duration-700 group-hover:from-indigo-500/20 group-hover:to-purple-500/20'
        )}
        aria-hidden
      />

      <div className="flex flex-col p-5">
        {/* Thumbnail Section */}
        <div className="mb-4 overflow-hidden rounded-xl">
          <ProjectThumbnail project={project} />
        </div>

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
        </div>
      </div>
    </article>
  );
}

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
      </div>
    </section>
  );
};

export default Projects;