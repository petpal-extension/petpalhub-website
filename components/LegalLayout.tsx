import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark -z-10" />
        <div className="container-px mx-auto max-w-3xl">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-royal-600 dark:text-turquoise-400">
            PetPalHub
          </span>
          <h1 className="font-display mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink-900/50 dark:text-white/50">
            Last updated: {updated}
          </p>

          <div className="mt-10 rounded-4xl glass-card shadow-card p-8 sm:p-12 legal-prose">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
