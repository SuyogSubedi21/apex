import { projects } from "../data/siteData.js";

export default function ProjectDetail({ slug }) {
  const project = projects.find((item) => item.slug === slug) || projects[0];

  return (
    <section className="bg-paper px-5 pb-20 pt-40 sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <a href="/projects" className="text-sm font-extrabold uppercase tracking-[0.16em] text-black transition hover:text-gold">Back to projects</a>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-black">{project.type}</p>
            <h1 className="font-display text-6xl font-semibold leading-[0.94] text-black md:text-8xl">{project.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-black">{project.summary}</p>
          </div>
          <div className="surface-card p-7">
            <h2 className="text-2xl font-extrabold text-black">Advisory scope</h2>
            <div className="mt-6 space-y-4">
              {project.details.map((detail) => (
                <div key={detail} className="flex items-center justify-between border-b border-black/20 pb-4 text-black">
                  <span className="font-bold">{detail}</span>
                  <span className="text-gold">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img src={project.image} alt={project.title} className="mt-12 h-[560px] w-full rounded-sm object-cover shadow-premium" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-4xl font-semibold text-black">Project overview</h2>
            <p className="mt-5 text-lg leading-9 text-black">{project.description}</p>
          </div>
          <div className="grid gap-4">
            {project.stats.map((stat) => (
              <div key={stat} className="border-t border-gold pt-5">
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-black">{stat}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="border-t border-black pt-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-black">Challenge</p>
            <p className="mt-4 leading-8 text-black">{project.challenge}</p>
          </div>
          <div className="border-t border-black pt-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-black">Outcome</p>
            <p className="mt-4 leading-8 text-black">{project.outcome}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
