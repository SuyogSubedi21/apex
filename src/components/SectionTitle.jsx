import { motion } from "framer-motion";
import { fadeUp } from "../utils/animation.js";

export default function SectionTitle({ eyebrow, title, copy, light = false }) {
  const headingClass = light ? "text-white" : "text-black";
  const copyClass = light ? "text-white/82" : "text-ink";

  return (
    <motion.div {...fadeUp} className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
        <h2 className={`max-w-3xl font-display text-4xl font-semibold leading-[1.02] md:text-5xl ${headingClass}`}>{title}</h2>
      </div>
      {copy ? <p className={`max-w-xl text-[0.98rem] leading-8 ${copyClass}`}>{copy}</p> : null}
    </motion.div>
  );
}
