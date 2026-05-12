import { motion, useScroll } from "framer-motion";
import logoUrl from "../assets/logo.svg";

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Projects", "/projects"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"]
];

export default function Header() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.header initial={{ y: -18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45, ease: "easeOut" }} className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-black">
      <motion.div className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gold" style={{ scaleX: scrollYProgress }} />
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <a href="/" className="flex items-center gap-3 text-white">
          <img src={logoUrl} alt="Apex Construction" className="h-11 w-11" />
          <span>
            <span className="block font-display text-2xl font-bold leading-none">Apex</span>
            <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-gold">Construction</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>
        <a href="/contact" className="hidden rounded-full border border-gold/70 px-5 py-3 text-sm font-bold text-white transition hover:bg-gold hover:text-ink sm:inline-flex">
          Request Consultation
        </a>
      </div>
      <nav className="flex gap-5 overflow-x-auto border-t border-white/20 bg-black px-5 py-3 text-sm sm:px-8 lg:hidden" aria-label="Mobile navigation">
        {navItems.map(([label, href]) => (
          <a key={label} href={href} className="nav-link shrink-0">
            {label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
