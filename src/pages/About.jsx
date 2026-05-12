import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { values } from "../data/siteData.js";
import { fadeUp, imageReveal, itemReveal, stagger } from "../utils/animation.js";

export default function About() {
  return (
    <>
      <section className="bg-paper px-5 pb-20 pt-40 sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div {...imageReveal} className="image-frame rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop&q=82"
              alt="Modern commercial construction site"
              className="h-[560px] w-full object-cover"
            />
          </motion.div>
          <div>
            <SectionTitle
              eyebrow="About Apex"
              title="A construction partner for clients who value clarity."
              copy="We bring senior construction judgment, steady communication, and rigorous project controls to commercial and industrial work."
            />
            <div className="space-y-5 text-lg leading-9 text-black">
              <p>
                Apex Construction was built for owners and operators who need a steadier way to move from idea to active job site. We help teams make sense of budgets, schedules, procurement, phasing, and field constraints before those details become expensive surprises.
              </p>
              <p>
                Our role is practical. We ask direct questions, translate technical conditions into business decisions, and keep the project team focused on the items that control cost, time, safety, and quality.
              </p>
            </div>
            <motion.div {...stagger} className="mt-9 grid gap-5 sm:grid-cols-3">
              {["18+ years field leadership", "$420M advised project value", "Zero-compromise safety culture"].map((item) => (
                <motion.div key={item} {...itemReveal} className="surface-card p-5 text-sm font-bold uppercase tracking-[0.12em] text-black">
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-warm px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="What guides us"
            title="Clear thinking, field-tested judgment, and calm accountability."
            copy="Our best work happens when we help teams spot the real constraint, name it early, and move with discipline."
          />
          <motion.div {...stagger} className="grid gap-5 md:grid-cols-2">
            {values.map(([title, copy]) => (
              <motion.article key={title} {...itemReveal} className="surface-card p-7">
                <h3 className="text-2xl font-extrabold text-black">{title}</h3>
                <p className="mt-4 leading-8 text-black">{copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-charcoal px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Client fit"
            title="We work best with teams that want the truth early."
            copy="The right clients are ready to look clearly at risk, budget, schedule, scope definition, and coordination gaps before momentum hides the warning signs."
            light
          />
          <motion.div {...stagger} className="grid gap-4">
            {["Owners preparing a major tenant improvement or facility expansion", "Contractors who need sharper controls on a complex delivery", "Developers balancing cost, schedule, and stakeholder expectations", "Operators renovating while keeping daily business active"].map((item) => (
              <motion.div key={item} {...itemReveal} className="border-t border-white/18 pt-5">
                <p className="text-lg font-bold text-white">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
