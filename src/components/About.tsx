const facts = [
  { image: '/icon-logo/location_map_logo.png', label: 'Hometown', value: 'Sephukubje Village, Limpopo' },
  { image: '/icon-logo/location_map_logo.png', label: 'Based in', value: 'Johannesburg, South Africa' },
  { image: '/icon-logo/education_logo.png', label: 'Education', value: 'Diploma in Information Technology' },
  { image: '/icon-logo/career_focus_logo.png', label: 'Career focus', value: 'Software development roles' },
];

const About = () => (
  <section id="about" className="section-padding bg-white dark:bg-[#0b0f17]">
    <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
      <div>
        <p className="section-kicker">About me</p>
        <h2 className="section-title mt-2">From Sephukubje Village to software development.</h2>
        <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-7 text-[#5f6876] dark:text-zinc-400">
          <p>I come from Sephukubje Village in Limpopo. Growing up in a small village taught me to be resourceful, learn independently and keep working through difficult problems.</p>
          <p>I completed a Diploma in Information Technology at Vaal University of Technology and I am continuing with an Advanced Diploma. My strongest technical area is Java development with Spring Boot, supported by React, TypeScript, SQL and cloud fundamentals.</p>
          <p>I am looking for an opportunity where I can contribute to real software, learn from experienced developers and continue improving as an engineer.</p>
        </div>

        <div className="mt-7 flex items-start gap-3 rounded-lg border border-[#e2e5e9] bg-[#f8f9fa] p-4 dark:border-[#2b3441] dark:bg-[#111722]">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#d9dde3] bg-white p-1.5 dark:border-[#343d49] dark:bg-[#f8fafc]">
            <img src="/icon-logo/clean_code_logo.png" alt="" aria-hidden="true" className="h-full w-full object-contain" />
          </div>
          <div><p className="text-sm font-semibold text-[#172033] dark:text-white">What I want to contribute</p><p className="mt-1 text-sm leading-6 text-[#65707d] dark:text-zinc-400">Readable code, dependable application behaviour, thoughtful problem solving and a willingness to learn quickly from the team around me.</p></div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#e2e5e9] bg-[#fbfbfc] dark:border-[#2b3441] dark:bg-[#111722]">
        {facts.map(({ image, label, value }, index) => (
          <div key={label} className={index === 0 ? 'flex gap-4 p-5' : 'flex gap-4 border-t border-[#e5e7eb] p-5 dark:border-[#29323f]'}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white p-1.5 shadow-sm ring-1 ring-[#e0e3e7] dark:bg-[#f8fafc] dark:ring-[#343d49]">
              <img src={image} alt="" aria-hidden="true" className="h-full w-full object-contain" loading="lazy" />
            </div>
            <div><p className="text-xs font-medium text-[#818a96] dark:text-zinc-500">{label}</p><p className="mt-1 text-sm font-semibold text-[#172033] dark:text-white">{value}</p></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
