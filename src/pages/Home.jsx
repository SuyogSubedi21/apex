import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { fadeUp } from "../utils/animation.js";
import { projects, services, testimonials } from "../data/siteData.js";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-40 text-white lg:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(246,183,60,0.2),transparent_28%),linear-gradient(115deg,rgba(17,24,29,0.98),rgba(11,13,15,0.78)_52%,rgba(11,13,15,0.98))]" />
      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <motion.div {...fadeUp}>
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-gold">Commercial construction consulting</p>
          <h1 className="font-display text-5xl font-semibold leading-[0.92] text-white sm:text-6xl md:text-8xl">Built with discipline. Delivered with confidence.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
            Apex Construction helps owners and contractors plan smarter, control risk, and deliver complex commercial projects with sharper visibility from preconstruction through closeout.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/contact" className="btn-primary">Start a Project</a>
            <a href="/projects" className="btn-secondary">View Selected Work</a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-white/15 py-5">
            {["18+ yrs", "$420M", "24/7"].map((stat, index) => (
              <div key={stat} className={index === 0 ? "" : "border-l border-white/15 pl-5"}>
                <p className="font-display text-3xl font-semibold text-white">{stat}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.13em] text-white/56">
                  {["field leadership", "advised value", "site coordination"][index]}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="relative overflow-hidden rounded-sm shadow-premium">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&auto=format&fit=crop&q=84"
            alt="Construction crew reviewing a commercial build site"
            className="h-[620px] w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/20 bg-charcoal/84 p-5 backdrop-blur-md">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">Current focus</p>
            <p className="mt-2 text-lg font-bold text-white">Preconstruction risk, schedule control, and active-site logistics.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="bg-warm px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Services"
          title="Structured support across the full project lifecycle."
          copy="Every engagement is scoped around practical outcomes: clearer budgets, stronger schedules, safer sites, and fewer surprises."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article key={service.title} {...fadeUp} className="surface-card p-6 transition hover:-translate-y-1">
              <span className="font-display text-3xl font-semibold text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-9 text-xl font-extrabold text-black">{service.title}</h3>
              <p className="mt-4 leading-7 text-black">{service.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsPreview() {
  return (
    <section className="bg-paper px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Featured projects" title="Commercial environments built with restraint and precision." copy="Open each portfolio to view the project context and advisory scope." />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.a key={project.slug} href={`/projects/${project.slug}`} {...fadeUp} className="group block transition hover:-translate-y-1">
              <div className="h-80 overflow-hidden rounded-sm shadow-premium">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="pt-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-black">{project.type}</p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-black">{project.title}</h3>
                <p className="mt-4 leading-7 text-black">{project.summary}</p>
                <p className="mt-3 text-sm font-bold text-black">Open portfolio</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-warm px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Client perspective" title="Trusted by owners who need the truth early." />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map(([quote, author]) => (
            <motion.blockquote key={author} {...fadeUp} className="border-t border-gold pt-7">
              <p className="font-display text-3xl font-medium leading-tight text-black">"{quote}"</p>
              <footer className="mt-7 text-sm font-extrabold uppercase tracking-[0.14em] text-black">{author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ProjectsPreview />
      <Testimonials />
    </>
  );
}
