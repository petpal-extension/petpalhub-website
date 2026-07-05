"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-24">
      <div className="container-px mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-4xl bg-ink-950 text-white px-8 py-14 sm:px-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-mesh-dark" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold">Stay in the loop</h2>
            <p className="mt-3 text-white/60 max-w-md mx-auto">
              One email a month: new features, adoption stories, and community highlights. No spam.
            </p>

            {submitted ? (
              <p className="mt-8 text-turquoise-400 font-semibold">You're on the list. Welcome to PetPalHub.</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="flex-1 rounded-full bg-white/10 border border-white/15 px-5 py-3 text-sm placeholder-white/40 focus:bg-white/15 outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cta-gradient px-6 py-3 text-sm font-semibold hover:brightness-110 transition"
                >
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
