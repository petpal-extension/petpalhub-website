"use client";

import { motion } from "framer-motion";
import { BellRing, HeartPulse, CalendarCheck } from "lucide-react";
import { SectionHeading } from "./Features";

const items = [
  {
    icon: BellRing,
    title: "Motivation & reminders",
    desc: "A gentle nudge for medication, feeding, and walks, plus daily motivational quotes to keep you consistent.",
  },
  {
    icon: HeartPulse,
    title: "Health insights",
    desc: "Track weight, symptoms, and vet visits over time, with plain-language explanations, not jargon.",
  },
  {
    icon: CalendarCheck,
    title: "Daily plans",
    desc: "A simple checklist built around your pet's routine, so nothing falls through the cracks on a busy day.",
  },
];

export default function ExtensionShowcase() {
  return (
    <section className="py-28 bg-ink-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark" />
      <div className="container-px mx-auto relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading
            eyebrow="Inside the extension"
            title="Your pet's whole routine, one click away"
            description="PetPal lives quietly in your browser toolbar until you need it, then puts everything about your pet's day in front of you."
            light
          />
          <div className="mt-10 space-y-6">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cta-gradient">
                  <it.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold">{it.title}</h4>
                  <p className="mt-1 text-sm text-white/60">{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-glow">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-amber/70" />
              <span className="h-3 w-3 rounded-full bg-emerald/70" />
            </div>
            <div className="space-y-3">
              {[
                "9:00 AM — Morning walk with Luna",
                "1:30 PM — Flea medication reminder",
                "6:00 PM — Dinner time for Max",
                "Tomorrow — Vet checkup, Dr. Alvarez",
              ].map((row) => (
                <div
                  key={row}
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/80"
                >
                  {row}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-turquoise-500/30 blur-2xl animate-pulse-glow" />
        </motion.div>
      </div>
    </section>
  );
}
