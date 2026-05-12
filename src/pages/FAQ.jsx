import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { faqs } from "../data/siteData.js";
import { fadeUp } from "../utils/animation.js";

export default function FAQ() {
  return (
    <>
      <section className="bg-warm px-5 pb-20 pt-40 sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Straight answers before the first meeting."
            copy="Here are the questions owners, contractors, and operators usually ask before bringing Apex into a project conversation."
          />
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
      <section className="bg-charcoal px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-gold">Still deciding?</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[0.98] text-white md:text-6xl">A short project review can reveal a lot.</h2>
          </div>
          <a href="/contact" className="btn-primary self-start md:self-end">Ask Apex</a>
        </div>
      </section>
    </>
  );
}
