export const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: "easeOut" }
};

export const stagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-90px" },
  transition: { staggerChildren: 0.08 }
};

export const itemReveal = {
  initial: { opacity: 0, y: 26, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] }
};

export const imageReveal = {
  initial: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  whileInView: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
};
