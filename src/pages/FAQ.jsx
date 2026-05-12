import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { faqs } from "../data/siteData.js";
import { fadeUp } from "../utils/animation.js";

export default function FAQ() {
  return (
    <section className="bg-warm px-5 pb-20 pt-40 sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="FAQ" title="Straight answers before the first meeting." />
        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <motion.div key={question} {...fadeUp} className="surface-card p-7">
              <h3 className="text-xl font-extrabold text-black">{question}</h3>
              <p className="mt-4 leading-7 text-black">{answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
