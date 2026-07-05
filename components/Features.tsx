"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { features } from "@/lib/data";
import PawTrail from "./PawTrail";

export default function Features() {
  return (
    <section id="features" className="py-28">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="The toolkit"
          title="Eleven ways PetPalHub shows up for your pet"
          description="Each module solves one real problem for pet parents, from daily reminders to finding your next family member."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = (Icons as any)[f.icon] ?? Icons.PawPrint;
            return (
              <motion.div
                key={f.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl glass-card p-7 shadow-card"
              >
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${f.gradient} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
                />
                {f.premium && (
                  <span className="absolute right-5 top-5 rounded-full bg-amber/15 px-2.5 py-1 text-[10px] font-bold tracking-wide text-amber">
                    PREMIUM
                  </span>
                )}
                <div
                  className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${f.gradient} text-white shadow-glow`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold">{f.name}</h3>
                <p className="mt-1 text-sm font-semibold text-royal-600 dark:text-turquoise-400">
                  {f.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-900/65 dark:text-white/65">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <PawTrail count={7} />
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl"
    >
      <span
        className={`inline-block text-xs font-bold tracking-[0.2em] uppercase ${
          light ? "text-turquoise-400" : "text-royal-600 dark:text-turquoise-400"
        }`}
      >
        {eyebrow}
      </span>
      <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/70" : "text-ink-900/65 dark:text-white/65"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
