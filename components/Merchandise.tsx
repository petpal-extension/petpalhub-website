"use client";

import { motion } from "framer-motion";
import { merchandise } from "@/lib/data";
import { SectionHeading } from "./Features";

const palette = ["from-royal-500/20 to-royal-500/5", "from-violet-500/20 to-violet-500/5", "from-turquoise-500/20 to-turquoise-500/5"];

export default function Merchandise() {
  return (
    <section id="merchandise" className="py-28">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="PawPrints shop"
          title="Their portrait, made into something you'll actually use"
          description="Upload one photo and PawPrints turns it into custom merchandise, printed on demand and shipped to your door."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {merchandise.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl bg-gradient-to-br ${palette[i % 3]} border border-ink-900/5 dark:border-white/10 p-6`}
            >
              <div className="h-20 w-full rounded-xl bg-white/70 dark:bg-white/10 mb-4" />
              <h4 className="font-display font-bold text-sm">{p.name}</h4>
              <p className="text-xs text-ink-900/55 dark:text-white/55 mt-1">{p.blurb}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
