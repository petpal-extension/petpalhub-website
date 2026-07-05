"use client";

import { motion } from "framer-motion";
import { Chrome, Smartphone, Apple, Monitor } from "lucide-react";

const platforms = [
  { icon: Chrome, name: "Chrome Extension", status: "Available now", live: true, href: "#" },
  { icon: Smartphone, name: "Android", status: "Coming soon", live: false },
  { icon: Apple, name: "iPhone", status: "Coming soon", live: false },
  { icon: Monitor, name: "Desktop", status: "Coming soon", live: false },
];

export default function Download() {
  return (
    <section id="download" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-cta-gradient opacity-[0.06] dark:opacity-[0.1]" />
      <div className="container-px mx-auto text-center max-w-2xl relative">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Get PetPal wherever you are
        </h2>
        <p className="mt-4 text-ink-900/65 dark:text-white/65">
          Start on Chrome today. Mobile and desktop are on the way, starting with PetTune.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href ?? "#"}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-2xl p-6 flex flex-col items-center gap-3 transition ${
                p.live
                  ? "bg-cta-gradient text-white shadow-glow hover:brightness-110"
                  : "glass-card cursor-default opacity-70"
              }`}
            >
              <p.icon className="h-7 w-7" />
              <span className="text-sm font-semibold">{p.name}</span>
              <span className="text-[11px] uppercase tracking-wide opacity-80">{p.status}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
