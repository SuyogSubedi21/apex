import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { services } from "../data/siteData.js";
import { fadeUp } from "../utils/animation.js";

export default function Services() {
  return (
    <section className="bg-warm px-5 pb-20 pt-40 sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Services"
          title="Structured support across the full project lifecycle."
          copy="Every engagement is scoped around practical outcomes: clearer budgets, stronger schedules, safer sites, and fewer surprises."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article key={service.title} {...fadeUp} className="surface-card p-7 transition hover:-translate-y-1">
              <span className="font-display text-4xl font-semibold text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-10 text-2xl font-extrabold text-black">{service.title}</h3>
              <p className="mt-4 max-w-2xl leading-8 text-black">{service.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
