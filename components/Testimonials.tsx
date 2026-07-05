"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "./Features";

export default function Testimonials() {
  return (
    <section className="py-28 bg-royal-50/40 dark:bg-white/[0.02]">
      <div className="container-px mx-auto">
        <SectionHeading eyebrow="Testimonials" title="Loved by pet parents around the world" />
        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl glass-card p-8 shadow-card"
            >
              <Quote className="h-6 w-6 text-turquoise-500 mb-4" />
              <blockquote className="text-base leading-relaxed text-ink-900/80 dark:text-white/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold">{t.name}</span>
                <span className="text-ink-900/50 dark:text-white/50"> — {t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
