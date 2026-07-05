"use client";

import { motion } from "framer-motion";
import { Gamepad2, Gift } from "lucide-react";
import { games } from "@/lib/data";
import { SectionHeading } from "./Features";

export default function Games() {
  return (
    <section id="games" className="py-28 bg-royal-50/40 dark:bg-white/[0.02]">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="PawPlays"
          title="A quick break, whenever you need one"
          description="Four pet-themed mini-games built right into the extension, each with its own leaderboard and rewards."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl glass-card p-7 shadow-card text-center"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cta-gradient text-white mb-5">
                <Gamepad2 className="h-6 w-6" />
              </div>
              <h4 className="font-display font-bold">{g.name}</h4>
              <p className="mt-2 text-sm text-ink-900/60 dark:text-white/60">{g.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-ink-900/60 dark:text-white/60">
          <Gift className="h-4 w-4 text-turquoise-500" />
          Earn treats and badges as you play, redeemable in PetBazaar.
        </div>
      </div>
    </section>
  );
}
