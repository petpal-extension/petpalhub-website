"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { plans } from "@/lib/data";
import { SectionHeading } from "./Features";

export default function Pricing() {
  return (
    <section id="pricing" className="py-28">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Membership"
          title="Start free. Upgrade when you're ready."
          description="Every plan includes the features that matter most: reminders, adoption search, and community. Premium tiers add convenience and extras."
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-4xl p-8 flex flex-col ${
                p.highlighted
                  ? "bg-ink-950 text-white shadow-glow scale-[1.03] border border-white/10"
                  : "glass-card shadow-card"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cta-gradient px-4 py-1 text-xs font-bold">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p
                className={`text-sm mt-2 ${
                  p.highlighted ? "text-white/60" : "text-ink-900/60 dark:text-white/60"
                }`}
              >
                {p.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{p.price}</span>
                <span className={p.highlighted ? "text-white/50" : "text-ink-900/50 dark:text-white/50"}>
                  {p.period}
                </span>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`h-4 w-4 mt-0.5 shrink-0 ${
                        p.highlighted ? "text-turquoise-400" : "text-turquoise-500"
                      }`}
                    />
                    <span className={p.highlighted ? "text-white/80" : "text-ink-900/75 dark:text-white/75"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  p.highlighted
                    ? "bg-cta-gradient text-white hover:brightness-110"
                    : "border border-ink-900/15 dark:border-white/20 hover:bg-ink-900/5 dark:hover:bg-white/10"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
