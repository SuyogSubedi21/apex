import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { processSteps, serviceApproach, services } from "../data/siteData.js";
import { itemReveal, stagger } from "../utils/animation.js";

export default function Services() {
  return (
    <>
      <section className="bg-warm px-5 pb-20 pt-40 sm:px-8 lg:px-10 lg:pb-24 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Services"
            title="Structured support across the full project lifecycle."
            copy="Every engagement is scoped around practical outcomes: clearer budgets, stronger schedules, safer sites, and fewer surprises."
          />
          <motion.div {...stagger} className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.article key={service.title} {...itemReveal} className="surface-card p-7">
                <span className="font-display text-3xl font-semibold text-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 text-2xl font-extrabold text-black">{service.title}</h3>
                <p className="mt-4 max-w-2xl leading-8 text-black">{service.copy}</p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li key={point} className="border-t border-black/10 pt-3 text-sm font-bold text-black">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-paper px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle
            eyebrow="Engagement model"
            title="Lean enough to move fast, structured enough to protect the work."
            copy="Apex can support a focused preconstruction review, a full delivery advisory role, or a recovery effort for projects that need clearer control."
          />
          <motion.div {...stagger} className="grid gap-4">
            {serviceApproach.map((item) => (
              <motion.div key={item} {...itemReveal} className="surface-card p-6">
                <p className="text-lg font-bold leading-8 text-black">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-charcoal px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Delivery process"
            title="A clear cadence from first review to final handoff."
            copy="The exact scope changes by project, but the work always follows a practical rhythm: understand the risk, organize the plan, coordinate the field, and close cleanly."
            light
          />
          <motion.div {...stagger} className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.article key={step.title} {...itemReveal} className="border-t border-gold/80 pt-6">
                <p className="font-display text-4xl font-semibold text-white">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-8 text-xl font-extrabold text-white">{step.title}</h3>
                <p className="mt-4 leading-7 text-white/72">{step.copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
