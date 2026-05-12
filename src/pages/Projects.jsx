import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { projects } from "../data/siteData.js";
import { itemReveal, stagger } from "../utils/animation.js";

export default function Projects() {
  return (
    <>
      <section className="bg-paper px-5 pb-20 pt-40 sm:px-8 lg:px-10 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Portfolio"
            title="Featured construction advisory portfolios."
            copy="Each project opens into a focused portfolio page with context, scope, and advisory outcomes."
          />
          <motion.div {...stagger} className="mb-12 grid gap-5 md:grid-cols-3">
            {["Industrial delivery", "Commercial interiors", "Public-facing work"].map((item) => (
              <motion.div key={item} {...itemReveal} className="surface-card p-5">
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-black">{item}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div {...stagger} className="grid gap-12 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.a key={project.slug} href={`/projects/${project.slug}`} {...itemReveal} className="group block">
                <div className="image-frame h-72 rounded-sm lg:h-80">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" />
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
          </motion.div>
        </div>
      </section>
      <section className="bg-charcoal px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Portfolio note"
            title="The common thread is not project type. It is coordination pressure."
            copy="Apex is brought in when the work needs more than a standard checklist: active operations, multiple decision makers, compressed timelines, or scope that needs sharper definition."
            light
          />
          <motion.div {...stagger} className="grid gap-5 md:grid-cols-2">
            {["Risk review before mobilization", "Weekly owner visibility", "Trade and stakeholder alignment", "Cleaner closeout documentation"].map((item) => (
              <motion.div key={item} {...itemReveal} className="border-t border-gold/80 pt-5">
                <p className="text-lg font-bold text-white">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
