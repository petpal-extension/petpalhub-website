import { PawPrint, Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "PetMatch", "Games", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Community Guidelines", "Charity Dashboard", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/10 dark:border-white/10 pt-16 pb-8">
      <div className="container-px mx-auto">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-cta-gradient text-white">
                <PawPrint className="h-4 w-4" />
              </span>
              PetPal
            </a>
            <p className="mt-4 text-sm text-ink-900/60 dark:text-white/60 max-w-xs">
              Your AI companion for every pet parent. Built to help pets live happier,
              healthier lives, and to help more of them find a home.
            </p>
            <div className="mt-5 flex gap-3">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-ink-900/10 dark:border-white/15 hover:bg-ink-900/5 dark:hover:bg-white/10 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-1">
              <h5 className="font-display font-semibold text-sm mb-4">{col.title}</h5>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-ink-900/60 dark:text-white/60 hover:text-royal-600 dark:hover:text-turquoise-400 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-ink-900/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-900/50 dark:text-white/50">
          <p>© {new Date().getFullYear()} PetPal. All rights reserved.</p>
          <p>Made with care, for pets everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
