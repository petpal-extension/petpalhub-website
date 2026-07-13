"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, PawPrint } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#merchandise", label: "Shop" },
  { href: "/#community", label: "Community" },
  { href: "/#games", label: "Games" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card shadow-card border-b border-white/40 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 items-center justify-between">
        <a href="/#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <img src="/logo.png" alt="PetPalHub" className="h-8 w-8 rounded-xl" />
          PetPalHub
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ink-900/70 hover:text-ink-950 dark:text-white/70 dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              aria-label="Toggle dark mode"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="grid h-9 w-9 place-items-center rounded-full border border-ink-900/10 dark:border-white/15 hover:bg-ink-900/5 dark:hover:bg-white/10 transition-colors"
            >
              {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          <a
            href="/#download"
            className="hidden sm:inline-flex items-center rounded-full bg-cta-gradient px-5 py-2 text-sm font-semibold text-white shadow-glow hover:brightness-110 transition"
          >
            Install Extension
          </a>
          <button
            aria-label="Toggle menu"
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-ink-900/10 dark:border-white/15"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass-card border-t border-white/40 dark:border-white/10"
          >
            <div className="container-px py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium">
                  {l.label}
                </a>
              ))}
              <a
                href="/#download"
                onClick={() => setOpen(false)}
                className="inline-flex justify-center rounded-full bg-cta-gradient px-5 py-2 text-sm font-semibold text-white"
              >
                Install Extension
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
