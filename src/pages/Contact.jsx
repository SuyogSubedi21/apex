import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { fadeUp } from "../utils/animation.js";

export default function Contact() {
  return (
    <section className="bg-charcoal px-5 pb-20 pt-40 text-white sm:px-8 lg:px-10 lg:pb-28 lg:pt-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Let's discuss the project before it gets expensive."
            copy="Send the basics and we'll follow up with the right next step for your scope, stage, and risk profile."
            light
          />
          <div className="space-y-4 text-white/72">
            <p><strong>Office:</strong> 400 Interstate North Pkwy, Atlanta, GA</p>
            <p><strong>Email:</strong> hello@apexadvisors.example</p>
            <p><strong>Phone:</strong> (404) 566-5855</p>
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
  );
}
