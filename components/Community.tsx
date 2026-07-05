"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Camera, Target } from "lucide-react";
import { SectionHeading } from "./Features";

const blocks = [
  { icon: Trophy, title: "Leaderboards", desc: "See who's most consistent with walks, feeding, and care this month." },
  { icon: Award, title: "Badges & achievements", desc: "Unlock milestones for streaks, adoptions, and community participation." },
  { icon: Camera, title: "Shared memories", desc: "A feed of pet profiles and moments from owners around the world." },
  { icon: Target, title: "Challenges", desc: "Monthly community challenges, from step counts to training goals." },
];

export default function Community() {
  return (
    <section id="community" className="py-28 bg-royal-50/40 dark:bg-white/[0.02]">
      <div className="container-px mx-auto">
        <SectionHeading
          eyebrow="Community"
          title="Pet parents, showing up for each other"
          description="PetPalHub is more fun with company. Track progress together, celebrate milestones, and share the moments worth remembering."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl glass-card p-7 shadow-card"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-cta-gradient text-white mb-5">
                <b.icon className="h-5 w-5" />
              </div>
              <h4 className="font-display font-bold">{b.title}</h4>
              <p className="mt-2 text-sm text-ink-900/60 dark:text-white/60">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
