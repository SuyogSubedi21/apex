import { motion } from "framer-motion";
import { projects } from "../data/siteData.js";
import { imageReveal, itemReveal, stagger } from "../utils/animation.js";

export default function ProjectDetail({ slug }) {
  const project = projects.find((item) => item.slug === slug) || projects[0];

  return (
    <>
      <section className="bg-paper px-5 pb-20 pt-40 sm:px-8 lg:px-10 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <a href="/projects" className="text-sm font-extrabold uppercase tracking-[0.16em] text-black transition hover:text-gold">Back to projects</a>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-black">{project.type}</p>
              <h1 className="font-display text-5xl font-semibold leading-[1] text-black md:text-7xl">{project.title}</h1>
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
          <motion.div {...imageReveal} className="image-frame mt-12 h-[420px] rounded-sm sm:h-[500px] lg:h-[540px]">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          </motion.div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-display text-4xl font-semibold text-black">Project overview</h2>
              <p className="mt-5 text-lg leading-9 text-black">{project.description}</p>
              <p className="mt-5 text-lg leading-9 text-black">
                The work focused on turning uncertainty into a manageable delivery plan. Apex supported the project team by clarifying decisions, documenting risk, and keeping leadership connected to the field conditions that mattered most.
              </p>
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
          <motion.div {...stagger} className="mt-12 grid gap-5 md:grid-cols-3">
            {["Decision log", "Risk register", "Closeout tracker"].map((item) => (
              <motion.div key={item} {...itemReveal} className="surface-card p-6">
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-black">{item}</p>
                <p className="mt-4 leading-7 text-black">Maintained as a working tool so the team could see ownership, status, and next actions without chasing scattered updates.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-charcoal px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold">Lessons carried forward</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.02] text-white md:text-5xl">Good delivery starts when risk is visible enough to manage.</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Across projects like {project.title}, Apex focuses on the habits that keep work stable: decision clarity, honest reporting, clean documentation, and field coordination that respects how construction actually happens.
          </p>
        </div>
      </section>
    </>
  );
}
