"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Features";

export default function Charity() {
  return (
    <section className="py-28">
      <div className="container-px mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeading
            eyebrow="Giving back"
            title="Every part of PetPal feeds the mission"
            description="A share of PetPal's revenue, plus direct crypto and fiat donations through PetVault, goes straight to shelters and rescue partners."
          />
          <div className="mt-8 space-y-5">
            <ProgressRow label="Shelter meals funded" value={82} />
            <ProgressRow label="Vet care sponsorships" value={64} />
            <ProgressRow label="Adoption transport costs" value={47} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-4xl glass-card p-8 shadow-card"
        >
          <h4 className="font-display font-bold text-lg mb-6">Transparency dashboard</h4>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Animals helped", value: "3,240" },
              { label: "Raised this year", value: "$186K" },
              { label: "Shelter partners", value: "58" },
              { label: "Countries supported", value: "14" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold gradient-text">{s.value}</p>
                <p className="text-xs text-ink-900/55 dark:text-white/55 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProgressRow({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-ink-900/70 dark:text-white/70">{label}</span>
        <span className="font-semibold">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-ink-900/5 dark:bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-cta-gradient"
        />
      </div>
    </div>
  );
}
