import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { fadeUp } from "../utils/animation.js";

export default function About() {
  return (
    <section className="bg-paper px-5 pb-20 pt-40 sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div {...fadeUp} className="overflow-hidden rounded-sm shadow-premium">
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
          <div className="grid gap-5 sm:grid-cols-3">
            {["18+ years field leadership", "$420M advised project value", "Zero-compromise safety culture"].map((item) => (
              <motion.div key={item} {...fadeUp} className="surface-card p-5 text-sm font-bold uppercase tracking-[0.12em] text-black">
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
