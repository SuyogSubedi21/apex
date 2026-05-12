import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { projects } from "../data/siteData.js";
import { fadeUp } from "../utils/animation.js";

export default function Projects() {
  return (
    <section className="bg-paper px-5 pb-20 pt-40 sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Portfolio"
          title="Featured construction advisory portfolios."
          copy="Each project opens into a focused portfolio page with context, scope, and advisory outcomes."
        />
        <div className="grid gap-12 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.a key={project.slug} href={`/projects/${project.slug}`} {...fadeUp} className="group block transition hover:-translate-y-1">
              <div className="h-80 overflow-hidden rounded-sm shadow-premium">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="pt-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-black">{project.type}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-black">{project.title}</h3>
                <p className="mt-4 leading-7 text-black">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stats.map((stat) => (
                    <span key={stat} className="border-b border-gold pb-1 text-xs font-bold uppercase tracking-[0.12em] text-black">
                      {stat}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.14em] text-black">Open portfolio</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
