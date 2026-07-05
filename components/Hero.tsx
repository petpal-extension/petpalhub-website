"use client";

import { motion } from "framer-motion";
import { Chrome, ArrowRight, PawPrint } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark -z-10" />

      {/* Orbit signature: paw prints circling like planets around a sun-collar */}
      <div className="pointer-events-none absolute right-[-120px] top-24 hidden lg:block h-[420px] w-[420px] opacity-70">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="relative h-full w-full"
        >
          {[0, 90, 180, 270].map((deg, i) => (
            <div
              key={deg}
              className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2"
              style={{ transform: `rotate(${deg}deg) translate(190px) rotate(-${deg}deg)` }}
            >
              <PawPrint
                className={`h-6 w-6 ${
                  i % 2 === 0 ? "text-royal-500" : "text-turquoise-500"
                } drop-shadow-lg`}
              />
            </div>
          ))}
          <div className="absolute inset-10 rounded-full border border-royal-500/20 dark:border-white/10" />
        </motion.div>
      </div>

      <div className="container-px mx-auto relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-semibold tracking-wide text-royal-600 dark:text-turquoise-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse-glow" />
            NOW LIVE ON CHROME
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Everything your pet needs.
            <br />
            <span className="gradient-text">Powered by AI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-ink-900/70 dark:text-white/70"
          >
            PetPal is the Chrome companion for pet parents: reminders that stick, an
            adoption engine with heart, a marketplace you can trust, and a corner of
            the internet built entirely around your pet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-full bg-cta-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:brightness-110 transition"
            >
              <Chrome className="h-4 w-4" />
              Install Chrome Extension
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full glass-card px-7 py-3.5 text-sm font-semibold hover:bg-white/90 dark:hover:bg-white/10 transition"
            >
              Explore Features
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
