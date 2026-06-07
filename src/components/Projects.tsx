import { ArrowUpRight, Check } from './icons';
import { projects, type Project } from '../data/projects';
import { primaryButtonSm } from '../lib/button-styles';
import { cn } from '../lib/utils';

const projectsGridClass =
  'grid w-full min-w-0 max-w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5';

function StackPills({ stack, max = 6 }: { stack: string[]; max?: number }) {
  const visible = stack.slice(0, max);
  const rest = stack.length - visible.length;

  return (
    <ul className="flex flex-wrap gap-1" aria-label="Tech stack">
      {visible.map((item) => (
        <li
          key={item}
          className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-200 hover:text-zinc-800"
        >
          {item}
        </li>
      ))}
      {rest > 0 && (
        <li className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-500">
          +{rest}
        </li>
      )}
    </ul>
  );
}

function ProjectLinks({ links }: { links: NonNullable<Project['links']> }) {
  return (
    <div
      className="flex flex-wrap gap-2"
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
            'transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0',
            i === 0 ? primaryButtonSm : '',
            i !== 0 &&
              'group/link inline-flex items-center gap-1 rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50'
          )}
        >
          {link.label}
          {!link.download && i !== 0 && (
            <ArrowUpRight
              className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              aria-hidden
            />
          )}
        </a>
      ))}
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
      className={cn('grid gap-1 sm:grid-cols-2', className)}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      {features.map((feature) => (
        <li key={feature} className="flex gap-1.5 text-[11px] leading-snug text-zinc-600">
          <Check className="mt-0.5 h-3 w-3 shrink-0 text-zinc-400" aria-hidden />
          <span className="line-clamp-2">{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function ProjectThumbnail({ project }: { project: Project }) {
  if (!project.thumbnail) return null;

  const variant = project.thumbnailVariant ?? 'desktop';
  const isMobile = variant === 'mobile';
  const isMockup = variant === 'mockup';

  // Placeholder image - replace with actual image paths
  const placeholderImage = `/images/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}.png`;
  
  const image = (
    <img
      src={placeholderImage}
      alt={project.thumbnailAlt ?? `${project.title} preview`}
      width={isMobile ? 390 : isMockup ? 480 : 640}
      height={isMobile ? 844 : isMockup ? 480 : 360}
      loading="lazy"
      decoding="async"
      className={cn(
        'w-full',
        isMobile && 'h-full object-cover object-top',
        !isMobile && 'h-auto object-contain'
      )}
    />
  );

  const frameClass = cn(
    'overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-200/90',
    isMobile && 'mx-auto w-full max-w-[200px] p-2',
    isMockup && 'mx-auto w-full max-w-[240px] p-3',
    !isMobile && !isMockup && 'p-3'
  );

  const mediaClass = cn(
    'block w-full transition-opacity duration-300',
    isMobile && 'aspect-[9/19]',
    !isMobile && 'h-auto'
  );

  return (
    <div className={frameClass}>
      <div className={mediaClass}>{image}</div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        'group relative w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm',
        'transition-[border-color,box-shadow] duration-300',
        'hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-300/25',
        'active:border-zinc-300 active:shadow-lg'
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-zinc-300/0 blur-3xl transition-all duration-700 group-hover:bg-zinc-300/30'
        )}
        aria-hidden
      />

      <div className="flex flex-col gap-3 p-4 md:flex-row md:items-start md:gap-5">
        <div className="flex w-full items-center justify-center md:w-[35%]">
          <ProjectThumbnail project={project} />
        </div>
        <div className="relative flex min-w-0 flex-1 flex-col gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
              {project.tagline}
            </p>
            <h3 className="mt-1 text-lg font-bold leading-snug tracking-tight text-zinc-950 transition-colors duration-300 group-hover:text-zinc-800">
              {project.title}
            </h3>
          </div>
          <p className="text-sm text-zinc-600 line-clamp-3">{project.description}</p>
          <FeatureList features={project.features.slice(0, 4)} />
          <p className="text-[11px] text-zinc-500 line-clamp-2">
            <span className="font-semibold text-zinc-700">Role — </span>
            {project.role}
          </p>
          <StackPills stack={project.stack} max={5} />
          {project.links && <ProjectLinks links={project.links} />}
        </div>
      </div>
    </article>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="section-padding overflow-x-hidden">
      <div className="mx-auto w-full min-w-0 max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-zinc-700">
            Featured Work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-600">
            Full-stack applications, AI-powered systems, and innovative software solutions.
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