type SoftSkill = { name: string; description: string; image: string };
const softSkills: SoftSkill[] = [
  { name: 'Problem solving', description: 'Break problems into smaller parts, test assumptions and work toward practical fixes.', image: '/icon-logo/problem_solving_logo.png' },
  { name: 'Continuous learning', description: 'Keep developing through formal study, certificates and hands on projects.', image: '/icon-logo/education_logo.png' },
  { name: 'Attention to detail', description: 'Care about validation, interface behaviour and the details that affect users.', image: '/icon-logo/attention_to_detail_logo.png' },
  { name: 'Clean code', description: 'Use clear naming and maintainable structure so other developers can follow the work.', image: '/icon-logo/clean_code_logo.png' },
  { name: 'Practical technology choices', description: 'Choose tools based on the product need, maintainability and the problem being solved.', image: '/icon-logo/career_focus_logo.png' },
];

const SoftSkills = () => (
  <section id="soft-skills" className="section-padding bg-white dark:bg-[#0b0f17]">
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
        <div><p className="section-kicker">How I work</p><h2 className="section-title mt-2">Professional habits behind the code.</h2><p className="section-copy mt-3">Good software also depends on communication, consistency and the ability to keep learning.</p></div>
        <div className="grid gap-3 sm:grid-cols-2">
          {softSkills.map(({ name, description, image }, index) => (
            <article key={name} className={index === softSkills.length - 1 ? 'flex gap-4 rounded-lg border border-[#e3e6ea] p-4 dark:border-[#2b3441] sm:col-span-2' : 'flex gap-4 rounded-lg border border-[#e3e6ea] p-4 dark:border-[#2b3441]'}>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#eff6ff] p-1.5 dark:bg-[#f8fafc]">
                <img src={image} alt="" aria-hidden="true" className="h-full w-full object-contain" loading="lazy" />
              </div>
              <div><h3 className="text-sm font-semibold text-[#172033] dark:text-white">{name}</h3><p className="mt-1 text-sm leading-6 text-[#697381] dark:text-zinc-400">{description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SoftSkills;
