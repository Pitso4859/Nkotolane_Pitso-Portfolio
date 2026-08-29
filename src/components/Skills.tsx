type Skill = { name: string; image: string };
type SkillGroup = { title: string; description: string; skills: Skill[] };

const groups: SkillGroup[] = [
  {
    title: 'Backend development',
    description: 'Application logic, APIs and data access.',
    skills: [
      { name: 'Java', image: '/icon-logo/java.png' },
      { name: 'Spring Boot', image: '/icon-logo/spring-boot.png' },
      { name: 'Node.js', image: '/icon-logo/nodejs.png' },
      { name: 'REST APIs', image: '/icon-logo/rest-api.png' },
    ],
  },
  {
    title: 'Frontend development',
    description: 'Responsive and maintainable web interfaces.',
    skills: [
      { name: 'React', image: '/icon-logo/react.png' },
      { name: 'TypeScript', image: '/icon-logo/typescript.png' },
      { name: 'JavaScript', image: '/icon-logo/javascript-alt.png' },
      { name: 'HTML and CSS', image: '/icon-logo/html-css.png' },
    ],
  },
  {
    title: 'Data',
    description: 'Relational and document data for application development.',
    skills: [
      { name: 'PostgreSQL', image: '/icon-logo/postgresql.png' },
      { name: 'MySQL', image: '/icon-logo/mysql.png' },
      { name: 'MongoDB', image: '/icon-logo/mongodb.png' },
      { name: 'Firebase', image: '/icon-logo/firebase.png' },
    ],
  },
  {
    title: 'Tools and cloud',
    description: 'Source control, deployment and supporting tools.',
    skills: [
      { name: 'Git', image: '/icon-logo/git.png' },
      { name: 'Docker', image: '/icon-logo/docker.png' },
      { name: 'Azure', image: '/icon-logo/azure.png' },
      { name: 'Python', image: '/icon-logo/python.png' },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding border-y border-[#e4e7eb] bg-[#f6f7f8] dark:border-[#252d39] dark:bg-[#0e141e]">
    <div className="mx-auto w-full max-w-7xl">
      <div className="max-w-2xl">
        <p className="section-kicker">Technical skills</p>
        <h2 className="section-title mt-2">A practical stack for full stack development.</h2>
        <p className="section-copy mt-3">Java and Spring Boot are my strongest focus. I also work with modern frontend tools, databases, deployment workflows and Python when a project needs them.</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {groups.map((group) => (
          <article key={group.title} className="rounded-xl border border-[#e0e3e7] bg-white p-5 shadow-[0_6px_20px_rgba(15,23,42,0.04)] dark:border-[#2b3441] dark:bg-[#111722]">
            <h3 className="text-base font-semibold text-[#172033] dark:text-white">{group.title}</h3>
            <p className="mt-1.5 min-h-11 text-sm leading-6 text-[#6b7481] dark:text-zinc-400">{group.description}</p>
            <ul className="mt-4 divide-y divide-[#eceef1] border-t border-[#eceef1] dark:divide-[#29323f] dark:border-[#29323f]">
              {group.skills.map(({ name, image }) => (
                <li key={name} className="flex items-center gap-3 py-2.5 text-sm font-medium text-[#374151] dark:text-zinc-200">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white p-1 ring-1 ring-[#e6e8eb] dark:bg-[#f8fafc] dark:ring-[#3a4350]">
                    <img src={image} alt="" aria-hidden="true" className="h-full w-full object-contain" loading="lazy" />
                  </span>
                  {name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
