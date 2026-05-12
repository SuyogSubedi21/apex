import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { contactReasons } from "../data/siteData.js";
import { fadeUp, itemReveal, stagger } from "../utils/animation.js";

export default function Contact() {
  return (
    <>
      <section className="bg-charcoal px-5 pb-20 pt-40 text-white sm:px-8 lg:px-10 lg:pb-24 lg:pt-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="Let's discuss the project before it gets expensive."
              copy="Send the basics and we'll follow up with the right next step for your scope, stage, and risk profile."
              light
            />
            <div className="space-y-4 text-white/80">
              <p><strong>Office:</strong> 400 Interstate North Pkwy, Atlanta, GA</p>
              <p><strong>Email:</strong> hello@apexadvisors.example</p>
              <p><strong>Phone:</strong> (404) 566-5855</p>
            </div>
            <div className="mt-10 border-t border-white/15 pt-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold">Best first note</p>
              <p className="mt-4 leading-8 text-white/78">
                Share the project location, current stage, target dates, approximate size, known constraints, and the decision you need help making. A rough description is enough to start.
              </p>
            </div>
          </div>
          <motion.form {...fadeUp} className="grid gap-4 border-t border-gold/70 pt-8 text-white">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="field" placeholder="Name" aria-label="Name" />
              <input className="field" placeholder="Company" aria-label="Company" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="field" placeholder="Email" aria-label="Email" />
              <input className="field" placeholder="Project type" aria-label="Project type" />
            </div>
            <textarea className="field min-h-36 py-4" placeholder="Tell us about the project or operational challenge" aria-label="Project details" />
            <button type="button" className="btn-primary justify-self-start border-0">
              Send Inquiry
            </button>
          </motion.form>
        </div>
      </section>
      <section className="bg-warm px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Reasons to reach out"
            title="Bring us in when the project needs sharper control."
            copy="You do not need a perfect scope before the first conversation. Apex can help shape the question, identify the risk, and recommend the right level of support."
          />
          <motion.div {...stagger} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contactReasons.map((reason) => (
              <motion.div key={reason} {...itemReveal} className="surface-card p-6">
                <p className="text-lg font-extrabold text-black">{reason}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-paper px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          {[
            ["1 business day", "Typical response time for new project inquiries."],
            ["30 minute review", "Enough time to understand the core risk and next step."],
            ["No pressure", "If Apex is not the right fit, we will say so clearly."]
          ].map(([stat, copy]) => (
            <motion.div key={stat} {...itemReveal} className="border-t border-gold pt-6">
              <p className="font-display text-4xl font-semibold text-black md:text-5xl">{stat}</p>
              <p className="mt-4 leading-7 text-black">{copy}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
