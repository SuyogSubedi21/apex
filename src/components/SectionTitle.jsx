import { motion } from "framer-motion";
import { fadeUp } from "../utils/animation.js";

export default function SectionTitle({ eyebrow, title, copy, light = false }) {
  return (
    <motion.div {...fadeUp} className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <p className={`mb-3 text-xs font-extrabold uppercase tracking-[0.22em] ${light ? "text-gold" : "text-gold"}`}>{eyebrow}</p>
        <h2 className={`max-w-3xl font-display text-4xl font-semibold leading-[0.98] md:text-6xl ${light ? "text-white" : "text-black"}`}>{title}</h2>
      </div>
      {copy ? <p className={`max-w-xl leading-8 ${light ? "text-white/72" : "text-black"}`}>{copy}</p> : null}
    </motion.div>
  );
}
